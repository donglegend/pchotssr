#### 此项目是前端和Node端收集错误的系统, 用于错误的收集和查看
# statistic-error (前端错误信息收集平台)

## 使用
```
yarn install
npm run dev
npm run build
```

## 术语

* bug: 错误信息统一称为bug

## bugReport.js (应用程序引用该js上报错误信息)
* 同时支持client 和 node 端
* 支持 umd 加载
* 实现全局配置函数 bugReport.config=function({
    // 默认值
    reportUrl:'http://bugReport.mtime.com'
    reportPrefix:'',  前缀
    reportKey:'mlrMsg' 载体
}){}
> get 请求: http://bugReport.mtime.com?reportKey=[ss.reportPrefix]+(Error)+&time=new Date().getTime()

* 实现全局捕获函数 window.onerror = function(msg, fileUrl, line, col, error,reportPrefix) {}
* 实现自定义上报 bugReport.report=function(msg, fileUrl, line, col, error,reportPrefix) {}
* 错误不仅要上报错误行列，还应上报 堆栈信息 error.stack. 并由平台解析出堆栈的源码信息
> 如果js 是跨域的，window.onerror将只能得到script error 的错误，不能拿到具体信息。
可以通过配置 cors来解决。


## 技术准备

* 数据库: __mongodb__ , 使用 __mongoose__ 操作数据库
* session: __express-session__ , 使用 __connect-mongo__ 连接mongodb 做session 的持久化存储

## 用户角色

* 管理员   (拥有所有权限,内置admin,初始密码123. 不能处理bug)
* 普通用户 (查看/处理 bug 权限)

## 功能列表

* [ ] 登录模块
* [ ] Dashboard模块
* [ ] Bug 管理模块
* [ ] 应用程序管理模块
* [ ] 用户管理模块
* [ ] bugReport.js
* [ ] bug处理模块
* [ ] 发送邮件模块