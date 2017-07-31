process.env.NODE_ENV = 'production'

var ora = require('ora')
var rm = require('rimraf')
var path = require('path')
var chalk = require('chalk')
var webpack = require('webpack')
var config = require('../config')
var webpackServerConfig = require('./webpack.server.conf')

var packageInfo = require('./lib/packageInfo.js')

var spinner = ora('开始构建...')
spinner.start()
rm(path.join(config.build.assetsRoot), err => {
    if (err) throw err
    packageInfo.copy().then(() => {
        console.log('copy package.json complete!')
        var cdn = packageInfo.getInfo().cdn
        var webpackConfig = require('./webpack.prod.conf')({
            output: {
                path: config.build.assetsRoot + '/client/' + cdn,
                publicPath: '/' + cdn + '/'
            }
        })
        webpack([webpackConfig, webpackServerConfig], function (err, stats) {
            spinner.stop()
            if (err) throw err
            process.stdout.write(stats.toString({
                colors: true,
                modules: false,
                children: false,
                chunks: false,
                chunkModules: false
            }) + '\n\n')
            console.log(chalk.cyan('构建完成.\n'))
        })
    }).catch((err) => {
        console.log(err)
        process.exit(0)
    })
})