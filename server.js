const express = require("express");
const app = express();

var hostName = "localhost";
var port = 8017;

app.get("/helloworld", (req, res) => {
    res.send("<h1>hello world</h1>")
});

app.listen(port, hostName, () => {
    console.log(`hello , im running at ${hostName}:${port} `);
});