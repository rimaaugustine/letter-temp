webpackHotUpdate(4,{

/***/ "./components/letter.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/rima/letter/components/letter.js";


var Letter = function Letter() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    }
  }, "Dearest, I remember the special day when I turned the quarter. We were at the finest Indonesian restaurant that I could found in Berlin. You ate Sate for the first time and we discussed about the interior of the restaurant. It was very clear in my memory, how the way you stared me, smiled to me, and hold my hand has nothing changed until now\u2026 Back then, we had been together only for 3 weeks, very excited, curious, and lovely. However, there was something I regret from that time, I was not able to live fully at the moment with you, uncertainty was always let me down sometimes. But it was you, your warm-hearted, that made me want to say to my young me \u201CIt is a life, there\u2019re always ups and downs, and you are gonna work on it together with a man in front of you\u201D. Gladly we have made this far :) I really thanked for everything you did to me at that time, your lovely presents and the time together. It was the best birthday dinner I ever had. Followed by many birthday dinners together afterwards. I feel I am a luckiest girl in the world by having you. Berlin, 11th August 2043 Yours");
};

/* unused harmony default export */ var _unused_webpack_default_export = (Letter);

/***/ }),

/***/ "./components/questions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ui_core_TextField__ = __webpack_require__("./node_modules/@material-ui/core/TextField/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ui_core_TextField___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_TextField__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_Button__ = __webpack_require__("./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_DialogTitle__ = __webpack_require__("./node_modules/@material-ui/core/DialogTitle/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_DialogTitle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_DialogTitle__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_Dialog__ = __webpack_require__("./node_modules/@material-ui/core/Dialog/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_Dialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Dialog__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__letter__ = __webpack_require__("./components/letter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core_withMobileDialog__ = __webpack_require__("./node_modules/@material-ui/core/withMobileDialog/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core_withMobileDialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__material_ui_core_withMobileDialog__);
var _jsxFileName = "/Users/rima/letter/components/questions.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }









var Question =
/*#__PURE__*/
function (_Component) {
  _inherits(Question, _Component);

  function Question(props) {
    var _this;

    _classCallCheck(this, Question);

    _this = _possibleConstructorReturn(this, (Question.__proto__ || Object.getPrototypeOf(Question)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "handleChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(answer) {
        return function (event) {
          _this.setState(_defineProperty({}, answer, event.target.value));

          console.log(_this.state.answer);
        };
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handleSubmit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        if (_this.state.answer === "chow-chow") {
          _this.setState({
            checkAnswer: true
          });
        } else {
          // alert('Wrong! Please try again')
          _this.setState({
            open: true
          });
        }

        event.preventDefault();
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handleClose", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(_value) {
        _this.setState({
          open: false
        });
      }
    });
    _this.state = {
      checkAnswer: false,
      answer: "",
      trueAnswer: "chow-chow",
      open: false
    };
    return _this;
  }

  _createClass(Question, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Dialog___default.a, {
        onClose: this.handleClose,
        "aria-labelledby": "simple-dialog-title",
        open: this.state.open,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_DialogTitle___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, "Wrong!")));
    }
  }]);

  return Question;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_6__material_ui_core_withMobileDialog___default()()(Question));

/***/ }),

/***/ "./node_modules/@material-ui/core/Button/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _Button.default;
  }
});

var _Button = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/Button/Button.js"));

/***/ }),

/***/ "./node_modules/@material-ui/core/TextField/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _TextField.default;
  }
});

var _TextField = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/TextField/TextField.js"));

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/get-iterator.js":
false,

/***/ "./node_modules/babel-runtime/core-js/is-iterable.js":
false,

/***/ "./node_modules/babel-runtime/core-js/map.js":
false,

/***/ "./node_modules/babel-runtime/core-js/object/create.js":
false,

/***/ "./node_modules/babel-runtime/core-js/object/define-property.js":
false,

/***/ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js":
false,

/***/ "./node_modules/babel-runtime/core-js/object/keys.js":
false,

/***/ "./node_modules/babel-runtime/core-js/object/set-prototype-of.js":
false,

/***/ "./node_modules/babel-runtime/core-js/symbol.js":
false,

/***/ "./node_modules/babel-runtime/core-js/symbol/iterator.js":
false,

/***/ "./node_modules/babel-runtime/helpers/classCallCheck.js":
false,

/***/ "./node_modules/babel-runtime/helpers/createClass.js":
false,

/***/ "./node_modules/babel-runtime/helpers/inherits.js":
false,

/***/ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js":
false,

/***/ "./node_modules/babel-runtime/helpers/slicedToArray.js":
false,

/***/ "./node_modules/babel-runtime/helpers/typeof.js":
false,

/***/ "./node_modules/core-js/library/fn/map.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.map.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.map.from.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.map.of.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.map.to-json.js":
false,

/***/ "./node_modules/string-hash/index.js":
false,

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
false,

/***/ "./node_modules/styled-jsx/dist/style.js":
false,

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
false,

/***/ "./node_modules/styled-jsx/style.js":
false

})
//# sourceMappingURL=4.be0e45405115d496d5d7.hot-update.js.map