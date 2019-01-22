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
                    message: "服务器错误"
                });
               }
        else{
                return res.json({
                    code: 200,
                    message: "success",
                    result: results
                });
            }
    });
})

//添加
const addStr = ygSQL.addSQL;

router.post("/addWebsites", function (req, res) {
  const param =  req.body || req.query || req.params;
  const addsqlparams = [param.name, param.url, param.alexa, param.country];
  connection.query(addStr, addsqlparams, (err, results) => {
      if (err) {
          res.status(500).send('error saving');
      } else {
          res.sendStatus(200);
      }
  });
})

//修改数据
const modStr = ygSQL.modSQL;

router.put("/modWebsites/:id", function (req, res) {
    const paramID =req.params;
    const paramValue=req.body;
    const modsqlparams = [paramValue.name, paramValue.url, paramValue.alexa, paramValue.country, paramID.id];
    connection.query(modStr, modsqlparams, (err, results) => {
        if (err) {
            return res.json({
                code: 500,
                message: "修改失败",
            });
        } else {
            return res.json({
                code: 200,
                message: "修改成功",
            });
        }
    });
})
//删除

const delStr = ygSQL.delSQL;

router.delete("/delWebsites/:id", function(req, res) {
    const param = req.params;
    const delsqlparams = [param.id];
    connection.query(delStr, delsqlparams, (err, results) => {
        if (err) {
            return res.json({
                code: 500,
                message: "删除失败",
            });
        } else {
            return res.json({
                code: 200,
                message: "删除成功",
            });
        }
    });
});

module.exports = router;