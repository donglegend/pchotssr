import Vue from 'vue'
import VueRouter from 'vue-router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import routerConfig from '../page/admin/route'
import App from '../page/admin'

import '../assets/reset.css'

Vue.use(ElementUI)
Vue.use(VueRouter)

const router = new VueRouter({
    routerConfig
})

new Vue({
    el: '#app',
    template: '<App />',
    router,
    components: {
        App
    }
})