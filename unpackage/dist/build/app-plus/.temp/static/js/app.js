global.webpackJsonp([7],{

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _regenerator = __webpack_require__(32);var _regenerator2 = _interopRequireDefault(_regenerator);var _vue = __webpack_require__(1);var _vue2 = _interopRequireDefault(_vue);
var _vuex = __webpack_require__(3);var _vuex2 = _interopRequireDefault(_vuex);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _asyncToGenerator(fn) {return function () {var gen = fn.apply(this, arguments);return new Promise(function (resolve, reject) {function step(key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {return Promise.resolve(value).then(function (value) {step("next", value);}, function (err) {step("throw", err);});}}return step("next");});};}var uni = __webpack_require__(0).default;

_vue2.default.use(_vuex2.default);

var store = new _vuex2.default.Store({
	state: {
		hasLogin: true,
		loginProvider: "",
		openid: null,
		badgeView: null,
		badgeCount: 3,

		gcolor: '#D43030' },

	mutations: {
		login: function login(state, provider) {
			state.hasLogin = true;
			state.loginProvider = provider;
		},
		logout: function logout(state) {
			state.hasLogin = false;
			state.openid = null;
		},
		setOpenid: function setOpenid(state, openid) {
			state.openid = openid;
		},
		setbadgeCount: function setbadgeCount(state) {
			state.badgeCount++;
		},
		setbadgeView: function setbadgeView(state, badgeView) {
			state.badgeView = badgeView;
		} },

	actions: {
		// lazy loading openid
		getUserOpenId: function () {var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref2) {var
				commit = _ref2.commit,
				state = _ref2.state;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return (

									new Promise(function (resolve, reject) {
										if (state.openid) {
											resolve(state.openid);
										} else {
											uni.login({
												success: function success(data) {
													commit('login');
													setTimeout(function () {//模拟异步请求服务器获取 openid
														var openid = '123456789';
														console.log('uni.request mock openid[' + openid + ']');
														commit('setOpenid', openid);
														resolve(openid);
													}, 1000);
												},
												fail: function fail(err) {
													console.log('uni.login 接口调用失败，将无法正常使用开放接口等服务', err);
													reject(err);
												} });

										}
									}));case 2:return _context.abrupt('return', _context.sent);case 3:case 'end':return _context.stop();}}}, _callee, this);}));function getUserOpenId(_x) {return _ref.apply(this, arguments);}return getUserOpenId;}() } });exports.default =




store;

/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _vue = __webpack_require__(1);var _vue2 = _interopRequireDefault(_vue);
var _App = __webpack_require__(4);var _App2 = _interopRequireDefault(_App);

var _store = __webpack_require__(11);var _store2 = _interopRequireDefault(_store);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var uni = __webpack_require__(0).default;

_vue2.default.config.productionTip = false;

_vue2.default.prototype.$store = _store2.default;

_App2.default.mpType = 'app';

var app = new _vue2.default(_extends({
  store: _store2.default },
_App2.default));

app.$mount();exports.default =

{ config: { "pages": ["^pages/home/home", "pages/classify/classify", "pages/cart/cart", "pages/shopping_list/shopping_list", "pages/me/me", "pages/home/message/message"], "window": { "navigationBarTextStyle": "white", "navigationBarTitleText": "uni-app", "navigationBarBackgroundColor": "#D43030", "backgroundColor": "#D43030", "navigationStyle": "custom" }, "tabBar": { "color": "#7A7E83", "selectedColor": "#D43030", "borderStyle": "black", "backgroundColor": "#ffffff", "list": [{ "pagePath": "pages/home/home", "iconPath": "static/01.png", "selectedIconPath": "static/06.png", "text": "首页" }, { "pagePath": "pages/classify/classify", "iconPath": "static/02.png", "selectedIconPath": "static/07.png", "text": "分类" }, { "pagePath": "pages/cart/cart", "iconPath": "static/03.png", "selectedIconPath": "static/08.png", "text": "购物车" }, { "pagePath": "pages/shopping_list/shopping_list", "iconPath": "static/04.png", "selectedIconPath": "static/09.png", "text": "常购清单" }, { "pagePath": "pages/me/me", "iconPath": "static/05.png", "selectedIconPath": "static/10.png", "text": "我的" }] } } };

/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var uni = __webpack_require__(0).default;exports.default =
{
	onLaunch: function onLaunch() {
		console.log('App Launch');
	},
	onShow: function onShow() {
		console.log('App Show');
	},
	onHide: function onHide() {
		console.log('App Hide');
	} };

/***/ }),

/***/ 36:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 4:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__E_download_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_download_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_download_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_download_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_download_HBuilderX_plugins_uniapp_node_modules_babel_runtime_E_download_HBuilderX_plugins_uniapp_lib_uni_loader_js_E_download_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_E_download_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__E_download_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_download_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_download_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_download_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_download_HBuilderX_plugins_uniapp_node_modules_babel_runtime_E_download_HBuilderX_plugins_uniapp_lib_uni_loader_js_E_download_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_E_download_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_App_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__E_download_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_download_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_download_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_download_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_download_HBuilderX_plugins_uniapp_node_modules_babel_runtime_E_download_HBuilderX_plugins_uniapp_lib_uni_loader_js_E_download_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_E_download_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_App_vue__);
function injectStyle (ssrContext) {
  __webpack_require__(36)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */
var __vue_template__ = null
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__E_download_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_download_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_download_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_download_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_download_HBuilderX_plugins_uniapp_node_modules_babel_runtime_E_download_HBuilderX_plugins_uniapp_lib_uni_loader_js_E_download_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_E_download_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_App_vue___default.a,
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

},[18]);