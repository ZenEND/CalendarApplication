webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_global_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/global.sass */ "./styles/global.sass");
/* harmony import */ var _styles_global_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_global_sass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/calendar */ "./components/calendar/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/actions/event */ "./store/actions/event.js");
/* harmony import */ var _components_popup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/popup */ "./components/popup/index.js");
/* harmony import */ var _store_actions_popup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/actions/popup */ "./store/actions/popup.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/home/user/Projects/calendar/my-app/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









function Home(_ref) {
  var events = _ref.events,
      eventChange = _ref.eventChange,
      eventRemove = _ref.eventRemove,
      popup = _ref.popup,
      popupOpen = _ref.popupOpen;

  var eventClick = function eventClick(info) {
    var modalParams = {
      status: true,
      title: info.event.title,
      start: info.event.start.toISOString(),
      end: info.event.end.toISOString(),
      id: info.event.id,
      x: info.jsEvent.x,
      y: info.jsEvent.y
    };
    console.log(info.event.start.toISOString());
    console.log(info);
    popupOpen(modalParams);
    info.event.remove();
  };

  var eventDrop = function eventDrop(info) {
    console.log(info);
    eventChange(info.event);
  };

  var select = function select(info) {
    var modalParams = {
      status: true,
      start: info.start.toISOString(),
      end: info.end.toISOString(),
      x: info.jsEvent.x,
      y: info.jsEvent.y
    };
    console.log(info);
    popupOpen(modalParams);
  };

  react_modal__WEBPACK_IMPORTED_MODULE_7___default.a.setAppElement('#__next');
  var list = [{
    icon: "home",
    title: "Home"
  }, {
    icon: "equalizer",
    title: "Dashboard"
  }, {
    icon: "mail_outline",
    title: "Inbox"
  }, {
    icon: "notes",
    title: "Products"
  }, {
    icon: "dashboard",
    title: "Invoices"
  }, {
    icon: "person_outline",
    title: "Customers"
  }, {
    icon: "forum",
    title: "Chat Room"
  }, {
    icon: "today",
    title: "Calendar"
  }, {
    icon: "device_unknown",
    title: "Help Center"
  }, {
    icon: "settings_applications",
    title: "Settings"
  }];
  var myRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
  return __jsx("div", {
    className: "main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, __jsx("div", {
    className: "sidebar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, __jsx("div", {
    className: "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "IMPEKABLE"), __jsx("div", {
    className: "list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, list.map(function (item, i) {
    return __jsx("button", {
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, __jsx("i", {
      className: "material-icons",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, item.icon), item.title);
  }))), __jsx("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, __jsx("div", {
    className: "top-bar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, __jsx("input", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }), __jsx("i", {
    className: "material-icons search",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, "search")), __jsx("img", {
    src: "/static/Avatar.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  })), __jsx("div", {
    className: "current-window",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, "Calendar"), __jsx("div", {
    className: "calendar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, __jsx(_components_calendar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    events: events,
    eventClick: eventClick,
    select: select,
    myRef: myRef,
    eventDrop: eventDrop,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }))), __jsx(react_modal__WEBPACK_IMPORTED_MODULE_7___default.a, {
    isOpen: popup.status,
    style: {
      background: "white"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, __jsx(_components_popup__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  })));
}

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    eventAdd: function eventAdd(event) {
      return dispatch(Object(_store_actions_event__WEBPACK_IMPORTED_MODULE_4__["eventAdd"])(event));
    },
    eventRemove: function eventRemove(event) {
      return dispatch(Object(_store_actions_event__WEBPACK_IMPORTED_MODULE_4__["eventRemove"])(event));
    },
    eventChange: function eventChange(event) {
      return dispatch(Object(_store_actions_event__WEBPACK_IMPORTED_MODULE_4__["eventChange"])(event));
    },
    popupOpen: function popupOpen(modalParams) {
      return dispatch(Object(_store_actions_popup__WEBPACK_IMPORTED_MODULE_6__["popupOpen"])(modalParams));
    },
    popupClose: function popupClose() {
      return dispatch(Object(_store_actions_popup__WEBPACK_IMPORTED_MODULE_6__["popupClose"])(false));
    }
  };
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    events: state.events,
    popup: state.popup
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(Home));

/***/ })

})
//# sourceMappingURL=index.js.60d27b186db4906190e0.hot-update.js.map