import Vue from 'vue'
import App from '../page/App'

import axios from '../lib/axios'
Vue.prototype.$ajax = axios

new Vue({
    el: '#app',
    template: '<App/>',
    components: {
        App
    }
})