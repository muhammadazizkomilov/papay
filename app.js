console.log("Web serverni boshlash");
const express = require("express");
// const res = require("express/lib/response")
const app = express();
//const http = require("http");
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

    module.exports = app;