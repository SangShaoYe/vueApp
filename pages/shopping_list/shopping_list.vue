<template>
	<view class="container">
		<!-- 头部 -->
		<view class="header-container" :style="{'background':gcolor}">
			<view class="header-btns"></view>
			<view class="header-title">常购清单</view>
			<view class="header-btns"></view>
		</view>
		<!-- 内容区 -->
		<view class="body-container">
			shopping_list
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {
		computed: {
			...mapState(['badgeCount']),
			...mapState(['badgeView']),
			...mapState(['gcolor'])
		},
		created:function(){
			this.init();
		},
		methods:{
			init(){
				
			}
		}
	}
</script>

<style>

</style>
