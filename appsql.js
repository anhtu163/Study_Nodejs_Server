var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: 'user'
});

connection.connect();
// kiểm tra kết nối thông suốt
//Không viết thế này, viết như phía dưới
/*var queryDone = function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
    connection.end();
}*/

/*connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
    connection.end();
});*/
// truy vấn từ bảng tableuserdata
/*var sql = 'select * from tableuserdata'
connection.query(sql, function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
    connection.end();
});*/

//Insert database

var sql = 'insert into tableuserdata set ?';
var data = {Username: 'h',
Email: 'h@gmail.com',
Fullname: 'huynhanh',
Password:'123',
Retypepassword:'123'};
connection.query(sql,data, function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
    connection.end();
});

console.log('after querying')
