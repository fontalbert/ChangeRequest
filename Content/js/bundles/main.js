/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./Content/js/main/index.jsx","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Content/js/app/context/app-context.jsx":
/*!************************************************!*\
  !*** ./Content/js/app/context/app-context.jsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar AppContext = _react2.default.createContext({});\nexports.default = AppContext;\n\n//# sourceURL=webpack:///./Content/js/app/context/app-context.jsx?");

/***/ }),

/***/ "./Content/js/app/service/app-service.jsx":
/*!************************************************!*\
  !*** ./Content/js/app/service/app-service.jsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar AppService = function () {\n    function AppService() {\n        _classCallCheck(this, AppService);\n    }\n\n    _createClass(AppService, null, [{\n        key: \"getMainResources\",\n        value: function getMainResources(api, success, fails) {\n            $.get(api + \"App/MainResources_Get\").done(function (response) {\n                success(JSON.parse(response.resources));\n            }).fail(function (error) {\n                //console.log(error.responseJSON.Message);\n                fails(error.responseJSON.Message);\n            });\n        }\n    }]);\n\n    return AppService;\n}();\n\nexports.default = AppService;\n\n//# sourceURL=webpack:///./Content/js/app/service/app-service.jsx?");

/***/ }),

/***/ "./Content/js/common/loading-overlay.jsx":
/*!***********************************************!*\
  !*** ./Content/js/common/loading-overlay.jsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar LoadingOverlay = function (_React$Component) {\n    _inherits(LoadingOverlay, _React$Component);\n\n    function LoadingOverlay() {\n        _classCallCheck(this, LoadingOverlay);\n\n        return _possibleConstructorReturn(this, (LoadingOverlay.__proto__ || Object.getPrototypeOf(LoadingOverlay)).apply(this, arguments));\n    }\n\n    _createClass(LoadingOverlay, [{\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'div',\n                { style: { position: \"relative\" } },\n                _react2.default.createElement(\n                    'div',\n                    { className: \"overlay\" + (!this.props.status ? \" cloak\" : \"\") },\n                    _react2.default.createElement(\n                        'div',\n                        { className: 'loader' },\n                        _react2.default.createElement('div', null),\n                        _react2.default.createElement('div', null),\n                        _react2.default.createElement('div', null),\n                        _react2.default.createElement('div', null),\n                        _react2.default.createElement('div', null),\n                        _react2.default.createElement('div', null),\n                        _react2.default.createElement('div', null),\n                        _react2.default.createElement('div', null)\n                    )\n                ),\n                _react2.default.createElement(\n                    'div',\n                    { className: this.props.status ? \"blurred\" : \"\" },\n                    this.props.children\n                )\n            );\n        }\n    }]);\n\n    return LoadingOverlay;\n}(_react2.default.Component);\n\nexports.default = LoadingOverlay;\n\n\nLoadingOverlay.propTypes = {\n    status: _propTypes2.default.bool.isRequired\n};\n\n//# sourceURL=webpack:///./Content/js/common/loading-overlay.jsx?");

/***/ }),

/***/ "./Content/js/common/toastr/myToastr.jsx":
/*!***********************************************!*\
  !*** ./Content/js/common/toastr/myToastr.jsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\nvar _reactReduxToastr = __webpack_require__(/*! react-redux-toastr */ \"./node_modules/react-redux-toastr/lib/index.js\");\n\nvar _reactReduxToastr2 = _interopRequireDefault(_reactReduxToastr);\n\nvar _redux = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n\n__webpack_require__(/*! style-loader!css-loader!react-redux-toastr/lib/css/react-redux-toastr.min.css */ \"./node_modules/style-loader/dist/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/react-redux-toastr/lib/css/react-redux-toastr.min.css\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar reducers = {\n    // ... other reducers ...\n    toastr: _reactReduxToastr.reducer // <- Mounted at toastr.\n};\nvar reducer = (0, _redux.combineReducers)(reducers);\nvar store = (0, _redux.createStore)(reducer);\n\nvar options = {\n    timeOut: 8000,\n    removeOnHover: false,\n    closeOnToastrClick: true,\n    showCloseButton: true,\n    progressBar: false\n};\n\nvar MyToastr = function (_React$Component) {\n    _inherits(MyToastr, _React$Component);\n\n    _createClass(MyToastr, null, [{\n        key: 'error',\n        value: function error(msg) {\n            var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : options.timeOut;\n\n            _reactReduxToastr.toastr.error(msg, {\n                timeOut: timeout,\n                removeOnHover: options.removeOnHover,\n                closeOnToastrClick: options.closeOnToastrClick,\n                showCloseButton: options.showCloseButton,\n                progressBar: options.progressBar\n            });\n        }\n    }, {\n        key: 'success',\n        value: function success(msg) {\n            var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : options.timeOut / 2;\n\n            _reactReduxToastr.toastr.success(msg, {\n                timeOut: timeout,\n                removeOnHover: options.removeOnHover,\n                closeOnToastrClick: options.closeOnToastrClick,\n                showCloseButton: options.showCloseButton,\n                progressBar: options.progressBar\n            });\n        }\n    }, {\n        key: 'warning',\n        value: function warning(msg) {\n            var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : options.timeOut;\n\n            _reactReduxToastr.toastr.warning(msg, {\n                timeOut: timeout,\n                removeOnHover: options.removeOnHover,\n                closeOnToastrClick: options.closeOnToastrClick,\n                showCloseButton: options.showCloseButton,\n                progressBar: options.progressBar\n            });\n        }\n    }, {\n        key: 'info',\n        value: function info(msg) {\n            var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : options.timeOut / 2;\n\n            _reactReduxToastr.toastr.info(msg, {\n                timeOut: timeout,\n                removeOnHover: options.removeOnHover,\n                closeOnToastrClick: options.closeOnToastrClick,\n                showCloseButton: options.showCloseButton,\n                progressBar: options.progressBar\n            });\n        }\n    }, {\n        key: 'responseError',\n        value: function responseError(response) {\n            var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : options.timeOut;\n\n            var errorMessage = '';\n\n            if (response.responseText) {\n                errorMessage = JSON.parse(response.responseText).message || JSON.parse(response.responseText).MessageDetail || JSON.parse(response.responseText).Message || response.responseText;\n            } else errorMessage = response.status + ' ' + response.statusText;\n\n            MyToastr.error(errorMessage, timeout);\n        }\n    }]);\n\n    function MyToastr(props) {\n        _classCallCheck(this, MyToastr);\n\n        return _possibleConstructorReturn(this, (MyToastr.__proto__ || Object.getPrototypeOf(MyToastr)).call(this, props));\n    }\n\n    _createClass(MyToastr, [{\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                _reactRedux.Provider,\n                { store: store },\n                _react2.default.createElement(\n                    'div',\n                    null,\n                    _react2.default.createElement(_reactReduxToastr2.default, { newestOnTop: false, preventDuplicates: true, position: 'bottom-center', transitionIn: 'bounceIn', transitionOut: 'bounceOut' })\n                )\n            );\n        }\n    }]);\n\n    return MyToastr;\n}(_react2.default.Component);\n\nexports.default = MyToastr;\n\n//# sourceURL=webpack:///./Content/js/common/toastr/myToastr.jsx?");

/***/ }),

/***/ "./Content/js/main/index.jsx":
/*!***********************************!*\
  !*** ./Content/js/main/index.jsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _loadingOverlay = __webpack_require__(/*! ../common/loading-overlay.jsx */ \"./Content/js/common/loading-overlay.jsx\");\n\nvar _loadingOverlay2 = _interopRequireDefault(_loadingOverlay);\n\nvar _myToastr = __webpack_require__(/*! ../common/toastr/myToastr.jsx */ \"./Content/js/common/toastr/myToastr.jsx\");\n\nvar _myToastr2 = _interopRequireDefault(_myToastr);\n\nvar _appService = __webpack_require__(/*! ../app/service/app-service.jsx */ \"./Content/js/app/service/app-service.jsx\");\n\nvar _appService2 = _interopRequireDefault(_appService);\n\nvar _appContext = __webpack_require__(/*! ../app/context/app-context.jsx */ \"./Content/js/app/context/app-context.jsx\");\n\nvar _appContext2 = _interopRequireDefault(_appContext);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Main = function (_React$Component) {\n    _inherits(Main, _React$Component);\n\n    function Main(props) {\n        _classCallCheck(this, Main);\n\n        var _this = _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this, props));\n\n        _this.state = {\n            loading: false,\n            resources: null\n        };\n\n        // 'this' bindings\n\n        return _this;\n    }\n\n    _createClass(Main, [{\n        key: 'componentDidMount',\n        value: function componentDidMount() {\n            this.load(true);\n        }\n    }, {\n        key: 'load',\n        value: function load() {\n            var _this2 = this;\n\n            var init = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n\n            if (init) {\n                this.setState({\n                    loading: true\n                }, function () {\n                    _appService2.default.getMainResources(_this2.props.api,\n                    //Success function\n                    function (resources) {\n                        return _this2.setState({ resources: resources, loading: false });\n                    },\n                    //Fails function\n                    function (error) {\n                        _this2.setState({ loading: false });\n                        _myToastr2.default.error(error);\n                    });\n                });\n            }\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var loading = this.state.loading;\n\n            var context = _extends({}, this.props, {\n                resources: this.state.resources\n            });\n\n            console.log(this.state.resources);\n\n            return _react2.default.createElement(\n                _loadingOverlay2.default,\n                { status: loading },\n                this.state.resources ? _react2.default.createElement(\n                    _react2.default.Fragment,\n                    null,\n                    _react2.default.createElement(_myToastr2.default, null),\n                    _react2.default.createElement(\n                        _appContext2.default.Provider,\n                        { value: context },\n                        _react2.default.createElement(\n                            'h1',\n                            null,\n                            this.state.resources.SayHello\n                        )\n                    )\n                ) : ''\n            );\n        }\n    }]);\n\n    return Main;\n}(_react2.default.Component);\n//Requeired props for Main component\n\n\nMain.propTypes = {\n    api: _propTypes2.default.string.isRequired\n};\n\n$(document).ready(function () {\n    var entryElement = document.getElementById('entry');\n    var sfBaseURL = $.ServicesFramework(entryElement.getAttribute('data-moduleid')).getServiceRoot('Margin/ChangeRequest');\n    _reactDom2.default.render(_react2.default.createElement(Main, { api: sfBaseURL }), entryElement);\n});\n\n//# sourceURL=webpack:///./Content/js/main/index.jsx?");

/***/ })

/******/ });