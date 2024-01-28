const mysql = require("mysql2/promise");

const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"My_DB",
    port:3308,
    connectionLimit:50,
    namedPlaceholders:true,
})


module.exports = db;