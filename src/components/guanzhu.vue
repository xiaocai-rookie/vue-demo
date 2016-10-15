<template>
	<div>
		<div class="find_content" v-for="index in arr">
				<div class="a_left left">
					<img :src="index.img" alt="这是一个头像的图片"><!-- /static/images/1.png -->
				</div>
				<div class="a_right right">
						<p class="find_name left">{{index.name}}</p>
						<p class="find_synopiss">{{index.indroduce}}</p>
				</div>
		</div>
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
				if(JSON.parse(window.sessionStorage.getItem("content"))){
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
.find_content{width:6rem;height:1rem;padding:0.2rem 0.2rem;border-bottom:1px solid #eee;}
.find_content .a_left{width:1.25rem;height:100%;position:relative;}
.find_content .a_left img{width:100%;height:120%;position:absolute;top:-5px;left:-2px;}
.find_content .a_right{width:4.75rem;height:100%;}
.find_name{height:0.4rem;width:50%;line-height:0.4rem;font-size:14px;font-weight:600;}
.find_number{width:0.77rem;height:0.4rem;font-size:12px;color:#c7c7c7;background-color:#0ac540;border-radius:5px;border:0;outline:none;}
.find_num_color{background-color:#e6e6e6;}
.find_synopiss{clear:both;height:0.6rem;line-height:0.6rem;font-size:14px;color:#969696;}
</style>