var path = require('path')

module.exports = {
    build: {
        env: require('./prod.env'),
        assetsRoot: path.resolve(__dirname, '../../build'),
        assetsSubDirectory: '',
        assetsPublicPath: '/',
        productionSourceMap: true
    },
    dev: {
        env: require('./dev.env'),
        port: 8092,
        autoOpenBrowser: false,
        assetsSubDirectory: '',
        assetsPublicPath: '/',
        proxyTable: {},
        // CSS Sourcemaps off by default because relative paths are "buggy"
        // with this option, according to the CSS-Loader README
        // (https://github.com/webpack/css-loader#sourcemaps)
        // In our experience, they generally work as expected,
        // just be aware of this issue when enabling this option.
        cssSourceMap: false
    }
}