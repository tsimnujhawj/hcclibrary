const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mysql = require("mysql");

// setup mysql server
const connection = mysql.createConnection(
  process.env.JAWSDB_URL ||
  {
  host: "localhost",
  user: "root",
  password: "root",
  database: "hcclc_db"
}
);

// mysql connection
connection.connect();

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// enables cors
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// routes requirement
const dbsearch = require("./routes/api/db_search");

// activate routes
app.use("/search", dbsearch);

// Server static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));
  app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

  else {
  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
