<template>
	<div>
		<main class="site_main">
		<a href="#" class="site_products" v-for="index in obj">
			<img :src="index.img" alt="这是一张图片">
			<p>{{index.indroduce}}</p>
		</a>
	</main>
	</div>
</template>
<script type="text/javascript">
	module.exports = {
		data:function(){
			return {
				obj:""
			}
		},
		route:{
			activate:function(transition){
				this.$http.post('/api/footer/site/hot/gier').then(function(res){
					this.obj = res.data;
					transition.next();//让后面的钩子函数生效
				},function(err){
					console.log(err)
				})
			}
		}
	}
</script>
<style type="text/css" scoped>
/*-----------------------------------------足球现场----------------------------*/
.site_main{width:6.4rem;overflow: hidden;padding-top:1.68rem;}
.site_products{display:block;width:3.1rem;height:3.9rem;border:1px solid #e1e6e2;float:left;}
.site_products:nth-of-type(2n){float:right;}
.site_products img{width:3.1rem;height:3.3rem;border-bottom:1px solid #e1e6e2;}
.site_products p{width:3.1rem;height:0.6rem;text-indent:0.22rem;line-height:0.6rem;font-size:14px;font-weight:600;}
</style>