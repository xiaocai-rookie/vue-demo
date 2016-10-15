var Vue = require('vue');//导入插件
var VueRouter = require('vue-router');//导入插件
var VueResource = require('vue-resource');//导入插件
var App = require('./App');//导入App模版
var routerConfig = require('./router-config');//导入插件
Vue.use(VueRouter);//注册插件
Vue.use(VueResource);
var router = new VueRouter({
	data:{
		
	},
	methods:{
		
	}
});
routerConfig(router);//导入配置的路由文件
router.start(App,"#app")//等同于  new Vue({})
