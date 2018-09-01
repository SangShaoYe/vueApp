<template>
	<view class="container">
		<!-- 头部 -->
		<view class="header-container" :style="{'background':gcolor}">
			<view class="header-btns"><view class="icon icon-arrow_lift" @click="back"></view></view>
			<view class="header-title">通知消息</view>
			<view class="header-btns"></view>
		</view>
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
			}
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
