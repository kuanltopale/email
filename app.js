const express = require("express");
 //const sendMail = require("expressbykunal\controllers\sendMail.js");
const app =express ();

let port = 5000;

const sendMail =require("./controllers/sendMail");

app.get("/",(req,res)=>{
    res.send("hii sever");
});

app.get("/mail",sendMail);

const start = async()=>{
    try{
        app.listen(port,()=>{
            console.log(`welcome to sever. 5000 ${port}`)
        })
    }catch(error){

    }
};

start();