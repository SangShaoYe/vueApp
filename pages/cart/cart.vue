<template>
	<view class="container">
		<!-- 内容区 -->
		<view v-if="cartList.length==0" class="view-empty">
		  <image src="../../static/imgs/empty_cart.png"></image>
		  <text class="hint">购物车还是空的</text>
		  <text class="btn" @click="see">马上逛逛</text>
		</view>
		<view class="body-container">	
				<view class="cart" v-for="(cart,idx) in cartList" :key="idx">
					<image class="cart-image" :src="cart.image" mode=""></image>
					<view class="cart-info">
						<view class="cart-title">{{cart.title}}</view>
						<view><text class="cart-price">￥{{cart.price}}</text><text class="cart-unit">/{{cart.unit}}</text></view>
					</view>
					<image class="cart-del" src="../../static/imgs/delete.png" mode="" @click="delCart(idx)"></image>
					<cartcontrol class="cartcontrol" :food="cart" @cart-add="cartAdd"></cartcontrol>
				</view>
		</view>
		<view class="foot-container" v-if="cartList.length>0">
			<view class="foot-info">
				<view class="">共计{{cartList.length}}种{{foods_count}}件商品</view>
				<view class="foods_price">￥{{foods_price}}</view>
			</view>
			
			<!-- <button class="foot-btn btn1" size="mini" type="warn" @click="delCartTap" >删除</button> -->
			<button class="foot-btn" size="mini" type="warn" @click="postOrderTap">提交订单</button>
		</view>
	</view>
</template>

<script>
	import cartcontrol from 'components/cartcontrol'
	let ntitlebar;
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {
		data () {
			return {
				// cartList:[],
				cartList: [
					{title:'五得利六星馒头小麦面粉(亳州) 25kg/袋',image:'../../static/imgs/good1.jpg',price:'95.00',count:1,unit:'袋'},
					{title:'五得利910小麦粉 25kg/袋',image:'../../static/imgs/good2.jpg',price:'95.00',count:2,unit:'袋'},
					{title:'五得利六星馒头小麦面粉(亳州) 25kg/袋',image:'../../static/imgs/good3.jpg',price:'95.00',count:3,unit:'袋'}
				],
			}
		},
		components: {
			cartcontrol
	    },
		computed: {
			...mapState(['badgeCount']),
			...mapState(['badgeView']),
			...mapState(['gcolor']),
			foods_count:function(){
				let n= 0;
				this.cartList.forEach((curr, idx) => {
					n += curr.count
				})
				return n;
			},
			foods_price:function(){
				let n= 0;
				this.cartList.forEach((curr, idx) => {
					n += curr.count*curr.price
				})
				return n;
			}
		},
		created:function(){
			
		},
		methods:{
			...mapMutations(['setbadgeCount']),
			...mapMutations(['setbadgeView']),
			clickButton(){
				uni.showToast({
					title:'click'
				})
			},
			cartAdd(){
				this.setbadgeCount(this.foods_count);
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
			onClick(){},
			delCartTap: function(){
				this.cartList.pop()
			},
			see:function(){
				uni.switchTab({
					url:'/pages/classify/classify',
				})
			},
			// 删除商品
			delCart:function(idx){
				uni.showModal({
					title: '删除商品',
					content: '确认删除该商品？',
					success:  (res) => {
						if (res.confirm) {
							this.cartList.splice(idx,1)
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				})
			},
			// 提交订单
			postOrderTap:function(){
				// 跳转到确认订单页
			},
		},
		onLoad:function(){
			this.setbadgeCount(this.foods_count);
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
// 		    let W = uni.getSystemInfoSync()
//             let leftPos = W.windowWidth - 100
//             console.log('onShow')
//             console.log(W.windowWidth)
//             ntitlebar = new plus.nativeObj.View('ntitlebar',
//                 {top:'0px',left:'80%',height:'44px',width:'20%',backgroundColor:'rgba(0,0,0,0)',statusbar:{background:'#D43030'}},
//                 [
//                     {tag:'font',id:'font',text:'编辑'
//                         ,position: {top: "0",left: "0px"}
//                         ,textStyles:{align:'center',size:'16px',color:'#FFFFFF'}}
//                 ]
//             );
//             ntitlebar.addEventListener("click", this.onClick, false);
//             ntitlebar.show()
        },
        onHide:function(option){
            console.log('onHide')
            // ntitlebar.close();
        },
		onNavigationBarButtonTap:function(e){
			uni.showModal({
				title: '清空购物车',
				content: '确认清空购物车？',
				success:  (res) => {
					if (res.confirm) {
						this.cartList = []
					} else if (res.cancel) {
						console.log('用户点击取消');
					}
				}
			})
			
//             console.log(JSON.stringify(e))
// 			uni.showToast({
// 				title:'click'
// 			})
        },
	}
</script>

<style lang="less">
	.cart{
		height: 150px;
		display: flex;
		align-items: center;
		border-bottom: 1px solid #8F8F94;
		padding: 30px;
		position: relative;
// 		.cart-select{
// 			width: 15%;
// 			text-align: center;
// 		}
		.cart-image{
			width: 20%;
			height: 100%;
			margin-right: 20px;
		}
		.cart-info{
			width: 50%;
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			.cart-price{
				color:#D43030;
			}
		}
		.cart-del{
			position: absolute;
			right: 20px;
			top: 20px;
			width: 40px;
			height: 40px;
		}
		.cartcontrol{
			position: absolute;
			right: 20px;
			bottom: 20px;
		}
	}
	
	.foot-container{
		width: 100%;
		// height: 100px;
		padding: 20px;
		box-sizing: border-box;
		position: fixed;
		left: 0;
		bottom: 0;
		background: #F8F8F8;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.foot-label{
			flex: 1;
			font-size: 25px;
			font-weight: 100;
			display: flex;
			align-items: center;
			.check{
				margin-right: 10px;
			}
		}
		.foot-info{
			flex: 2;
			margin-left: 20px;
			font-size: 20px;
			.foods_price{
				color: #D43030;
			}
		}
		.btn1{
			margin-right: 10px;
		}
		
	}
	
	.view-empty{
		width: 750rpx;
		height: 750rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.view-empty image{
		width: 200rpx;
		height: 200rpx;
	}

	.hint{
		font-size: 32rpx;
		color: #999999;
	}

	.btn{
		font-size: 29rpx;
		color: #fff;
		background: red;
		margin-top: 100rpx;
		border-radius: 9rpx;
		padding: 20rpx 200rpx 20rpx 200rpx;
	}
</style>
