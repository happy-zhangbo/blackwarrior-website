import * as Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './vuex/store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import 'bootstrap/dist/css/bootstrap.css'


const app = Vue.createApp(App);
window.$vueApp = app;

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
app.use(ElementPlus)

const commonUtil = require('./assets/js/common')
window.$vueApp.config.globalProperties.$common = commonUtil;

import constantsMap from './assets/js/constant'
import vueUtil from './assets/js/vue-util'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
// import 'sweetalert2/theme-bootstrap-4/bootstrap-4.scss';
// const sweetOptions = {
//     position: 'top',
//     confirmButtonColor: '#41b882',
//     cancelButtonColor: '#ff7674',
// };
app.use(VueSweetalert2);

NProgress.inc(0.2)
NProgress.configure({ easing: 'ease', speed: 500, showSpinner: true })


router.beforeEach((to, from, next) => {
    if (to.fullPath === '/') {
        router.push('/index')
    }
    if(to.fullPath != '/index'){
        router.push('/index');
        return
    }
    NProgress.start()
    next()
})

router.afterEach(() => {
    NProgress.done()
})

app.config.globalProperties.routerAppend = (path, pathToAppend) => {
    return path + (path.endsWith('/') ? '' : '/') + pathToAppend
}

app.use(constantsMap)
app.use(vueUtil)

app.use(store)
app.use(router)

app.mount('#app')
window.$vueApp = app;
import 'bootstrap/dist/js/bootstrap.js'
