// const mysql = require('mysql');
import mysql from 'mysql';

const connection = mysql.createConnection({
  host     : 'localhost',  // 데이터베이스 서버 주소
  user     : 'root',  // 데이터베이스 사용자 이름
  password : '',  // 데이터베이스 비밀번호
  database : 'crush'  // 연결할 데이터베이스 이름
});

// 모두 조회
export const findAllStoreService = async () => {
    return new Promise((resolve, reject) => {
        connection.query('select * from store', (error, results, fields) => {
            if (error) reject(error);
            else resolve(results);
        });
    });
};

// 특정 store 조회
export const findStoreByNameService = (store_name) => {
    return new Promise((resolve, reject) => {
        connection.query(`select * from store where name like '%${store_name}%'`, (error, results, fields) => {
            if (error) reject(error);
            else resolve(results);
        });
    })
};

// store 추가
export const createStoreService = (store_name) => {
    return new Promise((resolve, reject) => {
        connection.query(`insert into store (name) values ('${store_name}')`, (error, results, fields) => {
            if (error) reject(error);
            else resolve(results);
        });
    })
};

// store 삭제
export const deleteStoreService = (store_id) => {
    return new Promise((resolve, reject) => {
        connection.query(`delete from store where id = ${store_id}`, (error, results, fields) => {
            if (error) reject(error);
            else resolve(results);
        });
    })
};
