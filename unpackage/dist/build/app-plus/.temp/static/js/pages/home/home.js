global.webpackJsonp([4],{

/***/ 15:
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
    staticClass: "header-btns",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.ToMessage
    }
  }, [_c('view', {
    staticClass: "icon icon-favorite"
  }), _vm._v(" "), _c('view', [_vm._v("消息")])]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('view', {
    staticClass: "header-btns",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.ToMessage
    }
  })]), _vm._v(" "), _c('view', {
    staticClass: "body-container"
  }, [_c('view', {
    staticClass: "banner-container"
  }, [_c('swiper', {
    attrs: {
      "indicator-dots": _vm.indicatorDots,
      "autoplay": _vm.autoplay,
      "interval": _vm.interval,
      "indicator-active-color": _vm.gcolor,
      "duration": _vm.duration
    }
  }, _vm._l((_vm.itemList), function(item, index) {
    return _c('swiper-item', {
      key: item,
      attrs: {
        "mpcomid": '0-' + index
      }
    }, [_c('image', {
      staticClass: "swiper-image",
      attrs: {
        "src": item,
        "mode": ""
      }
    })])
  }))], 1), _vm._v(" "), _c('view', {}, [_c('button', {
    attrs: {
      "type": "primary",
      "size": "mini",
      "eventid": '2'
    },
    on: {
      "click": _vm.update
    }
  }, [_vm._v("button")])], 1)])])
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

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

var _vue = __webpack_require__(1);var _vue2 = _interopRequireDefault(_vue);
var _home = __webpack_require__(7);var _home2 = _interopRequireDefault(_home);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var uni = __webpack_require__(0).default;
var app = new _vue2.default(_home2.default);
app.$mount();exports.default =

{
	config: { "navigationBarTitleText": "首页" } };

/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};





































var _vuex = __webpack_require__(3);var uni = __webpack_require__(0).default;



var badgeView;exports.default =
{
	data: function data() {
		return {
			itemList: [
			'../../static/banner1.jpg',
			'../../static/banner2.jpg',
			'../../static/banner3.jpg'],

			indicatorDots: true,
			autoplay: true,
			interval: 5000,
			duration: 1000,

			city: '杭州' };

	},
	created: function created() {
		this.init();
	},
	computed: _extends({},
	(0, _vuex.mapState)(['badgeCount']),
	(0, _vuex.mapState)(['badgeView']),
	(0, _vuex.mapState)(['gcolor'])),

	methods: _extends({},
	(0, _vuex.mapMutations)(['setbadgeCount']),
	(0, _vuex.mapMutations)(['setbadgeView']), {
		init: function init() {
			console.log(this.gcolor);

			badgeView = new plus.nativeObj.View('test',
			{ bottom: '40px', left: '0px', height: '15px', width: '100%' },
			[{ tag: 'rect', id: 'rect', color: '#FF0000', position: { top: '0px', left: '50%', width: '15px', height: '15px' },
				rectStyles: {
					color: '#d74b28',
					size: '15px',
					radius: '50%' } },

			{ tag: 'font', id: 'font', text: this.badgeCount,
				position: {
					top: '0px',
					left: '50%',
					width: '15px',
					height: '15px' },

				textStyles: {
					align: 'center',
					color: '#fff',
					size: '12px' } }]);


			badgeView.show();
			this.setbadgeView(badgeView);








		},
		update: function update() {
			this.setbadgeCount();

			badgeView.draw('test');
			badgeView.drawText(this.badgeCount, { top: '0px',
				left: '50%',
				width: '15px',
				height: '15px' }, { align: 'center',
				color: '#fff',
				size: '12px' }, 'font');








		},
		ToMessage: function ToMessage() {
			uni.navigateTo({
				url: 'message/message' });

		} }) };

/***/ }),

/***/ 37:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__E_download_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_download_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_download_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_download_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_download_HBuilderX_plugins_uniapp_node_modules_babel_runtime_E_download_HBuilderX_plugins_uniapp_lib_uni_loader_js_E_download_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_E_download_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_home_vue__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__E_download_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_download_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_download_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_download_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_download_HBuilderX_plugins_uniapp_node_modules_babel_runtime_E_download_HBuilderX_plugins_uniapp_lib_uni_loader_js_E_download_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_E_download_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_home_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__E_download_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_download_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_download_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_download_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_download_HBuilderX_plugins_uniapp_node_modules_babel_runtime_E_download_HBuilderX_plugins_uniapp_lib_uni_loader_js_E_download_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_E_download_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_home_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__E_download_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_9de517f6_hasScoped_false_E_download_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_E_download_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_home_vue__ = __webpack_require__(15);
function injectStyle (ssrContext) {
  __webpack_require__(37)
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
  __WEBPACK_IMPORTED_MODULE_0__E_download_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_download_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_download_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_download_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_download_HBuilderX_plugins_uniapp_node_modules_babel_runtime_E_download_HBuilderX_plugins_uniapp_lib_uni_loader_js_E_download_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_E_download_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_home_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__E_download_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_9de517f6_hasScoped_false_E_download_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_E_download_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_home_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

},[21]);