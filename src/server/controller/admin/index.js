/**
 * create time: Admin 类
 * fn: 处理Admin 相关的 逻辑
 */
class Admin {
    constructor() {
        // ...
        this.type = 'Admin'
    }
    async login(req, res, next) {
        // 等待和数据交互返回结果
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(true)
            }, 500)
        }).then((data) => {
            res.send({
                error: 0,
                message: '登录成功!',
                data: {}
            })
        }).catch(err => {
            console.log(err)
        })
    }
    async logout(req, res, next) {
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve()
            }, 500)
        }).then(() => {
            res.send({
                error: 0,
                message: '注销成功!',
                data: {}
            })
        }).catch(err => {
            console.log(err)
        })
    }
}

module.exports = new Admin()