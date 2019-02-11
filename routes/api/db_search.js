const express = require("express");
const router = express.Router();

const mysql = require("mysql");

// setup mysql server
const connection = mysql.createConnection(
    //   {
    //   host: "localhost",
    //   user: "root",
    //   password: "root",
    //   database: "hcclc_db"
    // } ||
    process.env.JAWSDB_URL
    );

// mysql connection
connection.connect((err)=> {
    if(err) {
        throw err;
    }
    console.log("MySQL connected...");
});

// SQL search string
router.post("/", (req, res, next) => {
    let searchParam = req.body.firstParam;
    let searchTopic = req.body.topicParam;
    connection.query("SELECT * FROM hcclc_db WHERE item_title LIKE '%" + searchParam + "%' && item_topic LIKE '%" + searchTopic + "%'", (err, result) => {
        if (err) console.log("THIS IS THE ERROR: " + err)
        res.send(result);
    })
});


module.exports = router;