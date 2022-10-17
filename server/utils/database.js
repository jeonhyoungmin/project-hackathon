const mysql = require('mysql');
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'dotheg',
})

// connection.connect();

// connection.query('SELECT * FROM bookmark', function(err, rows, fields) {
//   if (err) throw err;
//   console.log(rows);
// });

// connection.end();

module.exports = connection