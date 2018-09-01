<template>
	<view class="container">
		<!-- 头部 -->
		<!-- <view class="header-container" :style="{'background':gcolor}">
			<view class="header-btns">消息</view>
			<view class="header-search-wrapper">
				<image class="header-search-icon" src="../../static/search.png" mode=""></image>
				<input class="header-search-content" type="text" value="" placeholder="搜索商品名称" />
			</view>
			<view class="header-btns"></view>
		</view> -->
		<!-- 内容区 -->
		<view class="body-container">
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
			
			this.setbadgeCount();
			//#ifdef APP-PLUS
			this.badgeView.draw('test')
			this.badgeView.drawText(this.badgeCount, {top: '0px',
					left: '50%',
					width: '15px',
					height: '15px'}, {align:'center',
					color: '#fff',
					size: '12px'},'font');
			//#endif
		},
		onShow:function(option){
			console.log('onShow')
			ntitlebar = new plus.nativeObj.View('test',
				{top:'0px',left:'0px',height:'49px',width:'100%',backgroundColor:'#3A3A3A',statusbar:{background:'#333333'}},
				[
					{tag:'rect',id:'rect',color:'#FF0000',position:{top:'12px',left:'12px',width:'24px',height:'24px'}},
					{tag:'font',id:'font',text:'原生控件',textStyles:{size:'18px'}}
				]
			);
			ntitlebar.show()
		},
		onHide:function(option){
			console.log('onHide')
			ntitlebar.close();
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
</style>
