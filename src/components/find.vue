<template>
	<div>
		<header class="header green site_header">发现</header>
    <nav class="find_search">
		<form action="#">
			<input class="find_text" type="text" placeholder="请输入昵称" v-model="search">
			<input class="find_button" type="button" value="搜索" @click="tran">
		</form>
    </nav>
	<main class="find_main">
		<div class="find_content" v-for="index in arr | filterBy searc in 'name'">
				<div class="a_left left">
					<img :src="index.img" alt="这是一个头像的图片"><!-- /static/images/1.png -->
				</div>
				<div class="a_right right">
						<p class="find_name left">{{index.name}}</p>
						<button class="find_number right" v-bind:class="{f_gray:index.guanzhu}" @click="bian($index)">关注</button>
						<p class="find_synopiss">{{index.indroduce}}</p>
				</div>
			</div>
	</main>
	</div>
</template>
<script type="text/javascript">
	module.exports = {
		data:function(){
			return {
				obj:'',
				arr:null,
				searc:'',
				search:""
			}
		},
		route:{
			data:function(transition){
				this.$http.post('/api/footer/find').then(function(res){
					console.log(res)
					this.obj = res.data;
					window.sessionStorage.setItem("name",JSON.stringify(this.obj));
					this.arr = JSON.parse(window.sessionStorage.getItem("name"))
					transition.next();//让后面的钩子函数生效  
				},function(err){
					console.log(err)
				})
			},
			activate:function(transition){
				transition.next();

			}
		},
		methods:{
			bian:function(index){
				this.$http.post('/api/footer/guanzhu').then(function(res){
					this.arr[index].guanzhu = !this.arr[index].guanzhu;
					window.sessionStorage.setItem("content",JSON.stringify(this.arr))
				},function(err){
				})
				
				},
				tran:function(){
					this.searc = this.search;
				}
		}
	}
</script>
<style type="text/css" scoped>
	/*-----------------------------------------发现--------------------------*/
.find_search{width:6.2rem;height:0.6rem;padding:0.1rem;border-bottom:1px solid #cdcdcd;background-color:#fff;position:fixed;top:0.88rem;background-color:white;z-index:9;}
.find_text{width:4.9rem;height:0.55rem;border:1px solid #aaa;border-radius:5px;font-size:18px;text-indent: 8px;}
.find_button{width:1.07rem;height:0.58rem;border:1px solid #aaa;border-radius:5px;background-color:#0cc440;color:white;font-size:18px;font-weight:600;}
/*--------------------------------发现关注的人---------------------------------*/
.find_main{width:6.4rem;overflow:hidden;margin-top:0.1rem;background-color:white;padding-top:1.5rem;}
.find_content{width:6rem;height:1rem;padding:0.2rem 0.2rem;border-bottom:1px solid #eee;}
.find_content .a_left{width:1.25rem;height:100%;position:relative;}
.find_content .a_left img{width:100%;height:120%;position:absolute;top:-5px;left:-2px;}
.find_content .a_right{width:4.75rem;height:100%;}
.find_name{height:0.4rem;width:50%;line-height:0.4rem;font-size:14px;font-weight:600;}
.find_number{width:0.77rem;height:0.4rem;font-size:12px;color:#c7c7c7;background-color:#0ac540;border-radius:5px;border:0;outline:none;}
.find_num_color{background-color:#e6e6e6;}
.find_synopiss{clear:both;height:0.6rem;line-height:0.6rem;font-size:14px;color:#969696;}
.site_header{position:fixed;top:0;}
.f_green{background-color:green;color:white;}
.f_gray{background-color:gray;color:green;}
</style>
