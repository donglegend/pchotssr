/**
 * create time: 2017-07-14
 * fn: 路由入口文件，所有路由在这里加载
 */
const express = require('express')
const router = express.Router()

const viewRouter = require('./view')
const apiRouter = require('./api')
const render = require('../render')
router.use('/', viewRouter)
router.use('/api', apiRouter)
// 500 error
router.use((err, req, res, next) => {
    if (process.env.NODE_ENV === 'production') {
        // 记录到错误收集平台
        err = '应用程序内部错误'
    }
    res.format({
        'text/html': function () {
            res.status(404).send(render.renderError())
        },
        'application/json': function () {
            return res.status(404).json(err)
        },
        'default': function () {
            res.status(404).send(render.renderError())
        }
    })
})
router.use('*', (req, res) => {
    const payload = {
        url: req.originalUrl,
        error: 'Not found'
    }
    res.format({
        'text/html': function () {
            res.status(404).send(render.renderError())
        },
        'application/json': function () {
            return res.status(404).json(payload)
        },
        'default': function () {
            res.status(404).send(render.renderError())
        }
    })
})

module.exports = router