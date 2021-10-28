import express from "express";
import ConnectDB from "./config/connectDB";
import env from 'dotenv';
import configViewEngine from "./config/viewEngine"

// init app
let app = express();

//environment variable or you can say constants
env.config();

//connect to mongodb
ConnectDB();


// config view engine
configViewEngine(app)


var hostName = "localhost";
var port = 8017;



app.get("/",  (req, res) => {
   return res.render("main/master")
});

app.get("/login-register",  (req, res) => {
   return res.render("auth/loginRegister")
});

app.listen(process.env.APP_PORT, process.env.APP_HOST, () => {
    console.log(`hello , im running at ${process.env.APP_HOST}:${process.env.APP_PORT} `);
});

