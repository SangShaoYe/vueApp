global.webpackJsonp([5],{

/***/ 16:
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
  }, [_vm._v("消息")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('view', {
    staticClass: "header-btns"
  })]), _vm._v(" "), _c('view', {
    staticClass: "body-container"
  }, [_c('view', {}, [_vm._v("分类 " + _vm._s(_vm.badgeCount))]), _vm._v(" "), _c('view', {
    staticClass: "icon-add_circle"
  })])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', {
    staticClass: "header-search-wrapper"
  }, [_c('image', {
    staticClass: "header-search-icon",
    attrs: {
      "src": "../../static/search.png",
      "mode": ""
    }
  }), _vm._v(" "), _c('input', {
    staticClass: "header-search-content",
    attrs: {
      "type": "text",
      "value": "",
      "placeholder": "搜索商品名称"
    }
  })])
}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

var _vue = __webpack_require__(1);var _vue2 = _interopRequireDefault(_vue);
var _classify = __webpack_require__(6);var _classify2 = _interopRequireDefault(_classify);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var uni = __webpack_require__(0).default;
var app = new _vue2.default(_classify2.default);
app.$mount();exports.default =

{
	config: { "navigationBarTitleText": "分类" } };

/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};



















var _vuex = __webpack_require__(3);var uni = __webpack_require__(0).default;exports.default =



{
	created: function created() {

	},
	computed: _extends({},
	(0, _vuex.mapState)(['badgeCount']),
	(0, _vuex.mapState)(['badgeView']),
	(0, _vuex.mapState)(['gcolor'])),

	methods: _extends({},
	(0, _vuex.mapMutations)(['setbadgeCount'])),

	onLoad: function onLoad() {

		console.log(this.badgeCount);
		// console.log(this.$store.state.badgeView);

		this.setbadgeCount();

		this.badgeView.draw('test');
		this.badgeView.drawText(this.badgeCount, { top: '0px',
			left: '50%',
			width: '15px',
			height: '15px' }, { align: 'center',
			color: '#fff',
			size: '12px' }, 'font');

	} };

/***/ }),

/***/ 38:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__E_download_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_download_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_download_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_download_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_download_HBuilderX_plugins_uniapp_node_modules_babel_runtime_E_download_HBuilderX_plugins_uniapp_lib_uni_loader_js_E_download_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_E_download_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_classify_vue__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__E_download_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_download_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_download_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_download_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_download_HBuilderX_plugins_uniapp_node_modules_babel_runtime_E_download_HBuilderX_plugins_uniapp_lib_uni_loader_js_E_download_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_E_download_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_classify_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__E_download_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_download_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_download_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_download_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_download_HBuilderX_plugins_uniapp_node_modules_babel_runtime_E_download_HBuilderX_plugins_uniapp_lib_uni_loader_js_E_download_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_E_download_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_classify_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__E_download_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_a67750b6_hasScoped_false_E_download_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_E_download_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_classify_vue__ = __webpack_require__(16);
function injectStyle (ssrContext) {
  __webpack_require__(38)
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
  __WEBPACK_IMPORTED_MODULE_0__E_download_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_download_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_download_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_download_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_download_HBuilderX_plugins_uniapp_node_modules_babel_runtime_E_download_HBuilderX_plugins_uniapp_lib_uni_loader_js_E_download_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_E_download_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_classify_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__E_download_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_a67750b6_hasScoped_false_E_download_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_E_download_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_classify_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

},[20]);