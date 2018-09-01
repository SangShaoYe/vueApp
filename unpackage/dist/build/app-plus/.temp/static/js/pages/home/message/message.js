global.webpackJsonp([3],{

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', {
    staticClass: "container"
  }, [_c('view', {
    staticClass: "header-container",
    style: ({
      'background': _vm.gcolor
    })
  }, [_c('view', {
    staticClass: "header-btns"
  }, [_c('view', {
    staticClass: "icon icon-arrow_lift",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.back
    }
  })]), _vm._v(" "), _c('view', {
    staticClass: "header-title"
  }, [_vm._v("通知消息")]), _vm._v(" "), _c('view', {
    staticClass: "header-btns"
  })]), _vm._v(" "), _c('view', {
    staticClass: "body-container"
  }, _vm._l((_vm.msgList), function(list, index) {
    return _c('view', {
      key: index,
      staticClass: "lists"
    }, [_c('view', {
      staticClass: "name"
    }, [_vm._v(_vm._s(list.name))]), _vm._v(" "), _c('view', {
      staticClass: "date"
    }, [_vm._v(_vm._s(list.date))])])
  }))])
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

var _vue = __webpack_require__(1);var _vue2 = _interopRequireDefault(_vue);
var _message = __webpack_require__(8);var _message2 = _interopRequireDefault(_message);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var uni = __webpack_require__(0).default;
var app = new _vue2.default(_message2.default);
app.$mount();exports.default =

{
	config: { "navigationBarTitleText": "message" } };

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};


















var _vuex = __webpack_require__(3);var uni = __webpack_require__(0).default;exports.default =



{
	data: function data() {
		return {
			msgList: [{
				name: '您的商品已发货.',
				date: '2018-08-12' },
			{
				name: '您的商品已发货.',
				date: '2018-08-12' }] };


	},
	computed: _extends({},
	(0, _vuex.mapState)(['badgeView']),
	(0, _vuex.mapState)(['gcolor'])),

	methods: {
		back: function back() {
			uni.navigateBack({
				delta: 1 });

		} },

	onLoad: function onLoad() {

		this.badgeView.hide();

	},
	onUnload: function onUnload() {

		this.badgeView.show();

	} };

/***/ }),

/***/ 35:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__E_download_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_download_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_download_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_download_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_download_HBuilderX_plugins_uniapp_node_modules_babel_runtime_E_download_HBuilderX_plugins_uniapp_lib_uni_loader_js_E_download_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_E_download_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_message_vue__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__E_download_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_download_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_download_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_download_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_download_HBuilderX_plugins_uniapp_node_modules_babel_runtime_E_download_HBuilderX_plugins_uniapp_lib_uni_loader_js_E_download_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_E_download_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_message_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__E_download_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_download_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_download_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_download_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_download_HBuilderX_plugins_uniapp_node_modules_babel_runtime_E_download_HBuilderX_plugins_uniapp_lib_uni_loader_js_E_download_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_E_download_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_message_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__E_download_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_39c31849_hasScoped_false_E_download_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_E_download_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_message_vue__ = __webpack_require__(14);
function injectStyle (ssrContext) {
  __webpack_require__(35)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__E_download_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_download_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_download_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_download_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_download_HBuilderX_plugins_uniapp_node_modules_babel_runtime_E_download_HBuilderX_plugins_uniapp_lib_uni_loader_js_E_download_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_E_download_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_message_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__E_download_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_39c31849_hasScoped_false_E_download_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_E_download_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_message_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

},[22]);