var path = require('path')
var express = require('express')
var webpack = require('webpack')
var config = require('../config')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = process.env.NODE_ENV === 'testing'
  ? require('./webpack.prod.conf')
  : require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()
var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
    chunks: false
  }
})

var hotMiddleware = require('webpack-hot-middleware')(compiler)
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)
app.post('/api/login',function(req,res){
  res.json({code:0,msg:'密码错误'});
})
app.post('/api/footer/guanzhu',function(req,res){
  res.json({code:1,msg:'关注失败'});
})
app.post('/api/footer/aut/zan',function(req,res){
  res.json({code:1,msg:'关注失败'});
})
app.post('/api/footer/site/hot/scene',function(req,res){
  res.json([{img:"/static/images/scene1.jpg",indroduce:"就是小丸子2"},{img:"/static/images/scene2.jpg",indroduce:"就是小丸子1"},{img:"/static/images/scene3.jpg",indroduce:"就是小丸子3"},{img:"/static/images/scene4.jpg",indroduce:"就是小丸子4"},{img:"/static/images/scene1.jpg",indroduce:"就是小丸子5"},{img:"/static/images/scene2.jpg",indroduce:"就是小丸子6"},{img:"/static/images/scene3.jpg",indroduce:"就是小丸子0"},{img:"/static/images/scene4.jpg",indroduce:"就是小丸子2"},{img:"/static/images/scene1.jpg",indroduce:"就是小丸子7"}]);
})
app.post('/api/footer/site/hot/life',function(req,res){
  res.json([{img:"/static/images/life1.jpg",indroduce:"上面的两个是不是傻"},{img:"/static/images/life2.jpg",indroduce:"直接冲上去打一顿"},{img:"/static/images/life3.jpg",indroduce:"啥子都解决了"},{img:"/static/images/life1.jpg",indroduce:"说傻极速hi傻"}]);
})
app.post('/api/footer/site/hot/gier',function(req,res){
  res.json([{img:"/static/images/gier1.jpg",indroduce:"上面的两个是不是傻"},{img:"/static/images/gier2.jpg",indroduce:"直接冲上去打一顿"},{img:"/static/images/gier3.jpg",indroduce:"啥子都解决了"},{img:"/static/images/gier4.jpg",indroduce:"说傻极速hi傻"},{img:"/static/images/gier5.jpg",indroduce:"上面的两个是不是傻"},{img:"/static/images/gier7.jpg",indroduce:"直接冲上去打一顿"},{img:"/static/images/gier8.jpg",indroduce:"啥子都解决了"},{img:"/static/images/gier8.jpg",indroduce:"说傻极速hi傻"}]);
})
app.post('/api/footer/find',function(req,res){
  res.json([{img:"/static/images/tou1.jpg",name:"傻蛋",indroduce:"上面的两个是不是傻",bool:false,number:225,guanzhu:false},{img:"/static/images/tou2.jpg",name:"狗蛋",indroduce:"直接冲上去打一顿",bool:false,number:225,guanzhu:false},{img:"/static/images/tou3.jpg",name:"鸭蛋",indroduce:"啥子都解决了",bool:false,number:225,guanzhu:false},{img:"/static/images/tou4.jpg",name:"荷包蛋",indroduce:"说傻极速hi傻",bool:false,number:225,guanzhu:false},{img:"/static/images/tou5.jpg",name:"生鸡蛋",indroduce:"上面的两个是不是傻",bool:false,number:225,guanzhu:false},{img:"/static/images/tou7.jpg",name:"肖采",indroduce:"直接冲上去打一顿",bool:false,number:225,guanzhu:false},{img:"/static/images/tou8.jpg",name:"rookie",indroduce:"啥子都解决了",bool:false,number:225,guanzhu:false},{img:"/static/images/tou9.jpg",name:"夜",indroduce:"说傻极速hi傻",bool:false,number:225,guanzhu:false}]);
})
app.post('/api/time',function(req,res){
    res.json((function(){
      var time = new Date()
      return time
    }
  })())
// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:' + port + '\n')
})
