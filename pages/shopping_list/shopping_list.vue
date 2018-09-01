<template>
	<view class="container">
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
