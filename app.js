console.log("Web serverni boshlash");
const express = require("express");
const app = express();
const router = require("./router");



//-------------------1------------------//
//kirish qismi code
 app.use(express.static("public"));
 app.use(express.json());
 app.use(express.urlencoded({extended: true }));

//------------------2--------------//
//session code


//-------------------------3-------------//
//wiews qismi
app.set("views","views");
app.set("view engine","ejs");

//--------------------------4-----------------//
//Routing qismi
app.use("/", router); //har qanday kelgan requestlarni mana shu router filemizga yuborishini soremiz
    module.exports = app;