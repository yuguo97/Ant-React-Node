/*
 * @Author: your name
 * @Date: 2021-02-02 11:49:29
 * @LastEditTime: 2021-02-04 09:24:02
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
                connection.query(sql, values, (err, data) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(data);
                    }
                    connection.release();
                });
            }
        });
    });
};

let createTable = (sql) => {
    return query(sql, []);
};

let yg_users = `create table if not exists yg_users(
      user_id VARCHAR(255) NOT NULL COMMENT '用户ID',
      username VARCHAR(100) NOT NULL COMMENT '用户名',
      password VARCHAR(100) NOT NULL COMMENT '密码',
      avatar VARCHAR(100) NOT NULL COMMENT '头像',
      create_time VARCHAR(100) NOT NULL COMMENT '注册时间',
      login_status VARCHAR(100) NOT NULL COMMENT '登录状态',
      user_rule VARCHAR(100) NOT NULL COMMENT '用户角色',
      PRIMARY KEY ( user_id )
    );`;
// 建用户表
createTable(yg_users);

// createTable(yg_users);

let insertData = function (value) {
    let _sql =
        "insert into yg_users set user_id = ?, username = ?,password = ?,avatar = ?,create_time = ?, login_status = ?,user_rule = ?;";
    return query(_sql, value);
};

// 删除用户
let deleteUserData = function (name) {
    let _sql = `delete from yg_users where name="${name}";`;
    return query(_sql);
};
// 查找用户
let findUserData = function (name) {
    let _sql = `select * from yg_users where name="${name}";`;
    return query(_sql);
};

module.exports = {
    query,
    insertData,
    deleteUserData,
    findUserData,
};
