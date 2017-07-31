process.env.NODE_ENV = 'development'

const webpack = require('webpack')
const webpackServerConfig = require('./webpack.server.conf')

const dateUtil = require('./lib/dateUtil')

const path = require('path')
const chalk = require('chalk')
const ora = require('ora')
const spinner = ora('正在编译环境...')
const cp = require('child_process')

let n

const compiler = webpack(webpackServerConfig)

spinner.start()
compiler.watch({}, (err, stats) => {
    spinner.stop()
    if (err) {
        console.log(chalk.red(`${dateUtil.formatDate('yyyy-MM-dd HH:mm:ss')}: 编译出现错误!`))
    } else {
        console.log(chalk.green(`${dateUtil.formatDate('yyyy-MM-dd HH:mm:ss')}: 编译成功!`))

        n && n.kill('SIGINT')

        n = cp.fork(path.join(__dirname, '../build/index.js'), {
            cwd: path.join(__dirname, '../build')
        })

        n.on('exit', (code, signal) => {
            console.log(`服务收到信号 ${signal ? signal : code} 退出!`)
        })
        n.on('message', () => {
            console.log('服务重新启动')
        })
    }
})