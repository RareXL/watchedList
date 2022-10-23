"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-fetch */ \"isomorphic-fetch\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/server */ \"next/server\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_server__WEBPACK_IMPORTED_MODULE_3__);\n\n //investigate why needed\n\n\nclass Index extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {\n    static async getInitialProps() {\n        let movies;\n        try {\n            const moviesResponse = await isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default()(\"https://api.themoviedb.org/4/discover/movie?api_key=71077aaf11ca21de0ed10709de3c5ca4&page=1&include_adult=false\");\n            movies = await moviesResponse.json();\n        } catch (err) {\n            console.log(err);\n            movies = [];\n        }\n        return movies;\n    }\n    render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Movie Watched List\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Xolani\\\\Repos\\\\practice\\\\WatchedList\\\\src\\\\pages\\\\index.js\",\n            lineNumber: 24,\n            columnNumber: 13\n        }, this);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFBeUIsQ0FBRSx3QkFBd0I7QUFDZjtBQUNTO0FBRTdDLE1BQU1HLEtBQUssU0FBU0gsd0RBQWU7aUJBRWxCSyxlQUFlLEdBQUc7UUFDM0IsSUFBSUMsTUFBTTtRQUNWLElBQUc7WUFDQyxNQUFNQyxjQUFjLEdBQUcsTUFBTU4sdURBQUssQ0FBQyxpSEFBaUgsQ0FBQztZQUNySkssTUFBTSxHQUFHLE1BQU1DLGNBQWMsQ0FBQ0MsSUFBSSxFQUFFO1FBQ3hDLEVBQ0EsT0FBTUMsR0FBRyxFQUFDO1lBQ05DLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixHQUFHLENBQUM7WUFDaEJILE1BQU0sR0FBRyxFQUFFO1FBQ2YsQ0FBQztRQUNELE9BQU9BLE1BQU07SUFDakI7SUFJQU0sTUFBTSxHQUFFO1FBQ0oscUJBQ0ksOERBQUNDLEtBQUc7c0JBQUMsb0JBQWtCOzs7OztnQkFBTSxDQUNoQztJQUNMO0NBQ0g7QUFFRCxpRUFBZVYsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2F0Y2hlZGxpc3QvLi9zcmMvcGFnZXMvaW5kZXguanM/NDA4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnICAvL2ludmVzdGlnYXRlIHdoeSBuZWVkZWRcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtZmV0Y2gnXHJcbmltcG9ydCB7IE5leHRGZXRjaEV2ZW50IH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xyXG5cclxuY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XHJcbiAgICAgICAgbGV0IG1vdmllcztcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGNvbnN0IG1vdmllc1Jlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy80L2Rpc2NvdmVyL21vdmllP2FwaV9rZXk9NzEwNzdhYWYxMWNhMjFkZTBlZDEwNzA5ZGUzYzVjYTQmcGFnZT0xJmluY2x1ZGVfYWR1bHQ9ZmFsc2VcIilcclxuICAgICAgICAgICAgbW92aWVzID0gYXdhaXQgbW92aWVzUmVzcG9uc2UuanNvbigpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoKGVycil7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICAgICAgbW92aWVzID0gW11cclxuICAgICAgICB9IFxyXG4gICAgICAgIHJldHVybiBtb3ZpZXNcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+TW92aWUgV2F0Y2hlZCBMaXN0PC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXSwibmFtZXMiOlsiUmVhY3QiLCJmZXRjaCIsIk5leHRGZXRjaEV2ZW50IiwiSW5kZXgiLCJDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJtb3ZpZXMiLCJtb3ZpZXNSZXNwb25zZSIsImpzb24iLCJlcnIiLCJjb25zb2xlIiwibG9nIiwicmVuZGVyIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "next/server":
/*!******************************!*\
  !*** external "next/server" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/server");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.js"));
module.exports = __webpack_exports__;

})();