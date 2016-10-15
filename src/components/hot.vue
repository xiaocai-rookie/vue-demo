<template>
	<div>
		 <nav class="site_nav">
	    <p class="site_option site_nav_color" v-link="{path:'/footer/site/hot/scene/'}">足球现场</p>
	    <p class="site_option" v-link="{path:'/footer/site/hot/life/'}">足球生活</p>
	    <p class="site_option" v-link="{path:'/footer/site/hot/gier/'}">足球美女</p>
	</nav>
	<router-view></router-view>
	</div>
</template>
<script type="text/javascript">
	module.exports = {

	}
</script>
<style type="text/css" scoped>
.site_header{position:fixed;top:0;}
.site_nav{width:6.4rem;height:0.7rem;display:-webkit-box;position:fixed;top:0.88rem;}
.site_option{-webkit-box-flex:1;text-align:center;line-height:0.7rem;font-size:16px;font-weight:600;color:#6a6a6a;border-bottom:2px solid #dcd9d2;box-sizing:border-box;}
.v-link-active{border-bottom:5px solid #0ec340;color:#14bf4d;}
</style>