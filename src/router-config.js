module.exports = function(router){
	router.map({
		'/login':{
			component:require('components/login.vue')
		},
		'/register':{
			component:require('components/register.vue')//导入模版
		},
		'/footer':{//把footer作为第一层的路由   页面显示是最下面的一排小图标
			component:require('components/footer.vue'),
			subRoutes:{//设置子路由
				'/site':{//第二层路由  页面显示 是顶部的两个半圆
					component:require('components/site.vue'),
						subRoutes:{ //第三层路由  页面显示为导航
							'/hot':{
								component:require('components/hot.vue'),
								subRoutes:{ //第四层路由 页面是导航下的内容
									'/scene':{ 
										component:require('components/scene.vue')
									},
									'/life':{
										component:require('components/life.vue')
									},
									'/gier':{
										component:require('components/gier.vue')
									},
								}
							},
							'/aut':{
								component:require('components/aut.vue')
							}
						}
				},
				'/find':{
					component:require('components/find.vue')
				},
				'/user':{
					component:require('components/user.vue'),
					subRoutes:{
						'/zhaopian':{
							component:require('components/zhaopian.vue')
						},
						'/guanzhu':{
							component:require('components/guanzhu.vue')
						},
						'/fensi':{
							component:require('components/fensi.vue')
						}
					}
				}
			}

		}
	});
	router.redirect({
		'/':'/register'
	})
}

