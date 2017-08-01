import Vue from 'vue'
import App from '../../page/404/404'

/* eslint-disable no-new */
const app = new Vue({
    ...App
})
export default (context) => {
    return new Promise((resolve, reject) => {
        resolve(app)
    })
}