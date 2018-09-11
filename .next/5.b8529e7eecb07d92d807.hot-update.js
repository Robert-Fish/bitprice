webpackHotUpdate(5,{

/***/ "./node_modules/react-gif-player/dist/gifplayer.js":
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__("./node_modules/react/index.js"), __webpack_require__("./node_modules/prop-types/index.js"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "prop-types"], factory);
	else if(typeof exports === 'object')
		exports["GifPlayer"] = factory(require("react"), require("prop-types"));
	else
		root["GifPlayer"] = factory(root["React"], root["PropTypes"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(2);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _reactLifecyclesCompat = __webpack_require__(3);

	var _reactLifecyclesCompat2 = _interopRequireDefault(_reactLifecyclesCompat);

	var _GifPlayer = __webpack_require__(4);

	var _GifPlayer2 = _interopRequireDefault(_GifPlayer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var preload = function preload(src, callback) {
	  var img = new Image();
	  if (typeof callback === 'function') {
	    img.onload = function () {
	      return callback(img);
	    };
	    img.setAttribute('crossOrigin', 'anonymous');
	  }
	  img.src = src;
	};

	var firstGifFrameUrl = function firstGifFrameUrl(img) {
	  var canvas = document.createElement('canvas');
	  if (typeof canvas.getContext !== 'function') {
	    return null;
	  }
	  canvas.width = img.width;
	  canvas.height = img.height;
	  var ctx = canvas.getContext('2d');
	  ctx.drawImage(img, 0, 0);
	  return canvas.toDataURL();
	};

	var GifPlayerContainer = function (_React$Component) {
	  _inherits(GifPlayerContainer, _React$Component);

	  _createClass(GifPlayerContainer, null, [{
	    key: 'getDerivedStateFromProps',
	    value: function getDerivedStateFromProps(nextProps, prevState) {
	      var prevGif = prevState.providedGif;
	      var nextGif = nextProps.gif;
	      var prevStill = prevState.providedStill;
	      var nextStill = nextProps.still;
	      if (prevGif === nextGif && prevStill === nextStill) {
	        return null;
	      }

	      return {
	        playing: nextGif && nextProps.autoplay && prevGif !== nextGif ? true : prevState.playing,
	        providedGif: nextGif,
	        providedStill: nextStill,
	        actualGif: nextGif,
	        actualStill: nextStill || prevGif !== nextGif ? nextStill : prevState.actualStill
	      };
	    }
	  }]);

	  function GifPlayerContainer(props) {
	    _classCallCheck(this, GifPlayerContainer);

	    var _this = _possibleConstructorReturn(this, (GifPlayerContainer.__proto__ || Object.getPrototypeOf(GifPlayerContainer)).call(this, props));

	    _this.state = {
	      playing: Boolean(props.autoplay),
	      providedGif: props.gif,
	      providedStill: props.still,
	      actualGif: props.gif,
	      actualStill: props.still
	    };
	    _this.updateId = -1;
	    return _this;
	  }

	  _createClass(GifPlayerContainer, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      if (typeof this.props.pauseRef === 'function') {
	        this.props.pauseRef(function () {
	          return _this2.setState({ playing: false });
	        });
	      }
	      this.updateImages();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps, prevState) {
	      this.updateImages(prevState);
	      var onTogglePlay = this.props.onTogglePlay;

	      if (prevState.playing !== this.state.playing && typeof onTogglePlay === 'function') {
	        onTogglePlay(this.state.playing);
	      }
	    }
	  }, {
	    key: 'updateImages',
	    value: function updateImages() {
	      var _this3 = this;

	      var prevState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	      var _state = this.state,
	          providedGif = _state.providedGif,
	          providedStill = _state.providedStill;

	      if (providedGif && !providedStill && providedGif !== prevState.providedGif) {
	        var updateId = ++this.updateId;
	        preload(providedGif, function (img) {
	          if (_this3.updateId === updateId) {
	            var actualStill = firstGifFrameUrl(img);
	            if (actualStill) {
	              _this3.setState({ actualStill: actualStill });
	            }
	          }
	        });
	      }
	    }
	  }, {
	    key: 'toggle',
	    value: function toggle() {
	      this.setState({
	        playing: !this.state.playing
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this4 = this;

	      // extract these props but pass down the rest
	      var _props = this.props,
	          autoplay = _props.autoplay,
	          pauseRef = _props.pauseRef,
	          onTogglePlay = _props.onTogglePlay,
	          rest = _objectWithoutProperties(_props, ['autoplay', 'pauseRef', 'onTogglePlay']);

	      var _state2 = this.state,
	          actualGif = _state2.actualGif,
	          actualStill = _state2.actualStill,
	          playing = _state2.playing;

	      return _react2.default.createElement(_GifPlayer2.default, _extends({}, rest, {
	        gif: actualGif,
	        still: actualStill,
	        playing: playing,
	        toggle: function toggle() {
	          return _this4.toggle();
	        }
	      }));
	    }
	  }]);

	  return GifPlayerContainer;
	}(_react2.default.Component);

	(0, _reactLifecyclesCompat2.default)(GifPlayerContainer);

	GifPlayerContainer.propTypes = {
	  gif: _propTypes2.default.string,
	  still: _propTypes2.default.string,
	  autoplay: _propTypes2.default.bool,
	  pauseRef: _propTypes2.default.func,
	  onTogglePlay: _propTypes2.default.func
	};

	module.exports = GifPlayerContainer;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	// Older versions of React do not support static getDerivedStateFromProps.
	// As a workaround, use cWM and cWRP to invoke the new static lifecycle.
	// Newer versions of React will ignore these methods if gDSFP exists.
	function componentWillMount() {
	  // Call this.constructor.gDSFP to support sub-classes.
	  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
	  if (state !== null && state !== undefined) {
	    this.setState(state);
	  }
	}

	function componentWillReceiveProps(nextProps) {
	  // Call this.constructor.gDSFP to support sub-classes.
	  var state = this.constructor.getDerivedStateFromProps(nextProps, this.state);
	  if (state !== null && state !== undefined) {
	    this.setState(state);
	  }
	}

	// React may warn about cWM/cWRP/cWU methods being deprecated.
	// Add a flag to suppress these warnings for this special case.
	componentWillMount.__suppressDeprecationWarning = true;
	componentWillReceiveProps.__suppressDeprecationWarning = true;

	module.exports = function polyfill(Component) {
	  if (!Component.prototype || !Component.prototype.isReactComponent) {
	    throw new Error('Can only polyfill class components');
	  }

	  if (typeof Component.getDerivedStateFromProps === 'function') {
	    if (typeof Component.prototype.componentWillMount === 'function') {
	      throw new Error('Cannot polyfill if componentWillMount already exists');
	    } else if (
	      typeof Component.prototype.componentWillReceiveProps === 'function'
	    ) {
	      throw new Error(
	        'Cannot polyfill if componentWillReceiveProps already exists'
	      );
	    }

	    Component.prototype.componentWillMount = componentWillMount;
	    Component.prototype.componentWillReceiveProps = componentWillReceiveProps;
	  }

	  return Component;
	};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(2);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _classnames = __webpack_require__(5);

	var _classnames2 = _interopRequireDefault(_classnames);

	__webpack_require__(6);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var GifPlayer = function GifPlayer(_ref) {
	  var gif = _ref.gif,
	      still = _ref.still,
	      playing = _ref.playing,
	      toggle = _ref.toggle,
	      rest = _objectWithoutProperties(_ref, ['gif', 'still', 'playing', 'toggle']);

	  return _react2.default.createElement(
	    'div',
	    {
	      className: (0, _classnames2.default)('gif_player', { 'playing': playing }),
	      onClick: toggle
	    },
	    _react2.default.createElement('div', { className: 'play_button' }),
	    _react2.default.createElement('img', _extends({}, rest, { src: playing ? gif || still : still || gif }))
	  );
	};

	GifPlayer.propTypes = {
	  gif: _propTypes2.default.string,
	  still: _propTypes2.default.string,
	  playing: _propTypes2.default.bool,
	  toggle: _propTypes2.default.func
	};

	module.exports = GifPlayer;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ }),
/* 6 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ })
/******/ ])
});
;

/***/ }),

/***/ "./pages/about.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__("./components/Layout.js");
var _jsxFileName = "/Users/robertfish/Documents/projects/bitprice/pages/about.js";



var GifPlayer = __webpack_require__("./node_modules/react-gif-player/dist/gifplayer.js");

var About = function About() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "About"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, "A simple application to check the price of Bitcoin.")));
};

/* harmony default export */ __webpack_exports__["default"] = (About);
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/about")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.b8529e7eecb07d92d807.hot-update.js.map