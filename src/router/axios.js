/**
 * 全站http配置
 *
 * axios参数说明
 * isSerialize是否开启form表单提交
 * isToken是否需要token
 */
import axios from 'axios'
import store from '../vuex/store';
import router from '@/router/router'
import {Base64} from 'js-base64';
import { getToken, removeToken} from "@/assets/js/auth";
//全局弹框
const Swal = require("sweetalert2");

axios.defaults.timeout = 10000;
//返回其他状态吗
axios.defaults.validateStatus = function (status) {
    return status >= 200 && status <= 500; // 默认的
};
//跨域请求，允许保存cookie
axios.defaults.withCredentials = true;

//HTTPrequest拦截
axios.interceptors.request.use(config => {
    config.headers['Authorization'] = `Basic ${Base64.encode(`web3:web3_secret`)}`;
    if (getToken()) {
        config.headers['Blade-Auth'] = 'bearer ' + getToken().accessToken // 让每个请求携带token--['Authorization']为自定义key 请根据实际情况自行修改
    }

    return config
}, error => {
    return Promise.reject(error)
});
//HTTPresponse拦截
axios.interceptors.response.use(res => {
    const status = res.data.code || 200
    // const statusWhiteList = website.statusWhiteList || [];
    const message = res.data.msg || '未知错误';
    //如果在白名单里则自行catch逻辑处理
    // if (statusWhiteList.includes(status)) return Promise.reject(res);
    //如果是401则跳转到登录页面
    if (status === 401) {
        removeToken();
        router.push({path: '/index'});
    }
    // 如果请求为非200否者默认统一处理
    if (status !== 200) {
        // ElMessage({
        //     message: message,
        //     type: 'error'
        // })
        Swal.fire(
            'Error',
            message,
            'error'
        )
        console.log(message);
        store.commit('setShowLoading', false)
        return Promise.reject(new Error(message))
    }
    store.commit('setShowLoading', false)
    return res;
}, error => {
    store.commit('setShowLoading', false)
    return Promise.reject(new Error(error));
})

export default axios;
