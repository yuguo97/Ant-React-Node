/*
 * @Author: your name
 * @Date: 2020-09-21 11:36:48
 * @LastEditTime: 2020-09-21 11:44:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \github\Ant-Design-Node\src\api\index.js
 */

import axios from "axios";

const server = axios.create({
    baseURL: window.baseURL,
    timeout: 1000
});

// 添加请求拦截器
server.interceptors.request.use(
    function(config) {
        // 在发送请求之前做些什么
        return config;
    },
    function(error) {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);

// 添加响应拦截器
server.interceptors.response.use(
    function(response) {
        // 对响应数据做点什么
        return response.data;
    },
    function(error) {
        // 对响应错误做点什么
        return Promise.reject(error);
    }
);

export default server;
