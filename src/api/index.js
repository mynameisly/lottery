/*
 * @Description: 请求封装
 * @FilePath: \wb_litoob\src\api\index.js
 * @LastEditTime: 2020-07-06 10:58:37
 */
import instance from './axios'
import {
    Toast
} from 'vant'
let toast = null
export const fetchData = async (url, method, data = null, loading) => {
    let httpOpts = {
        url,
        method
    }
    // 边界条件
    if (typeof data === 'boolean') {
        loading = data;
        data = null;
    }
    loading && (toast = Toast.loading({
        duration: 0,
        message: '加载中...',
        forbidClick: true
    }));
    httpOpts = method === 'get' ? {
        ...httpOpts,
        params: data,
    } : {
        ...httpOpts,
        data,
    }
    return new Promise((resolve, reject) => {
        instance(httpOpts).then(res => {
            res &&
                resolve(res.data);
        }).then(err => {
            reject(err);
        }).finally(() => {
            loading && toast.clear();
        })
    })
}

export const getRequest = (url, data, load) => fetchData(url, 'get', data, load) // get请求
export const postRequest = (url, data, load) => fetchData(url, 'post', data, load) // post请求