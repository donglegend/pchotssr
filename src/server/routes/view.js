/**
 * create time: 2017-07-14
 * fn: 模板路由文件，可能会有多页面，统一在这里进行路由注册
 */
const express = require('express')
const router = express.Router()
const config = require('./config').view

config.forEach((item, index) => {
    router.get(item.path, (req, res, next) => {
        item.con(req, res, next, item)
    })
})

module.exports = router