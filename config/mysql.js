const config = require('./mysql-config.json');
const mysql = require('mysql');
const conn = mysql.createConnection({
  host: config.host,
  user: config.user,
  password : config.password,
  database: config.database
});
conn.connect();

module.exports = conn;