webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./store/reducers/events.js":
/*!**********************************!*\
  !*** ./store/reducers/events.js ***!
  \**********************************/
/*! exports provided: events */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "events", function() { return events; });
var eventList = [{
  title: 'My Event',
  start: '2019-09-19T00:00:00.000Z',
  end: '2019-09-20T00:00:00.000Z',
  id: 1
}, {
  title: 'My Event',
  start: '2019-09-19T00:00:00.000Z',
  end: '2019-09-20T00:00:00.000Z',
  id: 2
}, {
  title: 'My Event',
  start: '2019-08-09',
  end: '2019-08-09',
  id: 3
}];
function events() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : eventList;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "ADD_EVENT":
      state.push(action.event);
      return state;

    case "REMOVE_EVENT":
      var index = -1;
      var found = state.find(function (item) {
        return index++, item.id == action.event;
      });
      if (found) state.splice(index, 1);
      return state;

    case "CHANGE_EVENT":
      var index = -1;
      var found = state.find(function (item) {
        return index++, item.id == action.event.id;
      });
      console.log(action);
      console.log(found);
      state[index] = {
        title: action.event.title,
        start: action.event.start,
        end: action.event.end
      };
      return state;

    default:
      return state;
  }
}

/***/ })

})
//# sourceMappingURL=_app.js.821620044ef2723c1811.hot-update.js.map