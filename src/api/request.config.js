/*
 * @Description: 异步请求基本配置！
 * @FilePath: \wb_litoob\src\api\request.config.js
 * @LastEditTime: 2020-10-28 23:44:20
 */
export const REQUEST_BASICS = {
    baseURL: process.env.NODE_ENV === 'development' ? "/" : "/",
    maxContentLength: 2000,
    timeout: 6000,
    // 发送请求时头部信息
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
}