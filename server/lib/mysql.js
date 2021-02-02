/*
 * @Author: your name
 * @Date: 2021-02-02 11:49:29
 * @LastEditTime: 2021-02-02 11:51:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \github\Ant-React-Node\server\lib\mysql.js
 */
var mysql = require("mysql");
var config = require("../config/default.js");

var pool = mysql.createPool({
    host: config.database.HOST,
    user: config.database.USERNAME,
    password: config.database.PASSWORD,
    database: config.database.DATABASE,
});

let query = function (sql, values) {
    return new Promise((resolve, reject) => {
        pool.getConnection(function (err, connection) {
            if (err) {
                reject(err);
            } else {
                connection.query(sql, values, (err, rows) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(rows);
                    }
                    connection.release();
                });
            }
        });
    });
};
