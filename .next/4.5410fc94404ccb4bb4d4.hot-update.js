webpackHotUpdate(4,{

/***/ "./components/Prices.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/robertfish/Documents/projects/bitprice/components/Prices.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var unescapeUnicode = __webpack_require__("./node_modules/unescape-unicode/src/unescape-unicode.js");

var Prices =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Prices, _React$Component);

  function Prices() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Prices);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Prices.__proto__ || Object.getPrototypeOf(Prices)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        currency: "USD"
      }
    }), _temp));
  }

  _createClass(Prices, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var list = "";

      if (this.state.currency === "USD") {
        list = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
          className: "list-group-item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          }
        }, "Bitcoin rate for ", this.props.bpi.USD.description, " :", " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
          className: "badge badge-primary",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          }
        }, this.props.bpi.USD.code), "this.unescapeUnicode('this.props.bpi.USD.symbol')", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("strong", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          }
        }, this.props.bpi.USD.rate));
      } else if (this.state.currency === "GBP") {
        list = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
          className: "list-group-item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          }
        }, "Bitcoin rate for ", this.props.bpi.GBP.description, " :", " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
          className: "badge badge-primary",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          }
        }, this.props.bpi.GBP.code), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("strong", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          }
        }, this.props.bpi.GBP.rate));
      } else if (this.state.currency === "EUR") {
        list = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
          className: "list-group-item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          }
        }, "Bitcoin rate for ", this.props.bpi.EUR.description, " :", " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
          className: "badge badge-primary",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          }
        }, this.props.bpi.EUR.code), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("strong", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          }
        }, this.props.bpi.EUR.rate));
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        className: "list-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, list), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("select", {
        onChange: function onChange(e) {
          return _this2.setState({
            currency: e.target.value
          });
        },
        className: "form-control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
        value: "USD",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, "USD"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
        value: "EUR",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, "EUR"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
        value: "GBP",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, "GBP")));
    }
  }]);

  return Prices;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Prices);

/***/ })

})
//# sourceMappingURL=4.5410fc94404ccb4bb4d4.hot-update.js.map