mysql = require('mysql')

connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'zachary',
    database: 'burgers_db'
})

module.exports = connection;