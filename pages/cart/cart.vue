<template>
	<view class="container">
		<!-- 内容区 -->
		<view class="body-container">
			<checkbox-group @change="checkboxChange">
				<label class="cart" v-for="(cart,idx) in cartList" :key="idx">
					<checkbox class="cart-select" :value="cart.checked" :checked="cart.checked" name="s1" />
					<image class="cart-image" :src="cart.image" mode=""></image>
					<view class="cart-info">
						<view class="cart-title">{{cart.title}}</view>
						<view class="cart-price">{{cart.price}}</view>
					</view>
				</label>
			</checkbox-group>
		</view>
	</view>
</template>

<script>
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
					{title:'五得利910小麦粉 25kg/袋',image:'../../static/imgs/good2.jpg',price:'95.00',count:1,checked:false},
					{title:'五得利六星馒头小麦面粉(亳州) 25kg/袋',image:'../../static/imgs/good3.jpg',price:'95.00',count:1,checked:false}
				]
			}
		},
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
				
			},
			clickButton(){
				uni.showToast({
					title:'click'
				})
			},
			checkboxChange: function (e) {
				console.log('checkbox发生change事件，携带value值为：' + e.detail.value)
			},
            onClick(){
				

				// ntitlebar.drawText()
// 				([{
// 					id: 'ntitlebar',
// 					tags: [{
// 						id: 'font',
// 						text:'编辑2',
// 						textStyles:{align:'center',size:'16px',color:'#cccccc'}
// 					}]
// 				}])

				
				// 打开其他网页
				
// 				let webview = plus.webview.create('http://m.weibo.cn/u/3196963860', 'test', {'titleNView':{'backgroundColor':'#D74B28','titleText':'标题栏文字','titleColor':'#CCCCCC',autoBackButton:false,buttons:[{text:'点击',float:'left',onclick:this.clickButton}]}});
// 	webview.addEventListener('close', function(){
// 		webview=null;
// 	});
// 	webview.addEventListener('titleUpdate', function(){
// 		webview.show();
// 	});
	
// 			    uni.showToast({
// 					title:'编辑',
// 					icon:'success'
// 				})
// 				
// 				plus.nativeUI.actionSheet( {title:"Plus is ready!",cancel:"取消",buttons:[{title:"确定"},{title:"取消"}]}, function(e){
// 
// 				console.log( "User pressed: "+e.index );
// 
// 				} );
			}
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
	}
</style>
