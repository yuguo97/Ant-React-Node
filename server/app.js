const express = require('express');
const app = express();
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '910729',
    port: '3306',
    database: 'test'
});

connection.connect();
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  
    if (req.method == 'OPTIONS') {
      res.send(200); 
    }
    else {
      next();
    }
  });


app.get('/v3/api', (req, res) => {
    const sqlStr = 'SELECT * FROM websites ';
    connection.query(sqlStr, (err, results) => {
        if (err) return res.json({ code: 1, message: '资料不存在', affextedRows: 0 })
        res.json({ code: 200, result: results, affextedRows: results.affextedRows })
    })
})

app.listen(7553, () => {
    console.log('正在监听端口3000,http://192.168.0.116:7553/v3/api'); //192.168.1.114换成你的ip,本机ip查询用cmd=>ipconfig
})