const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const db = require("./client/src/db/hcc_databse")

app.get("/findall", (req, res, next) => {
    console.log("IT WORKS!!!")
});