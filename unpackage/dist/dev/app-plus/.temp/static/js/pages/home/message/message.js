global.webpackJsonp([3],{

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('view', {\n    staticClass: \"container\"\n  }, [_c('view', {\n    staticClass: \"body-container\"\n  }, _vm._l((_vm.msgList), function(list, index) {\n    return _c('view', {\n      key: index,\n      staticClass: \"lists\"\n    }, [_c('view', {\n      staticClass: \"name\"\n    }, [_vm._v(_vm._s(list.name))]), _vm._v(\" \"), _c('view', {\n      staticClass: \"date\"\n    }, [_vm._v(_vm._s(list.date))])])\n  }))])\n}\nvar staticRenderFns = []\nrender._withStripped = true\nvar esExports = { render: render, staticRenderFns: staticRenderFns }\n/* harmony default export */ __webpack_exports__[\"a\"] = (esExports);\nif (false) {\n  module.hot.accept()\n  if (module.hot.data) {\n     require(\"vue-hot-reload-api\").rerender(\"data-v-a9ceb0a4\", esExports)\n  }\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./lib/mpvue-loader/lib/template-compiler?{\"id\":\"data-v-a9ceb0a4\",\"hasScoped\":false}!./lib/preprocessor-loader.js?{\"type\":\"html\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=template&index=0!E:/Vue-P/vueApp/pages/home/message/message.vue\n// module id = 16\n// module chunks = 3\n\n");

/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });\n\nvar _vue = __webpack_require__(1);var _vue2 = _interopRequireDefault(_vue);\nvar _message = __webpack_require__(8);var _message2 = _interopRequireDefault(_message);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var uni = __webpack_require__(0).default;\nvar app = new _vue2.default(_message2.default);\napp.$mount();exports.default =\n\n{\n\tconfig: { \"navigationBarTitleText\": \"message\" } };\n\n//////////////////\n// WEBPACK FOOTER\n// E:/Vue-P/vueApp/pages/home/message/message.js\n// module id = 22\n// module chunks = 3\n\n//# sourceURL=uni-app:///pages/home/message/message.js?f005");

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};\n\n\n\n\n\n\n\n\n\n\n\n\nvar _vuex = __webpack_require__(3);var uni = __webpack_require__(0).default;exports.default =\n\n\n\n{\n\tdata: function data() {\n\t\treturn {\n\t\t\tview_head: null,\n\t\t\tmsgList: [{\n\t\t\t\tname: '您的商品已发货.',\n\t\t\t\tdate: '2018-08-12' },\n\t\t\t{\n\t\t\t\tname: '您的商品已发货.',\n\t\t\t\tdate: '2018-08-12' }] };\n\n\n\t},\n\tcomputed: _extends({},\n\t(0, _vuex.mapState)(['badgeView']),\n\t(0, _vuex.mapState)(['gcolor'])),\n\n\tmethods: {\n\t\tback: function back() {\n\t\t\tuni.navigateBack({\n\t\t\t\tdelta: 1 });\n\n\t\t},\n\t\tonHeadTap: function onHeadTap(e) {\n\n\t\t\tvar W = uni.getSystemInfoSync();\n\t\t\tvar x = e.clientX;\n\t\t\tvar y = e.clientY;\n\t\t\tif (y > 10 && y < 40) {\n\t\t\t\t//返回图标区域\n\t\t\t\tif (x > 0 && x < W.windowWidth * 0.2) {\n\t\t\t\t\tconsole.log(JSON.stringify('A'));\n\t\t\t\t\tuni.navigateBack({\n\t\t\t\t\t\tdelta: 1 });\n\n\t\t\t\t}\n\t\t\t\t//search框的区域\n\t\t\t\tif (x > W.windowWidth * 0.2 && x < W.windowWidth * 0.8) {\n\t\t\t\t\tconsole.log(JSON.stringify('B'));\n\t\t\t\t}\n\t\t\t\t//add图标区域\n\t\t\t\tif (x > W.windowWidth * 0.8 && x < W.windowWidth) {\n\t\t\t\t\tconsole.log(JSON.stringify('C'));\n\t\t\t\t\tuni.showToast({\n\t\t\t\t\t\ttitle: 'C',\n\t\t\t\t\t\ticon: 'success' });\n\n\t\t\t\t}\n\t\t\t}\n\t\t} },\n\n\tonLoad: function onLoad() {\n\n\t\tthis.badgeView.hide();\n\n\t},\n\tonUnload: function onUnload() {\n\n\t\tthis.badgeView.show();\n\n\n\t\tconsole.log('onUnload');\n\t\tthis.view_head.close();\n\t},\n\tonShow: function onShow(option) {\n\n\n\n\t\tvar W = uni.getSystemInfoSync();\n\t\tvar leftPos = W.windowWidth - 100;\n\t\tthis.view_head = new plus.nativeObj.View('ntitlebar',\n\t\t{ top: '0px', left: '0px', height: '44px', width: '100%', backgroundColor: '#D43030', statusbar: { background: '#D43030' } },\n\n\t\t[\n\n\n\t\t{ tag: 'rect', id: 'rect2', rectStyles: { color: '#FFFFFF', radius: '60px' }, position: { top: '8px', left: '20%', width: '60%', height: '30px' } },\n\t\t{ tag: 'input', id: 'input', color: '#FFFFFF', inputStyles: { fonstSize: '14px', placeholder: '寻找调料、食材', borderColor: '#ffffff', borderRadius: '50px' }, position: { top: '20px', left: '20%', width: '60%', height: '30px' } },\n\n\t\t{ tag: 'font', id: 'font2', text: '消息',\n\t\t\tposition: { top: \"0\", left: \"80%\", width: '20%' },\n\t\t\ttextStyles: { align: 'center', size: '16px', color: '#FFFFFF' } }]);\n\n\n\n\t\tvar back = new plus.nativeObj.Bitmap(\"back\");\n\t\tback.loadBase64Data(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAlElEQVR42u3YSw6CMBRG4a5BEuW5RqjRJixbpZ0WJzponDAQem/Pt4LzhwRojQEAABtNvolvZn5WYuM/ZI24L3X8wdjHSWz8d4ToeOdb4g+Jt77LN35cLsRnGe9CTzzxqdvrrDf+Ggbi/0V0vIonUM6IrN9CKr4DjOBvlBEKT2QqzsRFjeBmbi+i70aTETLjAQA5WQEWOFmx6JRQpwAAAABJRU5ErkJggg==\");\n\t\tthis.view_head.drawBitmap(back, {}, {\n\t\t\ttop: \"10px\",\n\t\t\tleft: \"10px\",\n\t\t\twidth: \"24px\",\n\t\t\theight: \"24px\" });\n\n\n\t\tvar bitmap1 = new plus.nativeObj.Bitmap('bmp1');\n\t\tconsole.log(JSON.stringify(bitmap1));\n\t\tbitmap1.loadBase64Data(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAFSElEQVR4nO1aTWhdRRQeNIsgRYJECSI2iyyyeGLQLLJoNUiVikWDUijiItLqpllEKbaFQsFgaheaRQTBKCkGFVJowS50dxdpyOPO+b7hGp5ZZPEWXaiItCVIwC6ei3cjNr4792/m3Qj5YJb3nPN998yZv6OUZwRB0GuMGdRaj2utx0Vk2BjT59tvJRCRfgBvAfgOwDqA3wG0EsYWgE0AN7TWU8aYwarjL4QwDAdE5ByAFQD3LIRTB0lDckZrXauaVyqiKKqRnCXZLEM6YdwRkc8BHK6a53+wurp6kOQ5AD95IH7fEJFbAC6TfLpq3koppbTWNZK3fBPvMG4DOFY1+ZMANiogv5MNf4jI+SAIerpOPi5yuQpcnClLAObi7yfjMU3yEoBFkiavECQXuioCgPkcATZJzgAYy2F/CMA0gLUcIgRBEPT65K2UUkpEzmcM6CaA041G45GS/o4DuJZRiPlms+lPBADHMqT9FoBp139DRCYANDPUhQsu/f6DmHxawVsxxrzmJQClVBRFz4jItykx3AXwrlPHQRD0Zljq1sIwHHDquHMsPSQXMmThkDOnInImjXyj0TjgzGEGZCjEi04cRVFUExHbDm8lT4V3BZKPkrxiqQV3jTGvuHA0ayG/6XPOpyGKohqAHy0r0TelHIRhOABg2yLAtCMuhUFy1DYVtNbjZYyftah7U0SedEelOGxFUUS+LGwYwPcWdU875FAKAF4QkV8T4vy50GYsvslJ2vQ0KzmAWID2GSMpCw7lNkjypCX9Zz1wKAVjzHGLAB/nNoj2HV5S+nd92UtDEAQ98QaoU7wbuQ0CCBP+figiD3ngUBoAvkgQ4M96vf5wXmNJt7dLnuIvDRE5lZS1uW6Y4wL4V8J8+sQfhXIg+Yalbj2f2ZCIPGUxdNYjh1IAcNiyITqR2ZDW+kVLAXzbI4dSEJFhS9zZd61a63GLoUl/FMrBGDNoWQqzX5QAeNYiwHseOZQCgDFL3O9kNkTycUsNuOSRQymQfNUiwOuZDbVarQcA/JZg6CuPHErBtgySfC6XMbRfaTsZMp7iLw0Ac0kC1Ov1J/Iau2FJJ3f3bQ5hubf8JbcxEXnfIsAHHuIvBRF5yRJv/mlrW1IArHngUArx05rbpdv2TlfqqskxjDF9aL8Wd4y1cKcJyQ8tql7z+gyVAwA+slT/5cKGtdY1iwAtEZlwyKMQMlzclushALBoMb4pIv2OuBSNz7ZarbtwMGRTOH6WruR+MH52T8zQwsVvNwBcTnH06fLy8oNOnGWE1npKRGypfz2KosecOEursvGY71YmoN13aHum3xaRYadO41tiqwgkr0RR5K2fzxjTJyIzKX++RdJPj4CIXEjJghaAjTAMR1z7jqu9reDtjC2vHaawPEDs+gtX4eDMYIzpi3d51r++a9wu9BiSBUEQ9CJ789I9AEta6yN560MYhiMx8bTak5gJ3kRoNBoHMqbjfQEBWBKRU3G/z5gxZtAYMxiG4QiAo2i3zM05bLz0J0LcqmI7gHRrJL0G+RdBKaXiv1aqI7zg2BaRM/GpNW2aeBfhKICvuyjEdZIv7/jXWp9AegfbRq63gSKIr9O1R+LrACY7FVQROVT5dPhXMBMAfkC+pStxkAyQ4VS3p0RQSimSB0XkTQCf5WyC3kR7vzFFcjSPzz0zHTpBRPrjO4adJe8igItxH+Kk1voIydGyZ4o9lwlVYE9nQrewL4LaF0EptS+CUip7Ycz9hPZ/QkYR5qqO0yvSRCAZVB2jd9hEILlQdXxdQYIIW84vU/cy4qP0EoB1kld3yP8NhwqdpB18OzUAAAAASUVORK5CYII=\");\n\t\tthis.view_head.drawBitmap(bitmap1, {}, {\n\t\t\ttop: \"13px\",\n\t\t\tleft: \"25%\",\n\t\t\twidth: \"20px\",\n\t\t\theight: \"20px\" });\n\n\n\t\t// \t\t\tthis.view_head_c.drawRect({color:'rgba(0,0,0,0.7)',borderWidth:'2px',radius:'40px'},\n\t\t// \t\t{top:'0px',left:'100px',width:leftPos-100+'px',height:'90%'})\n\t\t// \t\t\tthis.view_head_c.drawInput({top:'0px',left:'150px',width:leftPos-150+'px',height:'40px'}, {fontSize:'14px',radius:'40px',color:'#FFFFFF',borderWidth:'2px'}, 'input');\n\t\t// this.view_head_c.drawText('文本', {top:'0px',left:'0px',width:'100%',height:'100%'}, {size:'22px',color:'#FF0000'});\n\t\t// \t\t\tthis.view_head_l = new plus.nativeObj.View('ntitlebar',\n\t\t// \t\t\t\t{top:'0px',left:'0px',height:'44px',width:'100px',backgroundColor:'rgba(0,0,0,0.5)',statusbar:{background:'#D43030'}},\n\t\t// \t\t\t\t[\n\t\t// \t\t\t\t\t{tag:'font',id:'font',text:'杭州'\n\t\t// \t\t\t\t\t\t,position: {top: \"0\",left: \"0px\"}\n\t\t// \t\t\t\t\t\t,textStyles:{align:'center',size:'16px',color:'#FFFFFF'}}\n\t\t// \t\t\t\t]\n\t\t// \t\t\t);\n\t\t// \t\t\t\n\t\t// \t\t\t\n\t\t// \t\t\tthis.view_head_r = new plus.nativeObj.View('ntitlebar',\n\t\t// \t\t\t\t{top:'0px',left:leftPos+'px',height:'44px',width:'100px',backgroundColor:'rgba(0,0,0,0.5)',statusbar:{background:'#D43030'}},\n\t\t// \t\t\t\t[\n\t\t// \t\t\t\t\t{tag:'font',id:'font',text:'消息'\n\t\t// \t\t\t\t\t\t,position: {top: \"0\",left: \"0px\"}\n\t\t// \t\t\t\t\t\t,textStyles:{align:'center',size:'16px',color:'#FFFFFF'}}\n\t\t// \t\t\t\t]\n\t\t// \t\t\t);\n\t\t// this.view_head_l.addEventListener(\"click\", this.onHeadL_Tap, false);\n\t\tthis.view_head.addEventListener(\"click\", this.onHeadTap, false);\n\t\t// this.view_head_r.addEventListener(\"click\", this.onHeadR_Tap, false);\n\t\tthis.view_head.show();\n\t\t// \t\t\tthis.view_head_l.show()\n\t\t// \t\t\tthis.view_head_r.show()\n\n\n\n\n\t},\n\tonHide: function onHide(option) {\n\t\t// \t\t\t\t\t\t\tconsole.log('onHide')\n\t\t// \t\t\t\t\t\t\tthis.view_head_c.close()\n\t\t// \t\t\tthis.view_head_l.close();\n\t\t// \t\t\tthis.view_head_r.close();\n\t} };\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/babel-loader/lib?{\"babelrc\":false,\"retainLines\":true,\"presets\":[[\"Z://软件安装包//HBuilderX.0.1.47.20180821-alpha.full//plugins//uniapp//node_modules//babel-preset-env\",{\"modules\":\"commonjs\",\"targets\":{\"browsers\":[\"> 1%\",\"last 2 versions\",\"not ie <= 8\"]}}],\"Z://软件安装包//HBuilderX.0.1.47.20180821-alpha.full//plugins//uniapp//node_modules//babel-preset-stage-2\"],\"plugins\":[[\"Z://软件安装包//HBuilderX.0.1.47.20180821-alpha.full//plugins//uniapp//node_modules//babel-plugin-transform-runtime\",{\"helpers\":false,\"polyfill\":false,\"regenerator\":true,\"moduleName\":\"Z://软件安装包//HBuilderX.0.1.47.20180821-alpha.full//plugins//uniapp//node_modules//babel-runtime\"}]]}!./lib/uni-loader.js!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=script&index=0!E:/Vue-P/vueApp/pages/home/message/message.vue\n// module id = 29\n// module chunks = 3\n\n//# sourceURL=uni-app:///pages/home/message/message.vue?0669");

/***/ }),

/***/ 37:
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/extract-text-webpack-plugin/loader.js?{\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader!./lib/css-var-loader.js!./node_modules/css-loader?{\"minimize\":false,\"sourceMap\":false}!./lib/mpvue-loader/lib/style-compiler?{\"vue\":true,\"id\":\"data-v-a9ceb0a4\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/px2rpx-loader?{\"baseDpr\":1,\"rpxUnit\":1}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./node_modules/postcss-loader/lib?{\"config\":{\"path\":\"Z://软件安装包//HBuilderX.0.1.47.20180821-alpha.full//plugins//uniapp//.postcssrc.js\"},\"sourceMap\":true}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=styles&index=0!E:/Vue-P/vueApp/pages/home/message/message.vue\n// module id = 37\n// module chunks = 3\n\n");

/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_node_modules_babel_runtime_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_lib_uni_loader_js_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_message_vue__ = __webpack_require__(29);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_node_modules_babel_runtime_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_lib_uni_loader_js_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_message_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_node_modules_babel_runtime_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_lib_uni_loader_js_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_message_vue__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_a9ceb0a4_hasScoped_false_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_message_vue__ = __webpack_require__(16);\nvar disposed = false\nfunction injectStyle (ssrContext) {\n  if (disposed) return\n  __webpack_require__(37)\n}\nvar normalizeComponent = __webpack_require__(2)\n/* script */\n\n/* template */\n\n/* styles */\nvar __vue_styles__ = injectStyle\n/* scopeId */\nvar __vue_scopeId__ = null\n/* moduleIdentifier (server only) */\nvar __vue_module_identifier__ = null\nvar Component = normalizeComponent(\n  __WEBPACK_IMPORTED_MODULE_0__Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_node_modules_babel_runtime_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_lib_uni_loader_js_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_message_vue___default.a,\n  __WEBPACK_IMPORTED_MODULE_1__Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_a9ceb0a4_hasScoped_false_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_message_vue__[\"a\" /* default */],\n  __vue_styles__,\n  __vue_scopeId__,\n  __vue_module_identifier__\n)\nComponent.options.__file = \"E:\\\\Vue-P\\\\vueApp\\\\pages\\\\home\\\\message\\\\message.vue\"\nif (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== \"default\" && key.substr(0, 2) !== \"__\"})) {console.error(\"named exports are not supported in *.vue files.\")}\nif (Component.options.functional) {console.error(\"[vue-loader] message.vue: functional components are not supported with templates, they should use render functions.\")}\n\n/* hot reload */\nif (false) {(function () {\n  var hotAPI = require(\"vue-hot-reload-api\")\n  hotAPI.install(require(\"vue\"), false)\n  if (!hotAPI.compatible) return\n  module.hot.accept()\n  if (!module.hot.data) {\n    hotAPI.createRecord(\"data-v-a9ceb0a4\", Component.options)\n  } else {\n    hotAPI.reload(\"data-v-a9ceb0a4\", Component.options)\n  }\n  module.hot.dispose(function (data) {\n    disposed = true\n  })\n})()}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component.exports);\n\n\n//////////////////\n// WEBPACK FOOTER\n// E:/Vue-P/vueApp/pages/home/message/message.vue\n// module id = 8\n// module chunks = 3\n\n");

/***/ })

},[22]);