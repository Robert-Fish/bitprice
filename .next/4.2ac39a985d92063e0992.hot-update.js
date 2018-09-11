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
            lineNumber: 13
          }
        }, "Bitcoin rate for ", this.props.bpi.USD.description, " :", " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
          className: "badge badge-primary",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          }
        }, this.props.bpi.USD.code), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("strong", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          }
        }, unescapeUnicode("".concat(this.props.bpi.symbol))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("strong", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          }
        }, this.props.bpi.USD.rate));
      } else if (this.state.currency === "GBP") {
        list = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
          className: "list-group-item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          }
        }, "Bitcoin rate for ", this.props.bpi.GBP.description, " :", " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
          className: "badge badge-primary",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          }
        }, this.props.bpi.GBP.code), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("strong", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          }
        }, this.props.bpi.GBP.rate));
      } else if (this.state.currency === "EUR") {
        list = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
          className: "list-group-item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          }
        }, "Bitcoin rate for ", this.props.bpi.EUR.description, " :", " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
          className: "badge badge-primary",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          }
        }, this.props.bpi.EUR.code), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("strong", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          }
        }, this.props.bpi.EUR.rate));
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        className: "list-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, list), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
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
          lineNumber: 41
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
        value: "USD",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, "USD"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
        value: "EUR",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, "EUR"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
        value: "GBP",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, "GBP")));
    }
  }]);

  return Prices;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Prices);

/***/ }),

/***/ "./node_modules/unescape-unicode/src/errors.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright (C) 2018 Alasdair Mercer, !ninja
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */



/**
 * Contains functions for generating error messages used throughout <code>unescape-unicode</code>.
 *
 * @type {Object.<string, Function>}
 */
const errors = {

  /**
   * Returns the error message to be used when insufficient characters were found within the input string to represent a
   * valid Unicode escape.
   *
   * @param {number} missing - the number of characters missing (negative)
   * @return {string} The error message.
   */
  insufficientCharacters(missing) {
    return `Insufficient characters found: ${missing}`;
  },

  /**
   * Returns the error message to be used when an unexpected character is found within the Unicode escape.
   *
   * @param {string} ch - the unexpected character that was found
   * @param {number} index - the index at which <code>ch</code> was found relative to the input string
   * @return {string} The error message.
   */
  unexpectedCharacter(ch, index) {
    return `Unexpected character "${ch}" found at ${index}`;
  }

};

module.exports = errors;


/***/ }),

/***/ "./node_modules/unescape-unicode/src/parse.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright (C) 2018 Alasdair Mercer, !ninja
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */



const errors = __webpack_require__("./node_modules/unescape-unicode/src/errors.js");

/**
 * A map of parsers for valid characters found within the hexadecimal segment of a Unicode escape.
 *
 * This map is used for hash lookup performance.
 *
 * @type {Object.<string, Function>}
 */
const parsers = {};

/**
 * Parses the specified hexadecimal character found within the input string at the given <code>index</code> and
 * recalclates the <code>unicode</code> code point (hexadecimal value) provided.
 *
 * An error will be thrown if <code>ch</code> is not valid within a Unicode escape.
 *
 * @param {string} ch - the character to be parsed to recalculate the <code>unicode</code> code point
 * @param {number} unicode - the current Unicode code point
 * @param {number} index - the index of <code>ch</code> within the input string
 * @return {number} The recalculated Unicode code point (hexadecimal value).
 * @throws {Error} If <code>ch</code> is not a valid hexadecimal character.
 */
function parse(ch, unicode, index) {
  const parser = parsers[ch];
  if (parser) {
    return parser(ch.charCodeAt(0), unicode);
  }

  throw new Error(errors.unexpectedCharacter(ch, index));
}

/**
 * Maps the specified <code>parser</code> function to each of the characters provided.
 *
 * @param {string} chars - a string containing the characters to be mapped to <code>parser</code>
 * @param {Function} parser - the parser function to calculate the Unicode value for each of the characters
 * @return {void}
 */
function register(chars, parser) {
  chars.split('').forEach((ch) => {
    parsers[ch] = parser;
  });
}

register('0123456789', (code, unicode) => (unicode << 4) + code - 0x30);
register('ABCDEF', (code, unicode) => (unicode << 4) + 10 + code - 0x41);
register('abcdef', (code, unicode) => (unicode << 4) + 10 + code - 0x61);

module.exports = parse;


/***/ }),

/***/ "./node_modules/unescape-unicode/src/unescape-unicode.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright (C) 2018 Alasdair Mercer, !ninja
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */



const errors = __webpack_require__("./node_modules/unescape-unicode/src/errors.js");
const parse = __webpack_require__("./node_modules/unescape-unicode/src/parse.js");

/**
 * Returns the offset to be added on top of the specified <code>start</code> index relative to <code>input</code>.
 *
 * The offset is calculated based on whether <code>input<code> begins with "\u".
 *
 * An error will be thrown if the initial character is a backslash but it is not followed by a lower case "u", as this
 * is not a valid Unicode escape.
 *
 * @param {string} input - the string containing the Unicode escape to which the offset is to be applied
 * @param {number} start - the index of the Unicode escape within <code>input</code> to which the offset is to be
 * applied (inclusive)
 * @return {number} The additional offset to be applied to <code>start</code>.
 * @throws {Error} If <code>input</code> doesn't contain a valid Unicode escape at <code>start</code>.
 */
function getOffset(input, start) {
  let ch = input[start];

  if (ch === '\\') {
    ch = input[start + 1];
    if (ch !== 'u') {
      throw new Error(errors.unexpectedCharacter(ch, start + 1));
    }

    return 2;
  }

  return 0;
}

/**
 * Converts the Unicode escape within <code>input</code>.
 *
 * The Unicode escape <i>must</i> be valid, although it can just contain hexadecimal segment. That is, it has to match
 * the following pattern:
 *
 * <pre>
 * (\\u)?[0-9A-Fa-f]{4}
 * </pre>
 *
 * An error will be thrown if no valid Unicode escape is found.
 *
 * Optionally, a <code>start</code> index can be provided to begin conversion at a specific location within
 * <code>input</code>. If <code>start</code> is not specified, <code>null</code>, or negative, the conversion will begin
 * at the start of <code>input</code>.
 *
 * @example
 * unescapeUnicode('\\u2665');
 * //=> "♥"
 * unescapeUnicode('2665');
 * //=> "♥"
 * unescapeUnicode('I \\u2665 Unicode!', 2);
 * //=> "♥"
 * @param {?string} input - the string containing the Unicode escape to be converted (may be <code>null</code>)
 * @param {number} [start=0] - the index of the Unicode escape to be converted within <code>input</code> (inclusive -
 * may be <code>null</code>)
 * @return {?string} The Unicode character converted from the escape within <code>input</code> or <code>null</code> if
 * <code>input</code> is <code>null</code>.
 * @throws {Error} If <code>input</code> doesn't contain a valid Unicode escape at <code>start</code>.
 */
function unescapeUnicode(input, start) {
  if (input == null) {
    return input;
  }
  if (start == null || start < 0) {
    start = 0;
  }

  start += getOffset(input, start);

  const end = Math.min(start, input.length) + 4;
  if (end > input.length) {
    throw new Error(errors.insufficientCharacters(input.length - end));
  }

  let unicode = 0;
  for (let i = start; i < end; i++) {
    unicode = parse(input[i], unicode, i);
  }

  return String.fromCharCode(unicode);
}

module.exports = unescapeUnicode;


/***/ })

})
//# sourceMappingURL=4.2ac39a985d92063e0992.hot-update.js.map