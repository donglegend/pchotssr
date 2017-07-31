/**
 * create time: 2017-07-16
 * fn: api 路由配置
 */
const express = require('express')
const router = express.Router()
const config = require('./config').api

config.forEach((item, index) => {
    router[item.method](item.path, item.con)
})

module.exports = router