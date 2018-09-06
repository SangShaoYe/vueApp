<template>
	<view class="container">
		<!-- 内容区 -->
		<view class="body-container">
			<!-- 轮播图区 -->
			<swiper class="banner-container"  :indicator-dots="indicatorDots" :circular="circular" :autoplay="autoplay" :interval="interval" :indicator-active-color="gcolor" :duration="duration">
				<swiper-item v-for="item in itemList" :key="item">
					<image  class="swiper-image" :src="item" mode=""></image>
				</swiper-item>
			</swiper>
			<!-- 组合促销 -->
			<view class="group-container">
				<image class="group-big" src="../../static/imgs/group0.jpg" mode=""></image>
				<view class="group-small">
					<image class="group-img-small" src="../../static/imgs/group1.jpg" mode=""></image>
					<image class="group-img-small" src="../../static/imgs/group1.jpg" mode=""></image>
				</view>
			</view>
			<!-- 新品推荐 -->
			<view class="new-container">
				<image class="new-img" src="../../static/imgs/newPush.jpg" mode=""></image>
			</view>
			<!-- 火爆热销 -->
			<view class="hot-container">
				<view class="hot-header">
					<image class="hot-logo" src="../../static/imgs/hot.png" mode=""></image>
					<text>火爆热销</text>
				</view>
				<view class="hot-content">
					<view class="hot-list" v-for="(hot,idx) in hotList" :key="idx">
						<image class="hot-image" :src="hot.image" mode=""></image>
						<view class="hot-title">{{hot.title}}</view>
						<view class="hot-price-wrap">
							<radio-group class="radio-group" @change="radioChange.apply(this,[idx,$event])">
								<view class=""  v-for="(item,idx_sub) in hot.buy_chioce" :key="item">
									<view class="price-row"><radio v-if="hot.buy_chioce.length>1" :value="idx_sub"  :checked="item.price==hot.price" color="#D43030" /><text class="hot-price">￥{{item.price}}</text><text>/{{item.unit}}</text></view>
								</view>
							</radio-group>
						</view>
					</view>
				</view>
			</view>
			
			
			
			<view class="">
				<button type="primary" size="mini" @click="update">button</button>
			</view>
		</view>
		
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	var badgeView;
	export default {
		data() {
			return {
				view_head:null,
				itemList: [
					'../../static/imgs/banner1.jpg',
					'../../static/imgs/banner2.jpg',
					'../../static/imgs/banner3.jpg'
				],
				indicatorDots: true,
				autoplay: true,
				interval: 5000,
				duration: 1000,
				circular: true,
				hotList: [{
					title:'元宝一级大豆油（色拉油）10L*2桶/箱',
					price:'123.00',
					unit:'箱',
					image:'../../static/imgs/good1.jpg',
					buy_chioce:[{
						price:'123.00',
						unit:'箱',
					}]
				},{
					title:'元宝一级大豆油（色拉油）10L*2桶/箱',
					price:'123.00',
					unit:'箱',
					image:'../../static/imgs/good1.jpg',
					buy_chioce:[{
						price:'123.00',
						unit:'箱',
					},{
						price:'32.00',
						unit:'桶',
					}]
				},{
					title:'元宝一级大豆油（色拉油）10L*2桶/箱',
					price:'123.00',
					unit:'箱',
					image:'../../static/imgs/good1.jpg',
					buy_chioce:[{
						price:'123.00',
						unit:'箱',
					},{
						price:'32.00',
						unit:'桶',
					}]
				}],
				
				city:'柯桥'
			}
		},
		created:function(){
			this.init();
		},
		computed: {
			...mapState(['badgeCount']),
			...mapState(['badgeView']),
			...mapState(['gcolor'])
		},
		methods:{
			...mapMutations(['setbadgeCount']),
			...mapMutations(['setbadgeView']),
			init: function(){
				console.log(this.gcolor)
				//#ifdef APP-PLUS
				badgeView = new plus.nativeObj.View('test',
					{bottom:'40px',left:'0px',height:'15px',width:'100%'},
					[{tag:'rect',id:'rect',color:'#FF0000',position:{top:'0px',left:'50%',width:'15px',height:'15px'},
					rectStyles: {
						color: '#d74b28',
						size: '15px',
						radius:'50%'
					}},
					{tag:'font',id:'font',text:this.badgeCount,
					position: {
						top: '0px',
						left: '50%',
						width: '15px',
						height: '15px'
					},
					textStyles:{ 
						align:'center',
						color: '#fff',
						size: '12px',
						}}
					]);
				badgeView.show();	
				this.setbadgeView(badgeView);
				//#endif
				
				//#ifdef MP-WEIXIN
				wx.setTabBarBadge({
				index: 2,
				text: this.badgeCount.toString()
				})
				//#endif
			},
			update: function(){
				this.setbadgeCount(++this.badgeCount);
				//#ifdef APP-PLUS
				badgeView.draw('test')
				badgeView.drawText(this.badgeCount, {top: '0px',
						left: '50%',
						width: '15px',
						height: '15px'}, {align:'center',
						color: '#fff',
						size: '12px'},'font');
				//#endif
				
				//#ifdef MP-WEIXIN
				wx.setTabBarBadge({
				index: 2,
				text: this.badgeCount.toString()
				})
				//#endif
			},
			ToMessage: function(){
				uni.navigateTo({
					url:'message/message',
				})
			},
			onHeadTap: function(e){
				let W = uni.getSystemInfoSync()
				var x=e.clientX;
				var y=e.clientY;
				if(y>10&&y<40){
					//发现图标区域
					if(x>(0) && x<(W.windowWidth * 0.2)){
						console.log(JSON.stringify('A'))
						uni.showToast({
							title:'A',
							icon:'success'
						})
					}
					//search框的区域
					if(x>(W.windowWidth * 0.2) && x<(W.windowWidth * 0.8)){
						console.log(JSON.stringify('B'))
						uni.showToast({
							title:'B',
							icon:'success'
						})
						uni.navigateTo({
							url:'search/search',
						})
					}
					//add图标区域
					if(x>(W.windowWidth * 0.8) && x<(W.windowWidth)){
						console.log(JSON.stringify('C'))
						uni.showToast({
							title:'C',
							icon:'success'
						})
						uni.navigateTo({
							url:'message/message',
						})
					}
				}
			},
			radioChange: function(e,t) {
				let v = t.detail.value
				console.log(e)				
				console.log(v)				
				// console.log(JSON.stringify(t))
			}
		},
		onLoad:function(){
			
		},
		onShow:function(option){
			
			let W = uni.getSystemInfoSync()
			let leftPos = W.windowWidth - 100
			this.view_head = new plus.nativeObj.View('ntitlebar',
				{top:'0px',left:'0px',height:'44px',width:'100%',backgroundColor:'rgba(0,0,0,0)',statusbar:{background:'#D43030'}}
				,
				[
					{tag:'font',id:'font',text:this.city
											,position: {top: "0",left: "0px",width:'20%'}
											,textStyles:{align:'center',size:'16px',color:'#FFFFFF'}},
							
// 					 {tag:'rect',id:'rect2',rectStyles:{color:'#FFFFFF',radius:'60px'},position:{top:'8px',left:'20%',width:'60%',height:'30px'}},
// 					{tag:'input',id:'input',color:'#FFFFFF',inputStyles:{fonstSize:'14px',placeholder:'寻找调料、食材',borderColor:'#ffffff',borderRadius:'50px'},position:{top:'20px',left:'20%',width:'60%',height:'30px'}},
					
					{tag:'font',id:'font2',text:'消息'
											,position: {top: "0",left: "80%",width:'20%'}
											,textStyles:{align:'center',size:'16px',color:'#FFFFFF'}}
// 					{
// 						tag:'font',
// 						id: 'icon2',
// 						text: '\ue900', //此为字体图标Unicode码'\e600'转换为'\ue600'
// 						textStyles: {
// 							fontSrc: 'https://www.zgsj1.com/Public/fm_static/bg_img/icomoon_font/icomoon.ttf',
// 							align: 'left',
// 							color: '#000',
// 							size: '30px'
// 						},
// 						position:{top:'0px',left:'25%'}
// 					}


				]
			);
			
			
			let bitmap1 = new plus.nativeObj.Bitmap('bmp1');
			console.log(JSON.stringify(bitmap1))
			bitmap1.loadBase64Data("data:image/png;base64,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");
			this.view_head.drawBitmap(bitmap1, {}, {
				top: "3px",
				left: "20%",
				width: "60%",
				height: "40px"
			});
			
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

			this.view_head.addEventListener("click", this.onHeadTap, false);
			this.view_head.show()
			
		},
		onHide:function(option){
			console.log('onHide')
			this.view_head.close()
		},
// 		onNavigationBarButtonTap:function(e){
// 			console.log(JSON.stringify(e))
// 			uni.showToast({
// 				title:'click'
// 			})
// 		}
		
	}
</script>

<style lang="less" scoped>

	
	.city{
		width: 100px;
		text-align:center;
	}
	
	.banner-container{
		height: 300px;
	}
	.swiper-image{
		width: 100%;
		height: 100%;
	}
	
	.group-container{
		display: flex;
		height: 375px;
		.group-big{
			flex: 1;
			height: 100%;
		}
		.group-small{
			flex: 1;
			height: 100%;
			.group-img-small{
				width: 100%;
				height: 50%;
			}
		}
	}
	
	.new-container{
		height: 195px;
		.new-img{
			width: 100%;
			height: 100%;
		}
	}
	
	.hot-container{
		.hot-header{
			padding: 20px;
			border-bottom: 1px solid #D9D9D9;
			display: flex;
			justify-content: center;
			align-items: center;
			.hot-logo{
				width: 30px;
				height: 30px;
				margin-right: 10px;
			}
		}
		.hot-content{
			display: flex;
			flex-wrap: wrap;
			.hot-list{
				display: flex;
				flex-direction: column;
				// justify-content: space-between;
				width: 50%;
				height: 350px;
				padding: 20px;
				box-sizing: border-box;
				border-bottom: 1px solid #D9D9D9;
				border-right: 1px solid #D9D9D9;
				font-size: 26px;
				.hot-image{
					width: 100px;
					height: 150px;
					align-self: center;
					margin-bottom: 10px;
				}
				.hot-price-wrap{
					margin-top: 20px;
					height: 100px;
					display: flex;
					flex-direction: column;
					justify-content: center;
					.price-row{
						margin-bottom: 5px;
					}
				}
				.hot-price{
					color: #D43030;
				}
			}
		}
	}
</style>
