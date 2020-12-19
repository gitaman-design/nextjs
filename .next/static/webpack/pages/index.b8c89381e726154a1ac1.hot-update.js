webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/aman/Desktop/NextJs-Theme/nextjs-blog/pages/index.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar homepage = function homepage(_ref) {\n  var posts = _ref.posts;\n  return __jsx(\"div\", {\n    className: \"py-16 bg-gray-100\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 5\n    }\n  }, posts.map(function (post) {\n    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      key: post.id,\n      as: \"/post/\".concat(post.slug),\n      href: \"/post/[slug]\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 11\n      }\n    }, __jsx(\"a\", {\n      className: \"max-w-lg shadow-lg mb-16 rounded-lg mx-auto flex\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 13\n      }\n    }, __jsx(\"div\", {\n      className: \"h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden\",\n      style: {\n        backgroundImage: \"url(\".concat(post.coverImage.url, \")\")\n      },\n      title: post.title,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 15\n      }\n    }), __jsx(\"div\", {\n      className: \"bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 15\n      }\n    }, __jsx(\"div\", {\n      className: \"mb-8\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 17\n      }\n    }, __jsx(\"div\", {\n      className: \"text-gray-900 font-bold text-xl mb-2\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 19\n      }\n    }, post.title), __jsx(\"p\", {\n      className: \"text-gray-700 text-base\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 19\n      }\n    }, post.excerpt)), __jsx(\"div\", {\n      className: \"flex items-center\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 17\n      }\n    }, __jsx(\"div\", {\n      className: \"text-sm\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 19\n      }\n    }, __jsx(\"p\", {\n      className: \"text-gray-900 leading-none\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 21\n      }\n    }, post.author.name), __jsx(\"p\", {\n      className: \"text-gray-600\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 21\n      }\n    }, post.date))))));\n  }));\n};\n\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (homepage);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJob21lcGFnZSIsInBvc3RzIiwibWFwIiwicG9zdCIsImlkIiwic2x1ZyIsImJhY2tncm91bmRJbWFnZSIsImNvdmVySW1hZ2UiLCJ1cmwiLCJ0aXRsZSIsImV4Y2VycHQiLCJhdXRob3IiLCJuYW1lIiwiZGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQTs7QUFrQ0EsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBZTtBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTtBQUM5QixTQUNFO0FBQUssYUFBUyxFQUFDLG1CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0EsS0FBSyxDQUFDQyxHQUFOLENBQVUsVUFBQ0MsSUFBRCxFQUFVO0FBQ25CLFdBQ0UsTUFBQyxnREFBRDtBQUFNLFNBQUcsRUFBRUEsSUFBSSxDQUFDQyxFQUFoQjtBQUFvQixRQUFFLGtCQUFXRCxJQUFJLENBQUNFLElBQWhCLENBQXRCO0FBQThDLFVBQUksRUFBQyxjQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBRyxlQUFTLEVBQUMsa0RBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQ0UsZUFBUyxFQUFDLGdIQURaO0FBRUUsV0FBSyxFQUFFO0FBQUVDLHVCQUFlLGdCQUFTSCxJQUFJLENBQUNJLFVBQUwsQ0FBZ0JDLEdBQXpCO0FBQWpCLE9BRlQ7QUFHRSxXQUFLLEVBQUVMLElBQUksQ0FBQ00sS0FIZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsRUFNRTtBQUFLLGVBQVMsRUFBQyxvR0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxlQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxlQUFTLEVBQUMsc0NBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHTixJQUFJLENBQUNNLEtBRFIsQ0FERixFQUlFO0FBQUcsZUFBUyxFQUFDLHlCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBd0NOLElBQUksQ0FBQ08sT0FBN0MsQ0FKRixDQURGLEVBT0U7QUFBSyxlQUFTLEVBQUMsbUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssZUFBUyxFQUFDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUcsZUFBUyxFQUFDLDRCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR1AsSUFBSSxDQUFDUSxNQUFMLENBQVlDLElBRGYsQ0FERixFQUlFO0FBQUcsZUFBUyxFQUFDLGVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUE4QlQsSUFBSSxDQUFDVSxJQUFuQyxDQUpGLENBREYsQ0FQRixDQU5GLENBREYsQ0FERjtBQTJCRCxHQTVCQSxDQURILENBREY7QUFpQ0QsQ0FsQ0Q7OztBQW9DZWIsdUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdyYXBoUUxDbGllbnQgfSBmcm9tIFwiZ3JhcGhxbC1yZXF1ZXN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmNvbnN0IGdyYXBoY21zID0gbmV3IEdyYXBoUUxDbGllbnQocHJvY2Vzcy5lbnYuR1JBUEhRTF9VUkxfRU5EUE9JTlQpO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IHsgcG9zdHMgfSA9IGF3YWl0IGdyYXBoY21zLnJlcXVlc3QoXG4gICAgYFxuICAgIHF1ZXJ5IFBvc3RzKCkge1xuICAgICAgcG9zdHMge1xuICAgICAgICBpZFxuICAgICAgICB0aXRsZVxuICAgICAgICBleGNlcnB0XG4gICAgICAgIHNsdWdcbiAgICAgICAgY292ZXJJbWFnZSB7XG4gICAgICAgICAgaWRcbiAgICAgICAgICB1cmxcbiAgICAgICAgfVxuICAgICAgICBhdXRob3Ige1xuICAgICAgICAgIGlkXG4gICAgICAgICAgbmFtZVxuICAgICAgICB9XG4gICAgICAgIGRhdGVcbiAgICAgIH1cbiAgICB9XG4gIGBcbiAgKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb3N0cyxcbiAgICB9LFxuICB9O1xufVxuXG5jb25zdCBob21lcGFnZSA9ICh7IHBvc3RzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTE2IGJnLWdyYXktMTAwXCI+XG4gICAgICB7cG9zdHMubWFwKChwb3N0KSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPExpbmsga2V5PXtwb3N0LmlkfSBhcz17YC9wb3N0LyR7cG9zdC5zbHVnfWB9IGhyZWY9XCIvcG9zdC9bc2x1Z11cIj5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm1heC13LWxnIHNoYWRvdy1sZyBtYi0xNiByb3VuZGVkLWxnIG14LWF1dG8gZmxleFwiPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC00OCBsZzpoLWF1dG8gbGc6dy00OCBmbGV4LW5vbmUgYmctY292ZXIgcm91bmRlZC10IGxnOnJvdW5kZWQtdC1ub25lIGxnOnJvdW5kZWQtbCB0ZXh0LWNlbnRlciBvdmVyZmxvdy1oaWRkZW5cIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybCgke3Bvc3QuY292ZXJJbWFnZS51cmx9KWAgfX1cbiAgICAgICAgICAgICAgICB0aXRsZT17cG9zdC50aXRsZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLWIgbGc6cm91bmRlZC1iLW5vbmUgbGc6cm91bmRlZC1yIHAtNCBmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiBsZWFkaW5nLW5vcm1hbFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItOFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktOTAwIGZvbnQtYm9sZCB0ZXh0LXhsIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgICAge3Bvc3QudGl0bGV9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS03MDAgdGV4dC1iYXNlXCI+e3Bvc3QuZXhjZXJwdH08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS05MDAgbGVhZGluZy1ub25lXCI+XG4gICAgICAgICAgICAgICAgICAgICAge3Bvc3QuYXV0aG9yLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMFwiPntwb3N0LmRhdGV9PC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaG9tZXBhZ2U7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})