// dựng web server 
/* Hỗ trợ code web server cho node
- express
- koa
- ...
=> Môn này xài express
 */
express 


var express = require("express");

var app = express();


app.listen(3000);

app.get("/", function (request, response) {

    response.render("homePage");
});

app.get("/test", function (request, response) {

    response.render("testPage");
});