require("dotenv").config();
const mysql = require("mysql2");

const db = mysql.createConnection(process.env.DATABASE_URL);

db.connect((err) => {
  if (err) {
    console.log(" DB Connection Failed:", err);
    return;
  }
  console.log("Connected to Railway MySQL");
});

module.exports = db;
