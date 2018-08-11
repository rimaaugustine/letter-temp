module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/letter.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/Users/rima/letter/components/letter.js";



var Letter = function Letter() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    className: "jsx-2912101082" + " " + "center"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "2912101082",
    css: ".center.jsx-2912101082{color:#EDE7F6;font-family:'Roboto';margin-top:50px;margin-right:-30px;margin-left:-30px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbGV0dGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtPLEFBRzZCLGNBQ08scUJBQ0osZ0JBQ0EsbUJBRXJCLGtCQUFDIiwiZmlsZSI6ImNvbXBvbmVudHMvbGV0dGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9yaW1hL2xldHRlciIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IExldHRlciA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlclwiPlxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgIHtcbiAgICAgICBgXG4gICAgICAgICAgIC5jZW50ZXJ7XG4gICAgICAgICAgICAgICBjb2xvcjojRURFN0Y2O1xuICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6J1JvYm90byc7XG4gICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgICAgICAgICAgIG1hcmdpbi1yaWdodDotMzBweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0Oi0zMHB4XG4gICAgICAgICAgIH0gICBcbiAgICAgICAgICBcbiAgICAgICBgXG4gICAgICAgfVxuICAgICAgIDwvc3R5bGU+XG4gICAgICAgIFxuICAgICAgICA8cCA+XG4gICAgICAgICAgICBEZWFyZXN0LFxuICAgICAgIFxuICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgIEkgcmVtZW1iZXIgdGhlIHNwZWNpYWwgZGF5IHdoZW4gSSB0dXJuZWQgdGhlIHF1YXJ0ZXIuIFdlIHdlcmUgYXQgdGhlIGZpbmVzdCBJbmRvbmVzaWFuIHJlc3RhdXJhbnQgdGhhdCBJIGNvdWxkIGZvdW5kIGluIEJlcmxpbi4gWW91IGF0ZSBTYXRlIGZvciB0aGUgZmlyc3QgdGltZSBhbmQgd2UgZGlzY3Vzc2VkIGFib3V0IHRoZSBpbnRlcmlvciBvZiB0aGUgcmVzdGF1cmFudC4gSXQgd2FzIHZlcnkgY2xlYXIgaW4gbXkgbWVtb3J5LCBob3cgdGhlIHdheSB5b3Ugc3RhcmVkIG1lLCBzbWlsZWQgdG8gbWUsIGFuZCBob2xkIG15IGhhbmQgaGFzIG5vdGhpbmcgY2hhbmdlZCB1bnRpbCBub3figKZcbiAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgQmFjayB0aGVuLCB3ZSBoYWQgYmVlbiB0b2dldGhlciBvbmx5IGZvciAzIHdlZWtzLCB2ZXJ5IGV4Y2l0ZWQsIGN1cmlvdXMsIGFuZCBsb3ZlbHkuIEhvd2V2ZXIsIHRoZXJlIHdhcyBzb21ldGhpbmcgSSByZWdyZXQgZnJvbSB0aGF0IHRpbWUsIEkgd2FzIG5vdCBhYmxlIHRvIGxpdmUgZnVsbHkgYXQgdGhlIG1vbWVudCB3aXRoIHlvdSwgdW5jZXJ0YWludHkgd2FzIGFsd2F5cyBsZXQgbWUgZG93biBzb21ldGltZXMuIEJ1dCBpdCB3YXMgeW91LCB5b3VyIHdhcm0taGVhcnRlZCwgdGhhdCBtYWRlIG1lIHdhbnQgdG8gc2F5IHRvIG15IHlvdW5nIG1lIOKAnEl0IGlzIGEgbGlmZSwgdGhlcmXigJlyZSBhbHdheXMgdXBzIGFuZCBkb3ducywgYW5kIHlvdSBhcmUgZ29ubmEgd29yayBvbiBpdCB0b2dldGhlciB3aXRoIGEgbWFuIGluIGZyb250IG9mIHlvdeKAnS4gR2xhZGx5IHdlIGhhdmUgbWFkZSB0aGlzIGZhciA6KVxuICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICBJIHJlYWxseSB0aGFua2VkIGZvciBldmVyeXRoaW5nIHlvdSBkaWQgdG8gbWUgYXQgdGhhdCB0aW1lLCB5b3VyIGxvdmVseSBnaWZ0IGFuZCB0aGUgdGltZSB0b2dldGhlci4gSXQgd2FzIHRoZSBiZXN0IGJpcnRoZGF5IGRpbm5lciBJIGV2ZXIgaGFkLiBGb2xsb3dlZCBieSBtYW55IGJpcnRoZGF5IGRpbm5lcnMgdG9nZXRoZXIgYWZ0ZXJ3YXJkcy4gSSBmZWVsIEkgYW0gYSBsdWNraWVzdCBnaXJsIGluIHRoZSB3b3JsZCBieSBoYXZpbmcgeW91LlxuICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICBCZXJsaW4sIDExdGggQXVndXN0IDIwNDNcbiAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgIFlvdXJzXG4gICAgICAgICAgICBcbjwvcD5cbjwvZGl2PlxuICAgIClcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBMZXR0ZXIiXX0= */\n/*@ sourceURL=components/letter.js */"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    className: "jsx-2912101082"
  }, "Dearest,", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    className: "jsx-2912101082"
  }), "I remember the special day when I turned the quarter. We were at the finest Indonesian restaurant that I could found in Berlin. You ate Sate for the first time and we discussed about the interior of the restaurant. It was very clear in my memory, how the way you stared me, smiled to me, and hold my hand has nothing changed until now\u2026", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    className: "jsx-2912101082"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    className: "jsx-2912101082"
  }), "Back then, we had been together only for 3 weeks, very excited, curious, and lovely. However, there was something I regret from that time, I was not able to live fully at the moment with you, uncertainty was always let me down sometimes. But it was you, your warm-hearted, that made me want to say to my young me \u201CIt is a life, there\u2019re always ups and downs, and you are gonna work on it together with a man in front of you\u201D. Gladly we have made this far :)", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    className: "jsx-2912101082"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    className: "jsx-2912101082"
  }), "I really thanked for everything you did to me at that time, your lovely gift and the time together. It was the best birthday dinner I ever had. Followed by many birthday dinners together afterwards. I feel I am a luckiest girl in the world by having you.", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    className: "jsx-2912101082"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    className: "jsx-2912101082"
  }), "Berlin, 11th August 2043", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    className: "jsx-2912101082"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    className: "jsx-2912101082"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    className: "jsx-2912101082"
  }), "Yours"));
};

/* harmony default export */ __webpack_exports__["a"] = (Letter);

/***/ }),

/***/ "./components/questions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_TextField__ = __webpack_require__("@material-ui/core/TextField");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_TextField___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_TextField__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Button__ = __webpack_require__("@material-ui/core/Button");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_DialogTitle__ = __webpack_require__("@material-ui/core/DialogTitle");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_DialogTitle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_DialogTitle__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_Dialog__ = __webpack_require__("@material-ui/core/Dialog");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_Dialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_Dialog__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__letter__ = __webpack_require__("./components/letter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_withMobileDialog__ = __webpack_require__("@material-ui/core/withMobileDialog");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_withMobileDialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_withMobileDialog__);
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
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, " ", this.state.checkAnswer ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__letter__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      })) : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        className: "jsx-4129144645" + " " + "center"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "4129144645",
        css: ".center.jsx-4129144645{text-align:center;color:#EDE7F6;font-family:'Roboto';}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcXVlc3Rpb25zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtEZ0IsQUFHMEMsa0JBQ0osY0FFbEIscUJBQUMiLCJmaWxlIjoiY29tcG9uZW50cy9xdWVzdGlvbnMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3JpbWEvbGV0dGVyIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgRGlhbG9nVGl0bGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGUnO1xuaW1wb3J0IERpYWxvZyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2cnO1xuaW1wb3J0IExldHRlciBmcm9tICcuL2xldHRlcidcbmltcG9ydCB3aXRoTW9iaWxlRGlhbG9nIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3dpdGhNb2JpbGVEaWFsb2cnO1xuXG5jbGFzcyBRdWVzdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjaGVja0Fuc3dlcjogZmFsc2UsXG4gICAgICAgICAgICBhbnN3ZXI6IFwiXCIsXG4gICAgICAgICAgICB0cnVlQW5zd2VyOiBcImNob3ctY2hvd1wiLFxuICAgICAgICAgICAgb3BlbjogZmFsc2VcbiAgICAgICAgfVxuICAgIH1cbiAgICBoYW5kbGVDaGFuZ2UgPSBhbnN3ZXIgPT4gZXZlbnQgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBbYW5zd2VyXTogZXZlbnQudGFyZ2V0LnZhbHVlLFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5hbnN3ZXIpXG4gICAgICB9O1xuXG4gICAgICBoYW5kbGVTdWJtaXQgPSBldmVudCA9PiB7XG4gICAgICAgaWYgKHRoaXMuc3RhdGUuYW5zd2VyID09PSBcImNob3ctY2hvd1wiKXtcbiAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICBjaGVja0Fuc3dlcjogdHJ1ZVxuICAgICAgICAgICB9KVxuICAgICAgIH1lbHNle1xuICAgICAgICAvLyBhbGVydCgnV3JvbmchIFBsZWFzZSB0cnkgYWdhaW4nKVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG9wZW46IHRydWVcbiAgICAgICAgfSlcbiAgICAgICB9XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGhhbmRsZUNsb3NlID0gdmFsdWUgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgIG9wZW46IGZhbHNlIH0pO1xuICAgICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+IHt0aGlzLnN0YXRlLmNoZWNrQW5zd2VyID8gPGRpdj48TGV0dGVyLz48L2Rpdj4gOiBcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgLmNlbnRlcntcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6I0VERTdGNjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OidSb2JvdG8nXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgICAgICAgICA8aDE+UXVlc3Rpb248L2gxPlxuICAgICAgICAgICAgICAgICAgICA8aDM+V2hhdCBpcyBoZXIgZmF2b3JpdGUgYW5pbWFsPzwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJhbnN3ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmFuc3dlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlKCdhbnN3ZXInKX1cbiAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgICAgICAgLz4gPGJyLz5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgIGNvbG9yPVwicHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFOU1dFUlxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgIDxEaWFsb2cgb25DbG9zZT17dGhpcy5oYW5kbGVDbG9zZX0gYXJpYS1sYWJlbGxlZGJ5PVwic2ltcGxlLWRpYWxvZy10aXRsZVwiICBvcGVuPXt0aGlzLnN0YXRlLm9wZW59ID5cbiAgICAgICAgPERpYWxvZ1RpdGxlPldyb25nITwvRGlhbG9nVGl0bGU+XG4gICAgICAgXG4gICAgICA8L0RpYWxvZz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH1cblxuICAgICAgIFxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoTW9iaWxlRGlhbG9nKCkoUXVlc3Rpb24pOyJdfQ== */\n/*@ sourceURL=components/questions.js */"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        className: "jsx-4129144645"
      }, "Question"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        className: "jsx-4129144645"
      }, "What is her favorite animal?"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("form", {
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        className: "jsx-4129144645"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_TextField___default.a, {
        id: "answer",
        label: "",
        value: this.state.answer,
        onChange: this.handleChange('answer'),
        className: "",
        margin: "normal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }), " ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        className: "jsx-4129144645"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Button___default.a, {
        variant: "contained",
        color: "primary",
        type: "submit",
        value: "Submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, "ANSWER")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_Dialog___default.a, {
        onClose: this.handleClose,
        "aria-labelledby": "simple-dialog-title",
        open: this.state.open,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_DialogTitle___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, "Wrong!"))));
    }
  }]);

  return Question;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_7__material_ui_core_withMobileDialog___default()()(Question));

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_questions__ = __webpack_require__("./components/questions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
var _jsxFileName = "/Users/rima/letter/pages/index.js";




var Index = function Index() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "A Letter"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Noto+Sans",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "stylesheet",
    href: "static/style.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_questions__["a" /* default */], {
    className: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "@material-ui/core/Button":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Dialog":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Dialog");

/***/ }),

/***/ "@material-ui/core/DialogTitle":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogTitle");

/***/ }),

/***/ "@material-ui/core/TextField":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "@material-ui/core/withMobileDialog":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/withMobileDialog");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map