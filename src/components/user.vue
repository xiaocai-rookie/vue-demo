<template>
	<div>
		 <header class="header green site_header">个人中心</header>
		<main class="user_main">
			<div class="user_message">
					<div class="a_left left">
						<img src="/static/images/1.png" alt="这是一个头像的图片">
					</div>
					<div class="a_right right">
							<p class="user_name left">我叫小萌我怕谁</p>
							<p class="user_synopiss">我是小萌我哦怕谁！哈哈哈！</p>
					</div>
				</div>
				<div class="user_handle">
					<p class="user_hand_borde" v-link="{path:'/footer/user/zhaopian/'}">照片(1)
						
					</p>
					<p class="user_hand_borde" v-link="{path:'/footer/user/guanzhu/'}">关注({{num}})</p>
					<p class="user_hand_borde" v-link="{path:'/footer/user/fensi/'}">粉丝(8)</p>
				</div>
				<router-view></router-view>
		</main>
	</div>
</template>
<script type="text/javascript">
	module.exports = {
		data:function(){
			return {
				obj:null,
				arr:[],
				num:0
			}
		},
		route:{
			data:function(transition){
				transition.next();	
			},
			activate:function(transition){
				if(window.sessionStorage.getItem("content")){
					this.obj = JSON.parse(window.sessionStorage.getItem("content"));
					for(var i=0,len=this.obj.length;i<len;i++){
						if(this.obj[i].guanzhu){
							this.arr.push(this.obj[i])
						}
					}
					this.num = this.arr.length;
				}
				transition.next();
			}
		},
		methods:{
			
		}
	}
</script>
<style type="text/css" scoped>
.user_main{width:6.4rem;height:9.5rem;overflow:hidden;background-color:white;}
.user_message{width:6rem;height:1rem;padding:0.2rem 0.2rem;}
.user_message .a_left{width:1.25rem;height:100%;position:relative;}
.user_message .a_left img{width:100%;height:120%;position:absolute;top:-5px;left:-2px;}
.user_message .a_right{width:4.75rem;height:100%;}
.user_name{height:0.4rem;width:50%;line-height:0.4rem;font-size:14px;font-weight:600;}
.user_synopiss{clear:both;height:0.6rem;line-height:0.6rem;font-size:14px;color:#969696;}
.user_handle{width:6.4rem;height:0.5rem;display:-webkit-box;}
.user_handle p{-webkit-box-flex:1;text-align: center;line-height:0.5rem;box-sizing:border-box;position:relative;}
.user_hand_borde{border-bottom:1px solid #eee;}
.user_handle p img{position:absolute;top:0.51rem;width:3.15rem;height:3.15rem;left:0;}
.v-link-active{border-bottom:3px solid #0cc53c;color:#0cc53c;}
</style>