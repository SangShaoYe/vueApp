<template>
	<view class="container">
		<!-- 内容区 -->
		<view class="body-container">
			<view class="lists" v-for="(list,index) in msgList" :key="index">
				<view class="name">{{list.name}}</view>				
				<view class="date">{{list.date}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {
		data(){
			return {
				view_head:null,
				msgList:[{
					name:'您的商品已发货.',
					date:'2018-08-12'
				},{
					name:'您的商品已发货.',
					date:'2018-08-12'
				}]
			}
		},
		computed: {
			...mapState(['badgeView']),
			...mapState(['gcolor'])
		},
		methods:{
			back(){
				uni.navigateBack({
					delta: 1
				})
			},
			onHeadTap(e){
				
				let W = uni.getSystemInfoSync()
				var x=e.clientX;
				var y=e.clientY;
				if(y>10&&y<40){
					//返回图标区域
					if(x>(0) && x<(W.windowWidth * 0.2)){
						console.log(JSON.stringify('A'))
						uni.navigateBack({
							delta: 1
						})
					}
					//search框的区域
					if(x>(W.windowWidth * 0.2) && x<(W.windowWidth * 0.8)){
						console.log(JSON.stringify('B'))
					}
					//add图标区域
					if(x>(W.windowWidth * 0.8) && x<(W.windowWidth)){
						console.log(JSON.stringify('C'))
						uni.showToast({
							title:'C',
							icon:'success'
						})
					}
				}
			},
		},
		onLoad:function(){
			//#ifdef APP-PLUS
			this.badgeView.hide();
			//#endif
		},
		onUnload:function(){
			//#ifdef APP-PLUS
			this.badgeView.show();
			//#endif
			
			console.log('onUnload')
			this.view_head.close()
		},
		onShow:function(option){
					
			
			
					let W = uni.getSystemInfoSync()
					let leftPos = W.windowWidth - 100
					this.view_head = new plus.nativeObj.View('ntitlebar',
						{top:'0px',left:'0px',height:'44px',width:'100%',backgroundColor:'#D43030',statusbar:{background:'#D43030'}}
						,
						[
							
									
							 {tag:'rect',id:'rect2',rectStyles:{color:'#FFFFFF',radius:'60px'},position:{top:'8px',left:'20%',width:'60%',height:'30px'}},
							{tag:'input',id:'input',color:'#FFFFFF',inputStyles:{fonstSize:'14px',placeholder:'寻找调料、食材',borderColor:'#ffffff',borderRadius:'50px'},position:{top:'20px',left:'20%',width:'60%',height:'30px'}},
							
							{tag:'font',id:'font2',text:'搜索'
													,position: {top: "0",left: "80%",width:'20%'}
													,textStyles:{align:'center',size:'16px',color:'#FFFFFF'}}
		
						]
					);
					var back = new plus.nativeObj.Bitmap("back");
					back.loadBase64Data("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAlElEQVR42u3YSw6CMBRG4a5BEuW5RqjRJixbpZ0WJzponDAQem/Pt4LzhwRojQEAABtNvolvZn5WYuM/ZI24L3X8wdjHSWz8d4ToeOdb4g+Jt77LN35cLsRnGe9CTzzxqdvrrDf+Ggbi/0V0vIonUM6IrN9CKr4DjOBvlBEKT2QqzsRFjeBmbi+i70aTETLjAQA5WQEWOFmx6JRQpwAAAABJRU5ErkJggg==");
					this.view_head.drawBitmap(back, {}, {
						top: "10px",
						left: "10px",
						width: "24px",
						height: "24px"
					});
					
					let bitmap1 = new plus.nativeObj.Bitmap('bmp1');
					console.log(JSON.stringify(bitmap1))
					bitmap1.loadBase64Data("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAFSElEQVR4nO1aTWhdRRQeNIsgRYJECSI2iyyyeGLQLLJoNUiVikWDUijiItLqpllEKbaFQsFgaheaRQTBKCkGFVJowS50dxdpyOPO+b7hGp5ZZPEWXaiItCVIwC6ei3cjNr4792/m3Qj5YJb3nPN998yZv6OUZwRB0GuMGdRaj2utx0Vk2BjT59tvJRCRfgBvAfgOwDqA3wG0EsYWgE0AN7TWU8aYwarjL4QwDAdE5ByAFQD3LIRTB0lDckZrXauaVyqiKKqRnCXZLEM6YdwRkc8BHK6a53+wurp6kOQ5AD95IH7fEJFbAC6TfLpq3koppbTWNZK3fBPvMG4DOFY1+ZMANiogv5MNf4jI+SAIerpOPi5yuQpcnClLAObi7yfjMU3yEoBFkiavECQXuioCgPkcATZJzgAYy2F/CMA0gLUcIgRBEPT65K2UUkpEzmcM6CaA041G45GS/o4DuJZRiPlms+lPBADHMqT9FoBp139DRCYANDPUhQsu/f6DmHxawVsxxrzmJQClVBRFz4jItykx3AXwrlPHQRD0Zljq1sIwHHDquHMsPSQXMmThkDOnInImjXyj0TjgzGEGZCjEi04cRVFUExHbDm8lT4V3BZKPkrxiqQV3jTGvuHA0ayG/6XPOpyGKohqAHy0r0TelHIRhOABg2yLAtCMuhUFy1DYVtNbjZYyftah7U0SedEelOGxFUUS+LGwYwPcWdU875FAKAF4QkV8T4vy50GYsvslJ2vQ0KzmAWID2GSMpCw7lNkjypCX9Zz1wKAVjzHGLAB/nNoj2HV5S+nd92UtDEAQ98QaoU7wbuQ0CCBP+figiD3ngUBoAvkgQ4M96vf5wXmNJt7dLnuIvDRE5lZS1uW6Y4wL4V8J8+sQfhXIg+Yalbj2f2ZCIPGUxdNYjh1IAcNiyITqR2ZDW+kVLAXzbI4dSEJFhS9zZd61a63GLoUl/FMrBGDNoWQqzX5QAeNYiwHseOZQCgDFL3O9kNkTycUsNuOSRQymQfNUiwOuZDbVarQcA/JZg6CuPHErBtgySfC6XMbRfaTsZMp7iLw0Ac0kC1Ov1J/Iau2FJJ3f3bQ5hubf8JbcxEXnfIsAHHuIvBRF5yRJv/mlrW1IArHngUArx05rbpdv2TlfqqskxjDF9aL8Wd4y1cKcJyQ8tql7z+gyVAwA+slT/5cKGtdY1iwAtEZlwyKMQMlzclushALBoMb4pIv2OuBSNz7ZarbtwMGRTOH6WruR+MH52T8zQwsVvNwBcTnH06fLy8oNOnGWE1npKRGypfz2KosecOEursvGY71YmoN13aHum3xaRYadO41tiqwgkr0RR5K2fzxjTJyIzKX++RdJPj4CIXEjJghaAjTAMR1z7jqu9reDtjC2vHaawPEDs+gtX4eDMYIzpi3d51r++a9wu9BiSBUEQ9CJ789I9AEta6yN560MYhiMx8bTak5gJ3kRoNBoHMqbjfQEBWBKRU3G/z5gxZtAYMxiG4QiAo2i3zM05bLz0J0LcqmI7gHRrJL0G+RdBKaXiv1aqI7zg2BaRM/GpNW2aeBfhKICvuyjEdZIv7/jXWp9AegfbRq63gSKIr9O1R+LrACY7FVQROVT5dPhXMBMAfkC+pStxkAyQ4VS3p0RQSimSB0XkTQCf5WyC3kR7vzFFcjSPzz0zHTpBRPrjO4adJe8igItxH+Kk1voIydGyZ4o9lwlVYE9nQrewL4LaF0EptS+CUip7Ycz9hPZ/QkYR5qqO0yvSRCAZVB2jd9hEILlQdXxdQYIIW84vU/cy4qP0EoB1kld3yP8NhwqdpB18OzUAAAAASUVORK5CYII=");
					this.view_head.drawBitmap(bitmap1, {}, {
						top: "13px",
						left: "25%",
						width: "20px",
						height: "20px"
					});
					
		// 			this.view_head_c.drawRect({color:'rgba(0,0,0,0.7)',borderWidth:'2px',radius:'40px'},
		// 		{top:'0px',left:'100px',width:leftPos-100+'px',height:'90%'})
		// 			this.view_head_c.drawInput({top:'0px',left:'150px',width:leftPos-150+'px',height:'40px'}, {fontSize:'14px',radius:'40px',color:'#FFFFFF',borderWidth:'2px'}, 'input');
					// this.view_head_c.drawText('文本', {top:'0px',left:'0px',width:'100%',height:'100%'}, {size:'22px',color:'#FF0000'});
		// 			this.view_head_l = new plus.nativeObj.View('ntitlebar',
		// 				{top:'0px',left:'0px',height:'44px',width:'100px',backgroundColor:'rgba(0,0,0,0.5)',statusbar:{background:'#D43030'}},
		// 				[
		// 					{tag:'font',id:'font',text:'杭州'
		// 						,position: {top: "0",left: "0px"}
		// 						,textStyles:{align:'center',size:'16px',color:'#FFFFFF'}}
		// 				]
		// 			);
		// 			
		// 			
		// 			this.view_head_r = new plus.nativeObj.View('ntitlebar',
		// 				{top:'0px',left:leftPos+'px',height:'44px',width:'100px',backgroundColor:'rgba(0,0,0,0.5)',statusbar:{background:'#D43030'}},
		// 				[
		// 					{tag:'font',id:'font',text:'消息'
		// 						,position: {top: "0",left: "0px"}
		// 						,textStyles:{align:'center',size:'16px',color:'#FFFFFF'}}
		// 				]
		// 			);
					// this.view_head_l.addEventListener("click", this.onHeadL_Tap, false);
					this.view_head.addEventListener("click", this.onHeadTap, false);
					// this.view_head_r.addEventListener("click", this.onHeadR_Tap, false);
					this.view_head.show()
		// 			this.view_head_l.show()
		// 			this.view_head_r.show()
		
		
		
					
				},
				onHide:function(option){
// 							console.log('onHide')
// 							this.view_head_c.close()
				// 			this.view_head_l.close();
				// 			this.view_head_r.close();
						}
	}
</script>

<style>
	
	
	
	.lists{
		padding: 20px 30px;
		border-bottom: 2px solid #cccccc;
	}
	
	.date{
		text-align: right;
		font-size: 24px;
		color: #aaaaaa;
	}
</style>
