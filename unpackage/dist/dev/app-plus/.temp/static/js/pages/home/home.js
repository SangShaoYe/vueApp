global.webpackJsonp([4],{

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('view', {\n    staticClass: \"container\"\n  }, [_c('view', {\n    staticClass: \"body-container\"\n  }, [_c('view', {}, [_c('button', {\n    attrs: {\n      \"type\": \"primary\",\n      \"size\": \"mini\",\n      \"eventid\": '0'\n    },\n    on: {\n      \"click\": _vm.update\n    }\n  }, [_vm._v(\"button\")])], 1)])])\n}\nvar staticRenderFns = []\nrender._withStripped = true\nvar esExports = { render: render, staticRenderFns: staticRenderFns }\n/* harmony default export */ __webpack_exports__[\"a\"] = (esExports);\nif (false) {\n  module.hot.accept()\n  if (module.hot.data) {\n     require(\"vue-hot-reload-api\").rerender(\"data-v-67f791c0\", esExports)\n  }\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./lib/mpvue-loader/lib/template-compiler?{\"id\":\"data-v-67f791c0\",\"hasScoped\":false}!./lib/preprocessor-loader.js?{\"type\":\"html\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=template&index=0!E:/Vue-P/vueApp/pages/home/home.vue\n// module id = 14\n// module chunks = 4\n\n");

/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });\n\nvar _vue = __webpack_require__(1);var _vue2 = _interopRequireDefault(_vue);\nvar _home = __webpack_require__(7);var _home2 = _interopRequireDefault(_home);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var uni = __webpack_require__(0).default;\nvar app = new _vue2.default(_home2.default);\napp.$mount();exports.default =\n\n{\n\tconfig: { \"navigationBarTitleText\": \"首页\" } };\n\n//////////////////\n// WEBPACK FOOTER\n// E:/Vue-P/vueApp/pages/home/home.js\n// module id = 21\n// module chunks = 4\n\n//# sourceURL=uni-app:///pages/home/home.js?eb0d");

/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _vuex = __webpack_require__(3);var uni = __webpack_require__(0).default;\n\n\n\nvar badgeView;exports.default =\n{\n\tdata: function data() {\n\t\treturn {\n\t\t\titemList: [\n\t\t\t'../../static/banner1.jpg',\n\t\t\t'../../static/banner2.jpg',\n\t\t\t'../../static/banner3.jpg'],\n\n\t\t\tindicatorDots: true,\n\t\t\tautoplay: true,\n\t\t\tinterval: 5000,\n\t\t\tduration: 1000,\n\n\t\t\tcity: '杭州' };\n\n\t},\n\tcreated: function created() {\n\t\tthis.init();\n\t},\n\tcomputed: _extends({},\n\t(0, _vuex.mapState)(['badgeCount']),\n\t(0, _vuex.mapState)(['badgeView']),\n\t(0, _vuex.mapState)(['gcolor'])),\n\n\tmethods: _extends({},\n\t(0, _vuex.mapMutations)(['setbadgeCount']),\n\t(0, _vuex.mapMutations)(['setbadgeView']), {\n\t\tinit: function init() {\n\t\t\treturn;\n\t\t\tconsole.log(this.gcolor);\n\n\t\t\tbadgeView = new plus.nativeObj.View('test',\n\t\t\t{ bottom: '40px', left: '0px', height: '15px', width: '100%' },\n\t\t\t[{ tag: 'rect', id: 'rect', color: '#FF0000', position: { top: '0px', left: '50%', width: '15px', height: '15px' },\n\t\t\t\trectStyles: {\n\t\t\t\t\tcolor: '#d74b28',\n\t\t\t\t\tsize: '15px',\n\t\t\t\t\tradius: '50%' } },\n\n\t\t\t{ tag: 'font', id: 'font', text: this.badgeCount,\n\t\t\t\tposition: {\n\t\t\t\t\ttop: '0px',\n\t\t\t\t\tleft: '50%',\n\t\t\t\t\twidth: '15px',\n\t\t\t\t\theight: '15px' },\n\n\t\t\t\ttextStyles: {\n\t\t\t\t\talign: 'center',\n\t\t\t\t\tcolor: '#fff',\n\t\t\t\t\tsize: '12px' } }]);\n\n\n\t\t\tbadgeView.show();\n\t\t\tthis.setbadgeView(badgeView);\n\n\n\n\n\n\n\n\n\t\t},\n\t\tupdate: function update() {\n\t\t\tthis.setbadgeCount();\n\n\t\t\tbadgeView.draw('test');\n\t\t\tbadgeView.drawText(this.badgeCount, { top: '0px',\n\t\t\t\tleft: '50%',\n\t\t\t\twidth: '15px',\n\t\t\t\theight: '15px' }, { align: 'center',\n\t\t\t\tcolor: '#fff',\n\t\t\t\tsize: '12px' }, 'font');\n\n\n\n\n\n\n\n\n\t\t},\n\t\tToMessage: function ToMessage() {\n\t\t\tuni.navigateTo({\n\t\t\t\turl: 'message/message' });\n\n\t\t} }) };\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/babel-loader/lib?{\"babelrc\":false,\"retainLines\":true,\"presets\":[[\"Z://软件安装包//HBuilderX.0.1.47.20180821-alpha.full//plugins//uniapp//node_modules//babel-preset-env\",{\"modules\":\"commonjs\",\"targets\":{\"browsers\":[\"> 1%\",\"last 2 versions\",\"not ie <= 8\"]}}],\"Z://软件安装包//HBuilderX.0.1.47.20180821-alpha.full//plugins//uniapp//node_modules//babel-preset-stage-2\"],\"plugins\":[[\"Z://软件安装包//HBuilderX.0.1.47.20180821-alpha.full//plugins//uniapp//node_modules//babel-plugin-transform-runtime\",{\"helpers\":false,\"polyfill\":false,\"regenerator\":true,\"moduleName\":\"Z://软件安装包//HBuilderX.0.1.47.20180821-alpha.full//plugins//uniapp//node_modules//babel-runtime\"}]]}!./lib/uni-loader.js!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=script&index=0!E:/Vue-P/vueApp/pages/home/home.vue\n// module id = 28\n// module chunks = 4\n\n//# sourceURL=uni-app:///pages/home/home.vue?a115");

/***/ }),

/***/ 35:
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/extract-text-webpack-plugin/loader.js?{\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader!./lib/css-var-loader.js!./node_modules/css-loader?{\"minimize\":false,\"sourceMap\":false}!./lib/mpvue-loader/lib/style-compiler?{\"vue\":true,\"id\":\"data-v-67f791c0\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/px2rpx-loader?{\"baseDpr\":1,\"rpxUnit\":1}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./node_modules/postcss-loader/lib?{\"config\":{\"path\":\"Z://软件安装包//HBuilderX.0.1.47.20180821-alpha.full//plugins//uniapp//.postcssrc.js\"},\"sourceMap\":true}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=styles&index=0!E:/Vue-P/vueApp/pages/home/home.vue\n// module id = 35\n// module chunks = 4\n\n");

/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_node_modules_babel_runtime_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_lib_uni_loader_js_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_home_vue__ = __webpack_require__(28);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_node_modules_babel_runtime_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_lib_uni_loader_js_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_home_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_node_modules_babel_runtime_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_lib_uni_loader_js_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_home_vue__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_67f791c0_hasScoped_false_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_home_vue__ = __webpack_require__(14);\nvar disposed = false\nfunction injectStyle (ssrContext) {\n  if (disposed) return\n  __webpack_require__(35)\n}\nvar normalizeComponent = __webpack_require__(2)\n/* script */\n\n/* template */\n\n/* styles */\nvar __vue_styles__ = injectStyle\n/* scopeId */\nvar __vue_scopeId__ = null\n/* moduleIdentifier (server only) */\nvar __vue_module_identifier__ = null\nvar Component = normalizeComponent(\n  __WEBPACK_IMPORTED_MODULE_0__Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_node_modules_babel_runtime_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_lib_uni_loader_js_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_home_vue___default.a,\n  __WEBPACK_IMPORTED_MODULE_1__Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_67f791c0_hasScoped_false_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_home_vue__[\"a\" /* default */],\n  __vue_styles__,\n  __vue_scopeId__,\n  __vue_module_identifier__\n)\nComponent.options.__file = \"E:\\\\Vue-P\\\\vueApp\\\\pages\\\\home\\\\home.vue\"\nif (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== \"default\" && key.substr(0, 2) !== \"__\"})) {console.error(\"named exports are not supported in *.vue files.\")}\nif (Component.options.functional) {console.error(\"[vue-loader] home.vue: functional components are not supported with templates, they should use render functions.\")}\n\n/* hot reload */\nif (false) {(function () {\n  var hotAPI = require(\"vue-hot-reload-api\")\n  hotAPI.install(require(\"vue\"), false)\n  if (!hotAPI.compatible) return\n  module.hot.accept()\n  if (!module.hot.data) {\n    hotAPI.createRecord(\"data-v-67f791c0\", Component.options)\n  } else {\n    hotAPI.reload(\"data-v-67f791c0\", Component.options)\n  }\n  module.hot.dispose(function (data) {\n    disposed = true\n  })\n})()}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component.exports);\n\n\n//////////////////\n// WEBPACK FOOTER\n// E:/Vue-P/vueApp/pages/home/home.vue\n// module id = 7\n// module chunks = 4\n\n");

/***/ })

},[21]);