<template>
	<view class="container">
		<!-- 内容区 -->
		<view class="body-container">
			cart
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

<style>

</style>
