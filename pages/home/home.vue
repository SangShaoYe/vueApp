<template>
	<view class="container">
		<!-- 内容区 -->
		<view class="body-container">
			<!-- 轮播图区 -->
			<!--<view class="banner-container">-->
				<!--<swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :indicator-active-color="gcolor" :duration="duration">-->
					<!--<swiper-item v-for="item in itemList" :key="item">-->
						<!--<image class="swiper-image" :src="item" mode=""></image>-->
					<!--</swiper-item>-->
				<!--</swiper>-->
			<!--</view>-->
			<view class="">
				<!-- 首页 -->
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
				itemList: [
					'../../static/banner1.jpg',
					'../../static/banner2.jpg',
					'../../static/banner3.jpg'
				],
				indicatorDots: true,
				autoplay: true,
				interval: 5000,
				duration: 1000,
				
				city:'杭州'
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
			init(){
			    return;
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
			update(){
				this.setbadgeCount();
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
			ToMessage(){
				uni.navigateTo({
					url:'message/message',
				})
			}
		},
		
	}
</script>

<style>
	/* .header-container .icon{
		line-height: 10px;
	} */
	.content {
		flex: 1;
		justify-content: center;
		align-items: center;
	}
	.title {
		font-size: 36px;
		color: #8f8f94;
	}
	
	
	.city{
		width: 100px;
		text-align:center;
	}
	
	
	
	.swiper-image{
		width: 100%;
		height: 100%;
	}
</style>
