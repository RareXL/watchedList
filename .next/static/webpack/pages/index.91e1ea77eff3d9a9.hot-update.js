"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_class_call_check.mjs */ \"./node_modules/@swc/helpers/src/_class_call_check.mjs\");\n/* harmony import */ var _swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_create_class.mjs */ \"./node_modules/@swc/helpers/src/_create_class.mjs\");\n/* harmony import */ var _swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_inherits.mjs */ \"./node_modules/@swc/helpers/src/_inherits.mjs\");\n/* harmony import */ var _swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_create_super.mjs */ \"./node_modules/@swc/helpers/src/_create_super.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-fetch */ \"./node_modules/isomorphic-fetch/fetch-npm-browserify.js\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/server */ \"./node_modules/next/server.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_server__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n\n\n //investigate why needed\n\n\nvar Index = /*#__PURE__*/ function(_Component) {\n    \"use strict\";\n    (0,_swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Index, _Component);\n    var _super = (0,_swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Index);\n    function Index() {\n        (0,_swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, Index);\n        return _super.apply(this, arguments);\n    }\n    (0,_swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Index, [\n        {\n            key: \"render\",\n            value: function render() {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"Movie Watched List\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Xolani\\\\Repos\\\\practice\\\\WatchedList\\\\src\\\\pages\\\\index.js\",\n                    lineNumber: 27,\n                    columnNumber: 13\n                }, this);\n            }\n        }\n    ], [\n        {\n            key: \"getInitialProps\",\n            value: function getInitialProps() {\n                return (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(function() {\n                    var movies, moviesResponse, err;\n                    return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(this, function(_state) {\n                        switch(_state.label){\n                            case 0:\n                                _state.trys.push([\n                                    0,\n                                    3,\n                                    ,\n                                    4\n                                ]);\n                                return [\n                                    4,\n                                    isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default()(\"https://api.themoviedb.org/3/movie/550?api_key=71077aaf11ca21de0ed10709de3c5ca4\")\n                                ];\n                            case 1:\n                                moviesResponse = _state.sent();\n                                return [\n                                    4,\n                                    moviesResponse.json()\n                                ];\n                            case 2:\n                                movies = _state.sent();\n                                console.log(movies);\n                                return [\n                                    3,\n                                    4\n                                ];\n                            case 3:\n                                err = _state.sent();\n                                console.log(err);\n                                movies = [];\n                                return [\n                                    3,\n                                    4\n                                ];\n                            case 4:\n                                return [\n                                    2,\n                                    movies\n                                ];\n                        }\n                    });\n                })();\n            }\n        }\n    ]);\n    return Index;\n}((react__WEBPACK_IMPORTED_MODULE_1___default().Component));\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7QUFBeUIsQ0FBRSx3QkFBd0I7QUFDZjtBQUNTO0FBRTdDLFNBQVcsaUJBMkJWOzs4RUEzQktHLEtBQUs7K0ZBQUxBLEtBQUs7YUFBTEEsS0FBSztnR0FBTEEsS0FBSzs7O2tGQUFMQSxLQUFLOztZQW9CUEMsR0FBTSxFQUFOQSxRQUFNO21CQUFOQSxTQUFBQSxNQUFNLEdBQUU7Z0JBQ0oscUJBQ0ksOERBQUNDLEtBQUc7OEJBQUMsb0JBQWtCOzs7Ozt3QkFBTSxDQUNoQztZQUNMLENBQUM7Ozs7WUF0QllDLEdBQWUsRUFBZkEsaUJBQWU7bUJBQTVCLFNBQWFBLGVBQWU7dUJBQTVCLCtGQUErQjt3QkFDdkJDLE1BQU0sRUFFQUMsY0FBYyxFQUlsQkMsR0FBRzs7Ozs7Ozs7OztnQ0FKa0I7O29DQUFNUix1REFBSyxDQUFDLGlGQUFpRixDQUFDO2tDQUFBOztnQ0FBL0dPLGNBQWMsR0FBRyxhQUE4RjtnQ0FDNUc7O29DQUFNQSxjQUFjLENBQUNFLElBQUksRUFBRTtrQ0FBQTs7Z0NBQXBDSCxNQUFNLEdBQUcsYUFBMkI7Z0NBQ3BDSSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0wsTUFBTSxDQUFDOzs7Ozs7Z0NBRWpCRSxHQUFHO2dDQUNMRSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsR0FBRyxDQUFDO2dDQUNoQkYsTUFBTSxHQUFHLEVBQUU7Ozs7OztnQ0FHZjs7b0NBQU9BLE1BQU07a0NBQUE7OztnQkFFakIsQ0FBQzthQUFBOzs7V0FoQkNKLEtBQUs7Q0F5QlYsQ0F6Qm1CSCx3REFBZSxDQXlCbEM7QUFFRCwrREFBZUcsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC5qcz80MDgwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCcgIC8vaW52ZXN0aWdhdGUgd2h5IG5lZWRlZFxyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCdcclxuaW1wb3J0IHsgTmV4dEZldGNoRXZlbnQgfSBmcm9tICduZXh0L3NlcnZlcic7XHJcblxyXG5jbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcclxuICAgICAgICBsZXQgbW92aWVzO1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgY29uc3QgbW92aWVzUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvbW92aWUvNTUwP2FwaV9rZXk9NzEwNzdhYWYxMWNhMjFkZTBlZDEwNzA5ZGUzYzVjYTRcIilcclxuICAgICAgICAgICAgbW92aWVzID0gYXdhaXQgbW92aWVzUmVzcG9uc2UuanNvbigpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG1vdmllcylcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2goZXJyKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgICAgICBtb3ZpZXMgPSBbXVxyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgIHJldHVybiBtb3ZpZXNcclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2Pk1vdmllIFdhdGNoZWQgTGlzdDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il0sIm5hbWVzIjpbIlJlYWN0IiwiZmV0Y2giLCJOZXh0RmV0Y2hFdmVudCIsIkluZGV4IiwicmVuZGVyIiwiZGl2IiwiZ2V0SW5pdGlhbFByb3BzIiwibW92aWVzIiwibW92aWVzUmVzcG9uc2UiLCJlcnIiLCJqc29uIiwiY29uc29sZSIsImxvZyIsIkNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});