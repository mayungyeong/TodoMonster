const mysql = require("mysql");

const connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "1234",
    database : "TodoMonster"
});
connection.connect();

module.exports = connection;