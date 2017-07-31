/**
 * create time: 2017-07-16
 * fn: 路由配置
 */
const View = require('../controller/view')
const Admin = require('../controller/admin')
const config = {
    view: [{
        path: '/',
        view: 'index',
        con: View
    }, {
        path: '/admin',
        view: 'admin',
        con: View
    }],
    api: [{
        path: '/admin/login',
        method: 'post',
        con: Admin.login
    }, {
        path: '/admin/logout',
        method: 'get',
        con: Admin.logout
    }]
}

module.exports = config