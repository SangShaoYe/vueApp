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
			    console.log('onClick')
			}
		},
        onShow:function(option){
            console.log('onShow')
            ntitlebar = new plus.nativeObj.View('ntitlebar',
                {top:'0px',left:'0px',height:'44px',width:'100%',backgroundColor:'rgba(0,0,0,0)',statusbar:{background:'#D43030'}},
                [
                    {tag:'font',id:'font',text:'编辑'
                        ,position: {top: "0",right: "20px"}
                        ,textStyles:{align:'right',size:'18px',color:'#FFFFFF'}}
                ]
            );
            ntitlebar.addEventListener("click", this.onClick, false);
            ntitlebar.show()
        },
        onHide:function(option){
            console.log('onHide')
            ntitlebar.close();
        }
	}
</script>

<style>

</style>
