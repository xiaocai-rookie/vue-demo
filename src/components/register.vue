<template>
	<div>
	    <header class="header green">足球圈—注册</header>
	    <form action="#" class="register_form">
			<input class="text" type="text" placeholder="手机号" v-model="tourist.phone" @change="re_account()">
			<input class="text" type="password" placeholder="密码" v-model="tourist.pwd" @change="re_paw()">
			<input class="text" type="text" placeholder="昵称" v-model="tourist.name" @change="re_name()">
			<input class="button green" type="button" value="注册" @click="goRegister()">
	    </form>
    </div>
</template>

<script>
 module.exports = {
 	data:function(){
 		return {
 			tourist:{
 				phone:'',//双向绑定
 				pwd:'',
 				name:''
 			},
 			register_sign_au:true,//注册判定的标记
 			register_sign_pwd:true,
 			register_sign_name:true,

 		}
 	},
 	methods:{
 		re_account:function(){//帐号正则判定
 			console.log(this.tourist.phone)
	 		if(/^1[3|4|5|7|8]\d{9}$/.test(this.tourist.phone)){
	 			this.register_sign_au = true;
	 		}else{
	 			alert("请输入正确的电话号码!");
	 			this.register_sign_au = false;
	 			console.log(this.register_sign)
	 		}
 		},
 		re_paw:function(){//密码正则判定
 			console.log(this.tourist.pwd)
 			if(/^[\@A-Za-z0-9\!\#\$\%\^\&\*\.\~]{6,22}$/.test(this.tourist.pwd)){
 				this.register_sign_pwd = true;
	 		}else{
	 			alert("6-22位的字母、数字、下划线!")
	 			this.register_sign_pwd = false;
	 		}
 		},
 		re_name:function(){ //判断是否输入昵称  trim() 字符串去空格的方法
 			console.log(this.tourist.name)
 			if(this.tourist.name.trim()){
 				this.register_sign_name = true;
 			}else{
 				this.register_sign_name = false;
 				alert("请输入昵称!")
 			}
 			
 		},
 		goRegister:function(){
 			if(this.register_sign_name && this.register_sign_pwd && this.register_sign_au){//当三个标记都为true时才可以提交注册
 				this.$http.post('/api/register',{params:this.tourist}).then(function(res){
 					if(!res.data.code){
 						console.log("注册成功")
 						console.log(res)
 					}else{
 						console.log(res.data.msg);
 					};
 				},function(err){
 					
 				})
 			}else if(!this.register_sign_name){
 				alert("请输入昵称");
 			}else if(!this.register_sign_pwd){
 				alert("请输入6-22位的字母、数字、下划线的密码")
 			}else if(!this.register_sign_au){
 				alert("请输入正确的注册电话号码")
 			};
 		}
 	}
 }
</script>
<style scoped>
.register_form{width:6.4rem;overflow: hidden;text-align:center;}
.register_form .text{width:6rem;height:0.7rem;margin-top:0.5rem;border:0;border-bottom:1px solid #eee;font-size:18px;}
.register_form .button{width:6.1rem;height:0.7rem;margin-top:0.5rem;border:0;border-radius:5px;color:white;font-size:32px;letter-spacing:18px;text-align: center;font-weight:600;}
</style>