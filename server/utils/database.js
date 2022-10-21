const mysql = require('mysql')
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'dotheg',
})


// 공식 문서 예시 

// connection.connect();
// connect 작성 안해도 문제 없는 것을 확인, 우선 app.js 작성해둠

// connection.query('SELECT * FROM bookmark', function(err, rows, fields) {
//   if (err) throw err;
//   console.log(rows);
// });

// connection.end();
// 연결 종료

module.exports = connection