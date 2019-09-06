webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/popup/index.js":
/*!***********************************!*\
  !*** ./components/popup/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions_popup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/actions/popup */ "./store/actions/popup.js");
/* harmony import */ var _store_actions_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions/event */ "./store/actions/event.js");
/* harmony import */ var _popup_sass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./popup.sass */ "./components/popup/popup.sass");
/* harmony import */ var _popup_sass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_popup_sass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_reducers_popup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/reducers/popup */ "./store/reducers/popup.js");
var _jsxFileName = "/home/user/Projects/calendar/my-app/components/popup/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var Popup = function Popup(_ref) {
  var popup = _ref.popup,
      popupClose = _ref.popupClose,
      events = _ref.events,
      eventAdd = _ref.eventAdd;

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    var event = {
      title: title.current.value,
      start: start.current.value,
      end: end.current.value,
      id: events[events.length - 1].id + 1,
      notice: notice.current.value
    };
    eventAdd(event);
    popupClose();
    return false;
  };

  var title = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
  var start = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
  var end = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
  var notice = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();

  var handleChange = function handleChange(value) {
    return value;
  };

  return __jsx("div", {
    className: "popup",
    style: {
      top: popup.y ? popup.y + 40 : 0,
      left: popup.x ? popup.x - 150 : 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("form", {
    className: "form",
    onSubmit: function onSubmit(e) {
      return handleSubmit(e);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("input", {
    placeholder: "Title",
    autoComplete: "off",
    ref: title,
    defaultValue: popup.title,
    maxLength: "30",
    name: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  })), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("input", {
    placeholder: "DD/MM/YYYY",
    autoComplete: "off",
    ref: start,
    required: true,
    onChange: function onChange(e) {
      return e;
    },
    patern: "/[+-]?\\d{4}(-[01]\\d(-[0-3]\\d(T[0-2]\\d:[0-5]\\d:?([0-5]\\d(\\.\\d+)?)?[+-][0-2]\\d:[0-5]\\dZ?)?)?)?/",
    defaultValue: popup.start,
    name: "start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), __jsx("i", {
    className: "material-icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "date_range")), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("input", {
    placeholder: "event time",
    autoComplete: "off",
    ref: end,
    onFocus: function onFocus(value) {
      return handleChange(value);
    },
    defaultValue: popup.end,
    name: "end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), __jsx("i", {
    className: "material-icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "access_time")), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("input", {
    placeholder: "notice",
    autoComplete: "off",
    ref: notice,
    name: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  })), __jsx("div", {
    className: "form-actions",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("button", {
    type: "submit",
    className: "form-edit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "Edit"), __jsx("button", {
    className: "form-delete",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "Discard")), __jsx("button", {
    className: "form-close material-icons",
    onClick: function onClick() {
      return popupClose();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "clear")));
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    eventAdd: function eventAdd(event) {
      return dispatch(Object(_store_actions_event__WEBPACK_IMPORTED_MODULE_3__["eventAdd"])(event));
    },
    popupClose: function popupClose() {
      return dispatch(Object(_store_actions_popup__WEBPACK_IMPORTED_MODULE_2__["popupClose"])(false));
    }
  };
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    events: state.events,
    popup: state.popup
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Popup));

/***/ })

})
//# sourceMappingURL=index.js.1aee8734b3dc7907d901.hot-update.js.map