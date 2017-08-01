// const template = require('../../template')
const render = require('../../render')
exports.default = function (viewName) {
    return async(req, res, next) => {
        const html = await render.render(viewName)
        res.send(html)
        res.end()
    }
}

exports.loginView = async function (req, res, next) {
    const html = await render.render('index')
    res.send(html)
    res.end()
}