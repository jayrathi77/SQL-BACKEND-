const express = require("express");
const mysql = require("mysql2");
const path = require("path");

const app = express();

// EJS Setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// MySQL Connection
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root123",
    database: "delta_app",
});

// Connect Database
connection.connect((err) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log("✅ Database Connected Successfully!");
});

// Home Route
app.get("/", (req, res) => {
    let q = "SELECT COUNT(*) AS totalUsers FROM user";

    connection.query(q, (err, result) => {
        if (err) {
            console.log(err);
            return res.send("Database Error");
        }

        let count = result[0].totalUsers;

        res.render("home", { count });
    });
});

// Start Server
app.listen(8080, () => {
    console.log("🚀 Server is listening on port 8080");
});