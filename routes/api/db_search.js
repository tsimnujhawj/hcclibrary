const express = require("express");
const router = express.Router();
const fs = require('fs');
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

router.get("/", (req, res, next) => {
    connection.query("SELECT * FROM item WHERE id = ?", id, (err, result) => {
            // write to a new file named logfile.txt
        fs.writeFile('elephants.txt', result, (err) => {  
            // throws an error
        if (err) throw err;
            // success case, the file was saved
        console.log('File saved!');
        });
    })
});


module.exports = router;