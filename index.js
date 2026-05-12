const express = require("express");
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();


const PORT = 5000;

app.get("/",(req, res) => {
    res.send("Server is running fine");
})

app.listen(PORT,() => {
    console.log(`this server run is ${PORT}`);
})