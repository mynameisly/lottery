/*
 * @Description: 工具箱
 * @FilePath: \wb_litoob\src\utils\comtool.js
 * @LastEditTime: 2020-07-06 11:36:55
 */

/**
 * @description: locatStorageParse value
 * @param {type: String} 
 * @return: [Object,String,null]
 */
export function getlocalStorage(key) {
    if (typeof key !== 'string') throw '类型错误，参数得参数应该是String类型'
    let storageData = localStorage.getItem(key)
    if (storageData) {
        try {
            return JSON.parse(storageData);
        } catch (err) {
            return storageData
        }
    } else {
        return null
    }
}
/**
 * @description: localStorage set Value
 * @param {[key,data]} 
 * @return: [object,string]
 */
export function setlocalStorage(key, data) {
    if (typeof key !== 'string') throw 'key类型错误，参数得参数应该是String类型';
    if (typeof data === 'undefined') throw 'arguments[1] not undefined';
    if (typeof data === 'string') {
        localStorage.setItem(key, data);
    } else {
        localStorage.setItem(key, JSON.stringify(data));
    }
}
/**
 * @description: remove localStorage key
 * @param { arguments }
 * @return: [object,string]
 */
export function removelocalStorageKey() {
    let args = Array.from(arguments);
    let errArgs = [];
    args.forEach(item => {
        if (typeof item === 'string') {
            localStorage.removeItem(item);
        } else {
            errArgs.push(item);
        }
    });
    return errArgs.length ? 'error param' + errArgs : undefined;
}



/**
 * @description: sessionStorage Value
 * @param {type: String} 
 * @return: [Object,String,null]
 */
export function getsessionStorage(key) {
    if (typeof key !== 'string') throw '类型错误，参数得参数应该是String类型'
    let storageData = sessionStorage.getItem(key)
    if (storageData) {
        try {
            return JSON.parse(storageData);
        } catch (err) {
            return storageData
        }
    } else {
        return null
    }
}

/**
 * @description: sessionStorage set Value
 * @param {[key,data]} 
 * @return: [object,string]
 */
export function setsessionStorage(key, data) {
    if (typeof key !== 'string') throw 'key类型错误，参数得参数应该是String类型';
    if (typeof data === 'undefined') throw 'arguments[1] not undefined';
    if (typeof data === 'string') {
        sessionStorage.setItem(key, data);
    } else {
        sessionStorage.setItem(key, JSON.stringify(data));
    }
    return undefined
}

/**
 * @description: remove sessionStorage key
 * @param { arguments }
 * @return: [Array,undefined]
 */
export function removesessionStorageKey() {
    let args = Array.from(arguments);
    let errArgs = [];
    args.forEach(item => {
        if (typeof item === 'string') {
            sessionStorage.removeItem(item);
        } else {
            errArgs.push(item);
        }
    });
    return errArgs.length ? 'error param' + errArgs : undefined;
}
/**
 * @description: 日期格式化
 * @param {String YY-MM-DD , Date} 
 * @return: YY-MM-DD String 
 */
import moment from 'moment'
export function dateFormat(date) {
    if (!date) {
        return ''
    }
    return moment(date).format('YYYY-MM-DD HH:mm:ss')
}
/**
 * @description:
 * @param {type: String}
 * @return: String
 */
export function getQueryVariable(variable) {
    var query = window.location.href.split('?')[1];
    if (query !== '' && query !== undefined) {
        var vars = query.split("&");
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            if (pair[0] == variable) {
                return pair[1];
            }
        }
    }
    return '';
}
/**
 * @description: formData 处理方式！
 * @param Object key value
 * @return: FormData 
 */

export function formDataObject(obj) {
    if (Object.prototype.toString.call(obj) !== "[object Object]") {
        throw '参数必须是Object';
    } else {
        let formData = new FormData();
        for (let key in obj) {
            formData.append(key, obj[key]);
        }
        return formData;
    }
}
