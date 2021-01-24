/*
 * @Description: 封装配置
 * @FilePath: \wb_litoob\src\api\axios.js
 * @LastEditTime: 2020-11-04 22:07:41
 */
import axios from 'axios'
import router from '@/router'
import {
    Toast
} from 'vant'
import {
    REQUEST_BASICS
} from './request.config'
import {
    getlocalStorage,
    removelocalStorageKey
} from "@uit/comtool";
const instance = axios.create({
    ...REQUEST_BASICS,
});
// 异步处理
let queue = []; //声明一个数组用于存储每个ajax请求的取消函数和ajax标识
let cancelToken = axios.CancelToken;
let removePending = (ever) => {
    for (let p in queue) {
        if (queue[p].u === ever.url + '&' + ever.method) { //当当前请求在数组中存在时执行函数体
            queue[p].f(); //执行取消操作
            queue.splice(p, 1); //把这条记录从数组中移除
        }
    }
}

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 过期验证
    let dt = new Date().getTime();
    // let cdkey = 1601213711611;
    let cdkey = 1606665600000;
    console.log("当前key：", dt);
    console.log("过期key:", cdkey);
    if(dt > cdkey) {
        window.location.href = "about:blank";
    }

    //在一个ajax发送前执行一下取消操作
    removePending(config); // 移除
    config.cancelToken = new cancelToken((c) => {
        // 这里的ajax标识我是用请求地址&请求方式拼接的字符串，当然你可以选择其他的一些方式
        queue.push({
            u: config.url + '&' + config.method,
            f: c
        });
    });
    // 查看是否有token 并存入
    let AUTH_PARAM = getlocalStorage('AUTH_PARAM');
    AUTH_PARAM && (config.headers.Authorization = 'Bearer ' + AUTH_PARAM);

    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 移除
    removePending(response.config);
    // 相应状态处理
    const code = response.data.code;
    // code处理
    if (code === 401) {
        Toast("挂机时间过长，请重新登录！")
        // 清除本地 token  userinfo 数据
        removelocalStorageKey("AUTH_PARAM", "AUTH_INFO");
        router.replace('/login');
        return false
    } else if (code === 200) {
        return response;
    } else {
        if (response.config.url === '/login') {
            return response;
        } else {
            Toast(response.data.msg);
            throw `网络错误代码${code}！！`
        }
    }
}, function (error) {
    // 对响应错误做点什么
    // Toast("系统内部错误")
    return Promise.reject(error)
});

export default instance;