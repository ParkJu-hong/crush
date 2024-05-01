import mysql from 'mysql';

const connection = mysql.createConnection({
  host     : 'localhost',  // 데이터베이스 서버 주소
  user     : 'root',  // 데이터베이스 사용자 이름
  password : '',  // 데이터베이스 비밀번호
  database : 'crush'  // 연결할 데이터베이스 이름
});

// 해당 스토어에 따른 테이블 모두 조회
export const findAllTableByStoreIdService = async (store_id) => {
    return new Promise((resolve, reject) => {
        connection.query(`select * from crush_table join store on crush_table.store_id = store.id where crush_table.store_id = ${store_id}`, (error, results, fields) => {
            if (error) reject(error);
            else resolve(results);
        });
    });
};

// 해당 스토어에 특정 테이블 조회
export const findTableByStoreIdService = async (store_id, table_num) => {
    return new Promise((resolve, reject) => {
        connection.query(`select * from crush_table
             join store on crush_table.store_id = store.id
            where crush_table.store_id = ${store_id}
            and crush_table.table_num = ${table_num}`, (error, results, fields) => {
            if (error) reject(error);
            else resolve(results);
        });
    });
};

// 해당 스토어에 테이블 추가
export const createTableService = (store_id, table_num) => {
    function formatDate(date) {
        let year = date.getFullYear(); // 년도
        let month = (date.getMonth() + 1).toString().padStart(2, '0'); // 월 (0부터 시작하므로 1을 더해야 함)
        let day = date.getDate().toString().padStart(2, '0'); // 일
        let hours = date.getHours().toString().padStart(2, '0'); // 시
        let minutes = date.getMinutes().toString().padStart(2, '0'); // 분
        let seconds = date.getSeconds().toString().padStart(2, '0'); // 초
    
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    }

    let now = new Date();
    let formattedDate = formatDate(now);


    return new Promise((resolve, reject) => {
        connection.query(`insert into crush_table
            (ithas_time, table_num, store_id)
            values ('${formattedDate}', ${table_num}, ${store_id});`, (error, results, fields) => {
            if (error) reject(error);
            else resolve(results);
        });
    })
};

// 테이블 삭제
