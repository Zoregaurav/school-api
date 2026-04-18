const mysql=require("mysql2");
require('dotenv').config();

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:process.env.DB_PASSWORD,
    database:"schoolDB",
});


db.connect((err) => {
  if (err) {
    console.log(" DB Connection Failed:", err);
    return;
  }
  console.log("Connected to Railway MySQL");
});

module.exports=db;