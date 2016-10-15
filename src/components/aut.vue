<template>
	<div>
		<main class="attention_main">
		<div class="attention_content" v-for="index in obj">
			<div class="attention_content_top" >
				<div class="a_left left">
					<img :src="index.img" alt="这是一个头像的图片">
				</div>
				<div class="a_right right">
						<p class="attention_name left">{{index.name}}</p><p class="attention_number right"><span class="number">{{index.number}}</span><span class="praise iconfont" :class="{praise_color:index.bool}" @click="zan($index)">&#xe60c;</span></p>
						<p class="synopiss">{{index.indroduce}}</p>
				</div>
			</div>
			<div class="attention_content_cneter">
				<img :src="index.img" alt="这是一张图片">
			</div>
			<div class="attention_content_bottom">
				小丸子啊小丸子
			</div>
		</div>
	</main>
	</div>
</template>
<script type="text/javascript">
	module.exports = {
		data:function(){
			return {
				obj:null

			}
		},
		route:{
			activate:function(){
				this.obj = JSON.parse(window.sessionStorage.getItem("name"))
				console.log(this.obj)
			}
		},
		methods:{
			zan:function(index){
				this.$http.post("/api/footer/aut/zan").then(function(res){
					this.obj[index].bool = !this.obj[index].bool;
					if(this.obj[index].bool){
						console.log("加")
						this.obj[index].number++;
					}else{
						console.log("减")
						this.obj[index].number--;
					}
				window.sessionStorage.setItem("name",JSON.stringify(this.obj))
				},function(err){

				})
			}
		},
		computed:{

		}
	}
</script>
<style type="text/css" scoped>
.attention_header .hot{background-color:#3ecf66}
.attention_header .attention{background-color:#63d985}
/*-----------------------------关注主题内容------------------------------------------*/
.attention_main{width:6.4rem;overflow: hidden;background-color:#f1f1f1;padding:0.88rem 0;}
.attention_content{width:6.4rem;overflow: hidden;margin-bottom:0.1rem;background-color:#fcfefd;}
.attention_content_top{width:6rem;height:1rem;padding:0.2rem 0.2rem;}
.attention_content_top .a_left{width:1.25rem;height:100%;position:relative;}
.attention_content_top .a_left img{width:100%;height:120%;position:absolute;top:-5px;left:-2px;}
.attention_content_top .a_right{width:4.75rem;height:100%;}
.attention_name{height:0.4rem;width:50%;line-height:0.4rem;font-size:14px;font-weight:600;}
.attention_number{height:0.4rem;font-size:14px;color:#c7c7c7;}
.praise{margin-left:10px;}
.praise_color{color:red;}
.synopiss{clear:both;height:0.6rem;line-height:0.6rem;font-size:14px;color:#969696;}
.attention_content_cneter{width:6.4rem;height:6rem;}
.attention_content_cneter>img{width:100%;height:100%;}

.attention_content_bottom{width:6.4rem;height:0.6rem;line-height:0.6rem;text-align: left;text-indent: 18px;font-size:14px;font-weight:600;}	

</style>