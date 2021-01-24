/*
 * @Description: 
 * @FilePath: \wb_litoob\src\utils\filter.js
 * @LastEditTime: 2020-07-03 20:22:21
 */ 
import Vue from 'vue';

Vue.filter('formatDate', function(value, fmt='yyyy-MM-dd HH:mm:ss') {

    var date = new Date(value);

    let o = {
        "M+": date.getMonth() + 1,
        "d+": date.getDate(),
        "H+": date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds(),
    };

    if(/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4-RegExp.$1.length));
    }
    for(let k in o) {
        if(new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + '';
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1)?str:padLeftZero(str));
        }
    }

    return fmt;
})


function padLeftZero(str) {
    return ('00' + str).substr(str.length);
}
