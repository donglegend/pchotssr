import Vue from 'vue'

import App from '../../page/index'

import '../../assets/reset.css'

const app = new Vue({
    ...App
})
export default (context) => {
    return new Promise((resolve, reject) => {
        resolve(app)
    })
}