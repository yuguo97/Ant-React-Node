const express = require('express');
const app = express();
// const mysql = require('mysql');
const models = require("./db/db");
const WebsitesTVRouter= require('./routers/Websites')

// var connection = mysql.createConnection(models.mysql);

// connection.connect();
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

// const sqlStr = ygSQL.queryAll;
// app.get('/v3/api', (req, res) => {
//     connection.query(sqlStr, (err, results) => {
//         if (err) return res.json({ code: 1, message: '资料不存在', affextedRows: 0 })
//         res.json({ code: 200, result: results, affextedRows: results.affextedRows })
//     })
// })
app.use("/api", WebsitesTVRouter);
app.listen(6551, () => {
    console.log("正在监听端口6551,http://localhost:6551/api"); //192.168.1.114换成你的ip,本机ip查询用cmd=>ipconfig
})