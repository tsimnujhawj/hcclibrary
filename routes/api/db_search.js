const express = require("express");
const router = express.Router();
const dbcon = require("../../server.js");
// const db = require("../../db/hcclc_db_sql.sql")

const mysql = require("mysql");

// setup mysql server
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "hcclc_db"
});

// mysql connection
connection.connect((err)=> {
    if(err) {
        throw err;
    }
    console.log("MySQL connected...");
});

router.get("/", (req, res, next) => {
    console.log("REQ.BODY:", req.body.firstParam)
    connection.query("SELECT * FROM hcclc_db WHERE item_title LIKE '%mulan%'", (err, result) => {
        if (err) console.log("THIS IS THE ERROR: " + err)
        res.send(result);
    })
});

router.post("/q", (req, res, next) => {
    let searchParam = req.body.firstParam
    console.log("THIS IS THE PARAM:", searchParam)
    connection.query("SELECT * FROM hcclc_db WHERE item_title LIKE '%mulan%'", (err, result) => {
        if (err) console.log("THIS IS THE ERROR: " + err)
        console.log(result);
        res.send(result);
    })
});


module.exports = router;