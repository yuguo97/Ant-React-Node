const express = require("express");
const router = express.Router();
const mysql = require("mysql");
const ygSQL = require("../db/ygSQL");
const models = require("../db/db");
var connection = mysql.createConnection(models.mysql);
connection.connect();
const sqlStr = ygSQL.queryAll;
router.get("/Websites", function (req, res) {
    connection.query(sqlStr, (err, results) => {
      if (err) return res.json({
          code: 1,
          message: "资料不存在",
          affextedRows: 0
        });
      res.json({
        code: 200,
        result: results,
      });
    });
})

module.exports = router;