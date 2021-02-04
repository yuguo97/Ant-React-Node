/*
 * @Author: your name
 * @Date: 2021-02-02 11:32:38
 * @LastEditTime: 2021-02-03 14:47:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \github\Ant-React-Node\server\default.js
 */
const config = {
    // 启动端口
    port: 3000,

    // 数据库配置
    database: {
        DATABASE: "yuguo",
        USERNAME: "root",
        PASSWORD: "123456",
        PORT: "3306",
        HOST: "localhost",
    },
};

module.exports = config;
