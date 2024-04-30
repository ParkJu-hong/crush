const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',  // 데이터베이스 서버 주소
  user     : 'root',  // 데이터베이스 사용자 이름
  password : '',  // 데이터베이스 비밀번호
  database : 'cursh'  // 연결할 데이터베이스 이름
});

connection.connect(err => {
  if (err) {
    return console.error('error connecting: ' + err.stack);
  }
  console.log('connected as id ' + connection.threadId);
});

export default connection;