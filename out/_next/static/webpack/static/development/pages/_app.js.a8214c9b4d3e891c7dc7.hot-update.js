webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./store/reducers/popup.js":
/*!*********************************!*\
  !*** ./store/reducers/popup.js ***!
  \*********************************/
/*! exports provided: popup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popup", function() { return popup; });
function popup() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    status: false
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "POPUP_OPEN":
      return action.modalParams;

    case "POPUP_CLOSE":
      return {
        status: false
      };

    default:
      return state;
  }
}

/***/ })

})
//# sourceMappingURL=_app.js.a8214c9b4d3e891c7dc7.hot-update.js.map