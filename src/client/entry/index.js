import Vue from 'vue'
import VueRouter from 'vue-router'
import routerConfig from '../page/index/route'

import Index from '../page/index'

import '../assets/reset.css'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: routerConfig
})

new Vue({
    el: '#app',
    template: '<Index/>',
    router,
    components: {
        Index
    }
})