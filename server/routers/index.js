/*
 * @Author: your name
 * @Date: 2021-02-03 11:40:06
 * @LastEditTime: 2021-02-04 09:25:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \github\Ant-React-Node\server\routers\user.js
 */
const router = require("koa-router")({ prefix: "/user" });
const { v4: uuidv4 } = require("uuid");
const userModel = require("../db/mysql");
const dayjs = require("dayjs");
console.log("122", uuidv4());
// 注册页面
router.post("/registor", async (ctx) => {
    let username = "admin";
    let password = "1112222";
    let user_id = uuidv4();
    let create_time = dayjs().format("YYYY-MM-DD HH:mm:ss");
    let avatar = "头像";
    let login_status = "0";
    let user_rule = "1";

    await userModel
        .insertData([
            user_id,
            username,
            password,
            avatar,
            create_time,
            login_status,
            user_rule,
        ])
        .then((res) => {
            ctx.body = {
                code: 200,
                success: true,
                message: "注册成功",
            };
        });
});

module.exports = router;
