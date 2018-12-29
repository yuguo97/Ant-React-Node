const express = require("express");
const router = express.Router();
const mysql = require("mysql");
const ygSQL = require("../db/ygSQL");
const models = require("../db/db");
var connection = mysql.createConnection(models.mysql);
connection.connect();

//查询
const sqlStr = ygSQL.queryAllSQL;
router.get("/", function (req, res) {
    connection.query(sqlStr, (err, results) => {
      if (err) {
                 return res.json({
                     code: 500,
                      message: "服务器错误",
                     affextedRows: 0
                   });
               }
        else{
              res.json({
                code: 200,
                message: "success",
                result: results
              });
            }
    });
})

//添加
const addStr = ygSQL.addSQL;
// const addsqlparams = [param.name, param.url, param.alexa, param.country];
// const addsqlparams = ['百度', 'https://www.baidu.com', '20','China'];
router.post("/addWebsites", function (req, res) {
  const param = req.query || req.params; 
  const addsqlparams = [param.name, param.url, param.alexa, param.country];
  connection.query(addStr, addsqlparams, (err, results) => {
    if (err) {
      console.log('err');
      return;
    }
  });
})
//修改
//修改数据
const modStr = ygSQL.modSQL;
// const modsqlparams = [param.name, param.url, param.alexa, param.country, param.id];
// const modsqlparams = ['百度', 'https://www.baidu.com', '20', 'China',"1"];
router.put("/modWebsites", function (req, res) {
  const param = req.query || req.params; 
  const modsqlparams = [param.name, param.url, param.alexa, param.country, param.id];
  connection.query(modStr, modsqlparams, (err, results) => {
    if (err) {
      console.log("err");
      return;
    }
  });
})
//删除
const delStr = ygSQL.delSQL;
// const delsqlparams = [param.id];
// const delsqlparams = ["1"];
router.delete("/delWebsites", function(req, res) {
  const param = req.query || req.params; 
  const delsqlparams = [param.id];
  connection.query(delStr, delsqlparams, (err, results) => {
    if (err) {
      console.log(err);
      return;
    }
  });
});

module.exports = router;