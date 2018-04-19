import config from './../config';
import {
    Alert
} from 'react-native';
export default {
    /*
    url string
    method string: 'GET' 'POST'
    form object
    host 'server'
    type file
    */
    net({
        url,
        method,
        form,
        host,
        type
    }) {
        var ContentType = "application/json"
        if (type == 'file') {
            ContentType = 'multipart/form-data'
        }
        var myHeaders = myHeaders = new Headers({
            "Content-Type": ContentType,
            "X-Requested-With": 'XMLHttpRequest',
            "X-Custom-Header": "ProcessThisImmediately"
        });
        // url
        if (/^\//.test(url)) {
            let server = host || 'server'
            if (config.isDev) {
                url = config.dev[server].concat(url)
            } else {
                url = config.production[server].concat(url)
            }
        }
        let timestamp = new Date().getTime();
        console.log('请求路径：' + timestamp + '\n', url);
        console.log('请求参数：' + timestamp + '\n', form);
        if (form) {
            if (method == 'POST') {
                if (type == 'file') {
                    var body = form;
                } else {
                    var body = JSON.stringify(form) || ''
                }
            } else {
                for (var key in form) {
                    if (form.hasOwnProperty(key)) {
                        let and = "?"
                        if (/\?/.test(url)) {
                            and = "&"
                        }
                        let param = `${and}${key}=${encodeURIComponent(form[key])}`
                        url += param;
                    }
                }
            }
        }
        var myInit = {
            method: method || "GET",
            headers: myHeaders,
            timeout: 5000,
            mode: 'cors',
            cache: 'default',
            body,
            credentials: 'include'
        };

        var myRequest = new Request(url, myInit);
        // console.log(myRequest)

        return fetch(myRequest).then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Network response was not ok.');
        }).then((data) => {
            console.log('请求结果：' + timestamp + '\n', data);
            // 返回promise对象
            return new Promise((resolve, reject) => {
                try {
                    //处理各种数据情况
                    if (data.code && data.code == 1) {
                        resolve(data.data);
                    } else if (data.code && data.code == -1) {
                        Alert.alert(data.msg);
                        reject(data);
                    } else if (data.versionCode && data.versionCode > 0) {
                        resolve(data);
                    } else {
                        reject(data);
                    }
                } catch (e) {
                    console.log('json错误')
                }
            })
        }, () => {
            Alert.alert('网络错误')
            return Promise.reject('网络错误')
        }).catch((error) => {
            console.log('错误：' + timestamp + '\n' + error);
            return Promise.reject(error)
        });
    }
}