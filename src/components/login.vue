<template>
  <div>
    <header class="header green">足球圈—登录</header>
    <form action="#" class="login_form">
    <input class="text" type="text" placeholder="手机号" v-model="user.phone">
    <input class="text" type="password" placeholder="密码" v-model="user.pwd">
    <legend class="text len">还没有帐号？点击此处立即<a v-link="{path:'/register'}">注册</a></legend>
    <input class="button green" type="button" value="登 录" @click="goLogin()">
    </form>
  </div>
</template>

<script>
 module.exports = {
 	data:function(){
 		return {
 			user:{
 				phone:'',
 				pwd:''
 			}
 		}
 	},
 	methods:{
 		goLogin:function(){
 			if(this.user.phone.trim() && this.user.pwd.trim()){
 				this.$http.post('/api/login',{params:this.user}).then(function(res){
 					if(!res.data.code){
 						this.$route.router.go('/footer/site/hot/scene/');
 					}else{
 						console.log(res.data.msg);
 					};
 				},function(err){
 					
 				})
 			}else{
 				alert("输入错误");
 			};
 		}
 	}
 }
</script>
<style scoped>
.login_form{width:6.4rem;overflow: hidden;text-align:center;}
.login_form .text{width:6rem;height:0.7rem;margin-top:0.5rem;border:0;border-bottom:1px solid #eee;font-size:18px;}
.login_form .len{text-align:left;font-size:16px;color:#999;border:0;}
.login_form .len a{color:#a9e3b1;}
.login_form .button{width:6.1rem;height:0.7rem;margin-top:0.5rem;border:0;border-radius:5px;color:white;font-size:32px;letter-spacing:18px;text-align: center;font-weight:600;}
</style>