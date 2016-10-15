<template>
	<div>
		<router-view></router-view>
		<footer class="site_foot">
			<a v-link="{path:'/footer/site/hot/scene/'}" ><!-- 路径   -->
				<span class="iconfont some_pic block " >&#xe607;</span>
				<span class="block word " >首页</span>
				<template class="site"></template>
			</a><!-- click -->
			<a v-link="{path:'/footer/find/'}" >
				<span class="iconfont some_pic block" >&#xe613;</span>
				<span class="block word" >发现</span>
				<template class="find"></template>
			</a>
			<a href="#" >
				<span class="iconfont some_pic block camera">&#xe608;</span>
			</a>
			<a v-link="{path:'/footer/user/zhaopian/'}">
				<span class="iconfont some_pic block" >&#xe60e;</span>
				<span class="block word" >我的</span>
				<template class="user"></template>
			</a>
			<a v-link="{path:'/login'}" >
				<span class="iconfont some_pic block" >&#xe601;</span>
				<span class="block word">退出</span>
			</a>
		</footer>
	</div>
</template>

<script>
 module.exports = {
 	data:function(){
 		return {
 			boolt:true,
 			boolf:false
 		}
 	},
 	methods:{
 		
 	}
 }
</script>
<style scoped>
.v-link-active span{color:green;}
</style>