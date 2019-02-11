const express = require("express");
const router = express.Router();
const dbcon = require("../../server.js");
// const db = require("../../db/hcclc_db_sql.sql")

const mysql = require("mysql");

// setup mysql server
const connection = mysql.createConnection(
      {
      host: "localhost",
      user: "root",
      password: "root",
      database: "hcclc_db"
    } ||
    process.env.JAWSDB_URL
    );

// mysql connection
connection.connect((err)=> {
    if(err) {
        throw err;
    }
    console.log("MySQL connected...");
});

// router.get("/", (req, res, next) => {
//     connection.query("SELECT * FROM hcclc_db WHERE item_title LIKE '%" + searchParam + "%'", (err, result) => {
//         if (err) console.log("THIS IS THE ERROR: " + err)
//         res.send(result);
//     })
// });

// router.post("/", (req, res, next) => {
//     let searchParam = req.body.firstParam
//     connection.query("SELECT * FROM hcclc_db WHERE item_title LIKE '%" + searchParam + "%'", (err, result) => {
//         if (err) console.log("THIS IS THE ERROR: " + err)
//         res.send(result);
//     })
// });

router.post("/", (req, res, next) => {
    let searchParam = req.body.firstParam;
    let searchTopic = req.body.topicParam;
    console.log("Search queries", searchParam, searchTopic)
    connection.query("SELECT * FROM hcclc_db WHERE item_title LIKE '%" + searchParam + "%' && item_topic LIKE '%" + searchTopic + "%'", (err, result) => {
        if (err) console.log("THIS IS THE ERROR: " + err)
        res.send(result);
    })
});


module.exports = router;