const express = require("express");
const router = express.Router();
// const dbcon = require("../../server.js");
// const db = require("../../db/hcc_database")

const mysql = require("mysql");
// const router = express.Router();

// setup mysql server
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "hcclibrary"
});

// mysql connection
connection.connect();

const id = 5

router.get("/test", (req, res, next) => {
    connection.query("SELECT * FROM item WHERE id = ?", id, (err, result) => {
        if (err) console.log("THIS IS AN ERROR: " + err)
        console.log(result);
    })
});


module.exports = router;