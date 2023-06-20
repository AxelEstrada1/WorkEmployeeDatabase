const mysql = require('mysql2');
const util = require("util")
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '3Zwukxtm',
    database: 'employees_db'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to the MySQL database succesfully!');
});
connection.query = util.promisify(connection.query)
module.exports = connection;