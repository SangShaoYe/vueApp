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
            onClick(){
			    uni.showToast({
					title:'编辑',
					icon:'success'
				})
				
				plus.nativeUI.actionSheet( {title:"Plus is ready!",cancel:"取消",buttons:[{title:"确定"},{title:"取消"}]}, function(e){

				console.log( "User pressed: "+e.index );

				} );
			}
		},
        onShow:function(option){
// 		    let W = uni.getSystemInfoSync()
//             let leftPos = W.windowWidth - 100
//             console.log('onShow')
//             console.log(W.windowWidth)
//             ntitlebar = new plus.nativeObj.View('ntitlebar',
//                 {top:'0px',left:'80%',height:'44px',width:'20%',backgroundColor:'rgba(0,0,0,0.5)',statusbar:{background:'#D43030'}},
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
        }
	}
</script>

<style>

</style>
