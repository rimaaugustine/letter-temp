webpackHotUpdate(4,{

/***/ "./components/questions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_TextField__ = __webpack_require__("./node_modules/@material-ui/core/TextField/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_TextField___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_TextField__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Button__ = __webpack_require__("./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_DialogTitle__ = __webpack_require__("./node_modules/@material-ui/core/DialogTitle/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_DialogTitle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_DialogTitle__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_Dialog__ = __webpack_require__("./node_modules/@material-ui/core/Dialog/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_Dialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_Dialog__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__letter__ = __webpack_require__("./components/letter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_withMobileDialog__ = __webpack_require__("./node_modules/@material-ui/core/withMobileDialog/index.js");
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
        css: ".center.jsx-4129144645{text-align:center;color:#EDE7F6;font-family:'Roboto';}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcXVlc3Rpb25zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtEZ0IsQUFHMEMsa0JBQ0osY0FFbEIscUJBQUMiLCJmaWxlIjoiY29tcG9uZW50cy9xdWVzdGlvbnMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3JpbWEvbGV0dGVyIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgRGlhbG9nVGl0bGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGUnO1xuaW1wb3J0IERpYWxvZyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2cnO1xuaW1wb3J0IExldHRlciBmcm9tICcuL2xldHRlcidcbmltcG9ydCB3aXRoTW9iaWxlRGlhbG9nIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3dpdGhNb2JpbGVEaWFsb2cnO1xuXG5jbGFzcyBRdWVzdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjaGVja0Fuc3dlcjogZmFsc2UsXG4gICAgICAgICAgICBhbnN3ZXI6IFwiXCIsXG4gICAgICAgICAgICB0cnVlQW5zd2VyOiBcImNob3ctY2hvd1wiLFxuICAgICAgICAgICAgb3BlbjogZmFsc2VcbiAgICAgICAgfVxuICAgIH1cbiAgICBoYW5kbGVDaGFuZ2UgPSBhbnN3ZXIgPT4gZXZlbnQgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBbYW5zd2VyXTogZXZlbnQudGFyZ2V0LnZhbHVlLFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5hbnN3ZXIpXG4gICAgICB9O1xuXG4gICAgICBoYW5kbGVTdWJtaXQgPSBldmVudCA9PiB7XG4gICAgICAgaWYgKHRoaXMuc3RhdGUuYW5zd2VyID09PSBcImNob3ctY2hvd1wiKXtcbiAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICBjaGVja0Fuc3dlcjogdHJ1ZVxuICAgICAgICAgICB9KVxuICAgICAgIH1lbHNle1xuICAgICAgICAvLyBhbGVydCgnV3JvbmchIFBsZWFzZSB0cnkgYWdhaW4nKVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG9wZW46IHRydWVcbiAgICAgICAgfSlcbiAgICAgICB9XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGhhbmRsZUNsb3NlID0gdmFsdWUgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgIG9wZW46IGZhbHNlIH0pO1xuICAgICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+IHt0aGlzLnN0YXRlLmNoZWNrQW5zd2VyID8gPGRpdj48TGV0dGVyLz48L2Rpdj4gOiBcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgLmNlbnRlcntcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6I0VERTdGNjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OidSb2JvdG8nXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgICAgICAgICA8aDE+UXVlc3Rpb248L2gxPlxuICAgICAgICAgICAgICAgICAgICA8aDM+V2hhdCBpcyBoZXIgZmF2b3JpdGUgYW5pbWFsPzwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJhbnN3ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmFuc3dlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlKCdhbnN3ZXInKX1cbiAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgICAgICAgLz4gPGJyLz5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgIGNvbG9yPVwicHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFOU1dFUlxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgPERpYWxvZyBvbkNsb3NlPXt0aGlzLmhhbmRsZUNsb3NlfSBhcmlhLWxhYmVsbGVkYnk9XCJzaW1wbGUtZGlhbG9nLXRpdGxlXCIgIG9wZW49e3RoaXMuc3RhdGUub3Blbn0gPlxuICAgICAgICA8RGlhbG9nVGl0bGUgPldyb25nISBQbGVhc2UgdHJ5IGFnYWluPC9EaWFsb2dUaXRsZT5cbiAgICAgICBcbiAgICAgIDwvRGlhbG9nPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoTW9iaWxlRGlhbG9nKCkoUXVlc3Rpb24pOyJdfQ== */\n/*@ sourceURL=components/questions.js */"
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
      }, "ANSWER"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_Dialog___default.a, {
        onClose: this.handleClose,
        "aria-labelledby": "simple-dialog-title",
        open: this.state.open,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_DialogTitle___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, "Wrong! Please try again")));
    }
  }]);

  return Question;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_7__material_ui_core_withMobileDialog___default()()(Question));

/***/ })

})
//# sourceMappingURL=4.9c60625d9f7357e75539.hot-update.js.map