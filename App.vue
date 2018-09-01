<script>
	export default {
		onLaunch: function () {
			console.log('App Launch')
		},
		onShow: function () {
			console.log('App Show')
		},
		onHide: function () {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */

	page,
	view {
	}

	page {
		min-height: 100%;
	}
	.header-container{
		display: flex;
		align-items: center;
		color: white;
		padding: 60px 10px 20px;
		font-size: 28px;
		position: fixed;
		width: 100%;
		height: 40px;
		left: 0;
		top: 0;
		z-index: 999;
	}
	.header-btns{
		width: 100px;
		text-align:center;
		font-size: 24px;
		/* line-height: 1; */
		/* height:26px; */
		display:flex;
		flex-direction:column;
		justify-content:center;

	}
	.header-back{
		width: 40px;
		height: 40px;
		margin-left: 10px;
	}
	.header-title{
		width:100%;
		line-height:52px;
		text-align: center;
	}
	.header-container  .icon{
		/* line-height:52px; */
		color: white;
		padding:0 10px;
	}
	
	.header-search-wrapper{
		flex: 1;
		display:flex;
		align-items:center;
		background: white;
		border-radius: 30px;
	}
	.header-search-icon{
		width: 30px;
		height: 30px;
		margin:0 20px;
	}
	.header-search-content{
		width: 100%;
	}
	
	.body-container{
		font-size: 28px;
		height: 2000px;
	}
	
	@font-face {
	  font-family: 'icomoon';
	  src:  url('https://www.zgsj1.com/Public/fm_static/bg_img/icomoon_font/icomoon.eot');
	  src:  url('https://www.zgsj1.com/Public/fm_static/bg_img/icomoon_font/icomoon.eot') format('embedded-opentype'),
		url('https://www.zgsj1.com/Public/fm_static/bg_img/icomoon_font/icomoon.ttf') format('truetype'),
		url('https://www.zgsj1.com/Public/fm_static/bg_img/icomoon_font/icomoon.woff') format('woff'),
		url('https://www.zgsj1.com/Public/fm_static/bg_img/icomoon_font/icomoon.svg') format('svg');
	  font-weight: normal;
	  font-style: normal;
	}

	[class^="icon-"], [class*=" icon-"] {
	  /* use !important to prevent issues with browser extensions that change fonts */
	  font-family: 'icomoon' !important;
	  speak: none;
	  font-style: normal;
	  font-weight: normal;
	  font-variant: normal;
	  text-transform: none;
	  line-height: 1;

	  /* Better Font Rendering =========== */
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	}

	.icon-add_circle:before {
	  content: "\e900";
	}
	.icon-arrow_lift:before {
	  content: "\e901";
	}
	.icon-check_circle:before {
	  content: "\e902";
	}
	.icon-close:before {
	  content: "\e903";
	}
	.icon-favorite:before {
	  content: "\e904";
	}
	.icon-keyboard_arrow_right:before {
	  content: "\e905";
	}
	.icon-remove_circle_outline:before {
	  content: "\e906";
	}
	.icon-shopping_cart:before {
	  content: "\e907";
	}
	.icon-thumb_down:before {
	  content: "\e908";
	}
	.icon-thumb_up:before {
	  content: "\e909";
	}

</style>
