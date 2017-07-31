const template = require('../../render')
const View = {
    render: (req, res, next, item) => {
        res.send(template.render(item.view))
    }
}
module.exports = (req, res, next, ops) => {
    View.render(req, res, next, ops)
}