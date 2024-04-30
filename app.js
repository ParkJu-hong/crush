// import connection from './model/mysql';

const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',  // 데이터베이스 서버 주소
  user     : 'root',  // 데이터베이스 사용자 이름
  password : '',  // 데이터베이스 비밀번호
  database : 'crush'  // 연결할 데이터베이스 이름
});

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
  connection.connect(err => {
    if (err) {
      return console.error('error connecting: ' + err.stack);
    }
    console.log('connected as id ' + connection.threadId);
  });
});

app.get('/table', (req, res) => {
    console.log("req.query: ", req.query.table_id);
    connection.query('select * from crush_table', (error, results, fields) => {
        if (error) throw error;
        console.log(results);
    });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});