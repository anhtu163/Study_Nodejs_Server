
/*var {sum, PI} = require('./ulities');

var x =10;
var y = 5;
var s = sum(x , y + PI);
console.log(`${x} + ${y} = ${s}`);*/

// Mã hóa MD5
var MD5 = require('md5.js')
var pass = '123456';
var md5 = new MD5().update(pass).digest('hex');

console.log(md5);

// ko nộp folder node_modules
// Nếu tải file project về và thiếu thư viện, thực
// hiện chạy tải lại các thư viện bằng lệnh 'npm i'

/* Thực hiện gỡ thư viện npm uninstall */