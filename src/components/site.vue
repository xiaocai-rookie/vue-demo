<template>
	<div>
		 <header class="header green site_header">
		 <span class="hot" v-link="{path:'/footer/site/hot/scene/'}">热点</span><span class="attention" v-link="{path:'/footer/site/aut'}">关注</span>
		 </header>
		 <main>
		 <p v-if="$atter">还没有关注的哦。。。。。。。。。。。。。。。。</p>
   		<router-view v-if="!$atter"></router-view>
   		</main>
	</div>
</template>
<script type="text/javascript">
	module.exports = {

	}
</script>
<style type="text/css" scoped>
/*--------------------------------热点现场--------------------------------------------------*/
.site_header{position:fixed;top:0;}
.site_nav{width:6.4rem;height:0.7rem;display:-webkit-box;position:fixed;top:0.88rem;}
.site_option{-webkit-box-flex:1;text-align:center;line-height:0.7rem;font-size:16px;font-weight:600;color:#6a6a6a;border-bottom:2px solid #dcd9d2;box-sizing:border-box;}
.site_nav_color{border-bottom:5px solid #0ec340;color:#14bf4d;}
/*-----------------------------------------足球现场----------------------------*/
.site_main{width:6.4rem;overflow: hidden;padding-top:1.68rem;}
.site_products{display:block;width:3.1rem;height:3.9rem;border:1px solid #e1e6e2;float:left;}
.site_products:nth-of-type(2n){float:right;}
.site_products img{width:3.1rem;height:3.3rem;border-bottom:1px solid #e1e6e2;}
.site_products p{width:3.1rem;height:0.6rem;text-indent:0.22rem;line-height:0.6rem;font-size:14px;font-weight:600;}
.v-link-active{background-color:#63d985;}
</style>
