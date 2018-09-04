<template>
	<view class="container">
		<!-- 内容区 -->
		<view class="body-container">
			
			<checkbox-group @change="checkboxChange">
				
				<view class="cart" v-for="(cart,idx) in cartList" :key="idx">
					<label>
					<checkbox class="cart-select" :value="cart.checked" :checked="cart.checked" name="s1" color="#D43030" />
					</label>
					<image class="cart-image" :src="cart.image" mode=""></image>
					<view class="cart-info">
						<view class="cart-title">{{cart.title}}</view>
						<view class="cart-price">￥{{cart.price}}</view>
					</view>
					<cartcontrol class="cartcontrol" :food="cart" @cart-add="cartAdd"></cartcontrol>
				</view>
			</checkbox-group>
			
		</view>
		<view class="foot-container">
			<checkbox-group @change="checkboxChange_all">
				<label class="foot-label" >
					<checkbox class="check" :value="all_checked"  :checked="all_checked" color="#D43030" /><text>全选</text>
				</label>
			</checkbox-group>
			<view class="foot-info">
				<view class="">共计{{cartList.length}}种商品</view>
			</view>
			<button class="foot-btn" size="mini" type="warn">提交订单</button>
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
				cartList: [
					{title:'五得利六星馒头小麦面粉(亳州) 25kg/袋',image:'../../static/imgs/good1.jpg',price:'95.00',count:1,checked:false},
					{title:'五得利910小麦粉 25kg/袋',image:'../../static/imgs/good2.jpg',price:'95.00',count:2,checked:false},
					{title:'五得利六星馒头小麦面粉(亳州) 25kg/袋',image:'../../static/imgs/good3.jpg',price:'95.00',count:3,checked:false}
				],
				all_checked:0
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
			checkboxChange: function (e) {
				console.log('checkbox发生change事件，携带value值为：' + e.detail.value)
			},
			checkboxChange_all: function (e) {
				let kk = e.detail.value
				if(kk.length>0){
					uni.showToast({
						title:'全选'
					})
					this.cartList.forEach((item) => {
						item.checked = '1'
					})
				}else{
					this.cartList.forEach((item) => {
						item.checked = ''
					})
				}
				console.log( JSON.stringify(e.detail.value))
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
            onClick(){}
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
            console.log(JSON.stringify(e))
			uni.showToast({
				title:'click'
			})
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
		.cart-select{
			width: 15%;
			text-align: center;
		}
		.cart-image{
			width: 20%;
			height: 100%;
			margin-right: 20px;
		}
		.cart-info{
			width: 40%;
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			.cart-price{
				color:#D43030;
			}
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
		
	}
	
// 	.foot-btn{
// 		width: 200px;
// 	}
</style>
