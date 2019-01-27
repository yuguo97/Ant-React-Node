const express = require("express");
const router = express.Router();

const Websites=require("../constrollers/Websites")

//查询

router.get("/websites", Websites.websites)

//添加

router.post("/addWebsites", Websites.addWebsites)

//修改数据

router.put("/modWebsites/:id", Websites.modWebsites)


//删除

router.delete("/delWebsites/:id", Websites.delWebsites);

module.exports = router;