import express from "express";
import ConnectDB from "./config/connectDB"
import ContactModel from "./models/contact.model"
import env from 'dotenv'

let app = express();

//environment variable or you can say constants
env.config();

//connect to mongodb
ConnectDB();

var hostName = "localhost";
var port = 8017;



app.get("/test-database", async (req, res) => {
    try {
        let item = {
            userId: "3423423",
            contactId: "5678765433456"
        }

        let contact = await ContactModel.createNew(item);
        res.send(contact)
    } catch (error) {
        console.log(error);
    }

});

app.listen(process.env.APP_PORT, process.env.APP_HOST, () => {
    console.log(`hello , im running at ${process.env.APP_HOST}:${process.env.APP_PORT} `);
});

