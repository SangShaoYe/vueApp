<template>
	<view class="container">
		<!-- 内容区 -->
		<view class="body-container">
			<!-- <swiper style="height: 100px;background: #d4d4d4;" class="banner-container" display-multiple-items='3' :indicator-dots="indicatorDots"  :interval="interval" :indicator-active-color="gcolor" :duration="duration">
				<swiper-item  v-for="item in itemList" :key="item">
					 <view style="border-bottom: 1px solid #D43030;">{{item}}</view>
				</swiper-item>
			</swiper> -->
			<scroll-view scroll-x style="height: 200px;width: 100%"  >
				
					<!-- <view style="padding: 20px 50px;display: inline-block;white-space: nowrap;"  v-for="item in itemList" :key="item">
						<text style="border-bottom: 1px solid #D43030;">{{item}}</text>
					</view> -->
				
                <view id="green" class="scroll-view-item_H bc_green" style="background: green;"></view>
                <view id="red" class="scroll-view-item_H bc_red" style="background: red;"></view>
                <view id="yellow" class="scroll-view-item_H bc_yellow" style="background: green;"></view>
                <view id="blue" class="scroll-view-item_H bc_blue" style="background: blue;"></view>
            </scroll-view>
			<view class="">分类 {{badgeCount}}</view>
			<view class="icon-add_circle"></view>
		</view>
	</view>
</template>

<script>
	var ntitlebar;
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {
		data() {
			return {
				itemList: [
					'item1',
					'item2',
					'item3',
					'item4',
					'item5',
					'item6',
					'item7',
					'item8',
					'item9'
				],
				indicatorDots: true,
				interval: 5000,
				duration: 1000,
			}
		},
		created:function(){
			
		},
		computed:{
			...mapState(['badgeCount']),
			...mapState(['badgeView']),
			...mapState(['gcolor'])
		},
		methods:{
			...mapMutations(['setbadgeCount'])
		},
		onLoad:function(){
			
			console.log(this.badgeCount);
			// console.log(this.$store.state.badgeView);
			
// 			this.setbadgeCount();
// 			//#ifdef APP-PLUS
// 			this.badgeView.draw('test')
// 			this.badgeView.drawText(this.badgeCount, {top: '0px',
// 					left: '50%',
// 					width: '15px',
// 					height: '15px'}, {align:'center',
// 					color: '#fff',
// 					size: '12px'},'font');
// 			//#endif
		},
		onShow:function(option){
			console.log('onShow')
// 			ntitlebar = new plus.nativeObj.View('ntitlebar',
// 				{top:'0px',left:'0px',height:'49px',width:'100%',backgroundColor:'#3A3A3A',statusbar:{background:'#333333'}},
// 				[
// 					{tag:'rect',id:'rect',color:'#FF0000',position:{top:'12px',left:'12px',width:'24px',height:'24px'}},
// 					{tag:'font',id:'font',text:'原生控件',textStyles:{size:'18px'}}
// 				]
// 			);
// 			ntitlebar.show()
		},
		onHide:function(option){
			console.log('onHide')
			// ntitlebar.close();
		}
	}
</script>

<style>
	.header-container{
		display: flex;
		align-items: center;
		color: white;
		padding: 60px 10px 20px;
		font-size: 28px;
	}
	.search-wrapper{
		flex: 1;
		display:flex;
		align-items:center;
		background: white;
		border-radius: 30px;
	}
	.search-icon{
		width: 30px;
		height: 30px;
		margin:0 20px;
	}
	.search-content{
		width: 100%;
	}
	.msg{
		width: 100px;
	}
	
	.scroll-view-item_H{
		width: 300px;
		height: 200px;
		display: inline-block;
	}
</style>
