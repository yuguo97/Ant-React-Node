/*
 * @Author: your name
 * @Date: 2021-02-02 11:33:48
 * @LastEditTime: 2021-02-02 11:33:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \github\Ant-React-Node\server\redis.js
 */
var redis = require("redis");
var client = redis.createClient(6379, "127.0.0.1");
client.on("connect", function () {
    // set 语法
    client.set("name", "long1111", function (err, data) {
        console.log(data);
    });
    // get 语法
    client.get("name", function (err, data) {
        console.log(data);
    });
});
