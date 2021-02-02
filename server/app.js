/*
 * @Author: your name
 * @Date: 2021-02-01 09:19:58
 * @LastEditTime: 2021-02-02 11:55:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \github\Ant-React-Node\server\app.js
 */

const Koa = require("koa");
const path = require("path");
const bodyParser = require("koa-bodyparser");
const config = require("./config/default.js");
const session = require("koa-session-minimal");
const MysqlStore = require("koa-mysql-session");
const router = require("koa-router");
const sessionMysqlConfig = {
    user: config.database.USERNAME,
    password: config.database.PASSWORD,
    database: config.database.DATABASE,
    host: config.database.HOST,
};
const app = new Koa();

app.use(
    session({
        key: "USER_SID",
        store: new MysqlStore(sessionMysqlConfig),
    })
);

app.listen(config.port, () =>
    console.log("Example app listening on port 3000!")
);
