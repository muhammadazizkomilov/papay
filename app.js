console.log("Web serverni boshlash");
const express = require("express");
// const res = require("express/lib/response")
const app = express();
//const http = require("http");
const fs = require("fs");
// mongono chaqirish;
const db = require("./server").db();
// bu db orqali databasega turli xilmalumotlarni yozish uqish uchurish yoki delete qilishni.
//amalga oshiradi

// let user;
// fs.readFile("database/user.json","utf8", (err,data) => {
//     if(err) {
//         console.log("ERROR:",err);
// } else {
//     user = JSON.parse(data);
// }
// })

// MongoDB connect


//-------------------1------------------//
 app.use(express.static("public"));
 app.use(express.json());
app.use(express.urlencoded({extended: true }));

//------------------2--------------//



//-------------------------3-------------//
app.set("views","views");
app.set("view engine","ejs");

//--------------------------4-----------------//
app.post("/create-item", (req, res) => {
   // console.log("user entered /create-item");
   console.log(req.body);
   const new_reja = req.body.reja;
   db.collection("plans").insertOne({reja: new_reja}, (err,data) => {
    console.log(data.ops);
    res.json(data.ops[0]);
    // if(err) {
    //     console.log(err);
    //     res.end("something went wrong")
    // } else {
    //     res.end("successfully added");
    // }
   });
   //res.end("success") ;                                  // bu yerda boddyni tekshiri
 //res.json({ test: "success"});
});


     app.get("/",function (req, res) {
      console.log("user entered /create-item");
      db.collection("plans")
      .find()
      .toArray((err, data) => {
       if (err) {
        console.log(err);
        res.end("something went wrong");
       } else {
        //console.log(data);
         res.render("reja",{items: data});
    }
   });
  });

    module.exports = app;