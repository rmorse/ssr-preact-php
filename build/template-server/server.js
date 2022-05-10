/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/template-server/prerender-middleware.js":
/*!*****************************************************!*\
  !*** ./src/template-server/prerender-middleware.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Setup prerender middleware\nvar prerenderMiddleware = (__webpack_require__(/*! prerender-node */ \"prerender-node\").set)('prerenderServiceUrl', 'http://localhost:3000/');\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prerenderMiddleware);\n\n//# sourceURL=webpack://preact-ssr-with-php/./src/template-server/prerender-middleware.js?");

/***/ }),

/***/ "./src/template-server/prerender-server.js":
/*!*************************************************!*\
  !*** ./src/template-server/prerender-server.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar prerender = __webpack_require__(/*! prerender */ \"prerender\");\n\nfunction prerenderServerInit(onConnectToBrowser) {\n  // Setup the pre render server\n  var prerenderServer = prerender();\n  var initListenerPlugin = {\n    init: function init() {\n      console.log(\"Init plugin: initListenerPlugin\");\n    },\n    connectedToBrowser: function connectedToBrowser(req, res, next) {\n      // Only connect init the server once we we have connected to the browser.\n      onConnectToBrowser();\n      next();\n    }\n  };\n  prerenderServer.use(initListenerPlugin);\n  prerenderServer.start();\n}\n\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prerenderServerInit);\n\n//# sourceURL=webpack://preact-ssr-with-php/./src/template-server/prerender-server.js?");

/***/ }),

/***/ "./src/template-server/server.js":
/*!***************************************!*\
  !*** ./src/template-server/server.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _prerender_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./prerender-server */ \"./src/template-server/prerender-server.js\");\n/* harmony import */ var _prerender_middleware__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./prerender-middleware */ \"./src/template-server/prerender-middleware.js\");\n/* harmony import */ var node_html_parser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! node-html-parser */ \"node-html-parser\");\n/* harmony import */ var node_html_parser__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(node_html_parser__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n // The main server used for running your app and then scraping the template html from the render.\n// Essentially runs two servers to achieve the pre-rendering of the template html and the extraction to file.\n// Server config is defined in webpack.server.config.js\n\nvar _serverConfig = ({\"keepalive\":undefined}),\n    keepalive = _serverConfig.keepalive;\nvar app = express__WEBPACK_IMPORTED_MODULE_2___default()();\nvar DIST_DIR = __dirname;\nvar HTML_FILE = path__WEBPACK_IMPORTED_MODULE_1___default().join(DIST_DIR, 'index.html');\napp.use(_prerender_middleware__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\napp.use(express__WEBPACK_IMPORTED_MODULE_2___default()[\"static\"](DIST_DIR));\napp.get('*', function (req, res) {\n  res.sendFile(HTML_FILE);\n});\nvar PORT = process.env.PORT || 8080;\n\nvar noop = function noop() {};\n\nfunction writeFileAndDir(filename, content) {\n  var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : noop;\n  var dirName = path__WEBPACK_IMPORTED_MODULE_1___default().dirname(filename);\n  fs__WEBPACK_IMPORTED_MODULE_0___default().mkdir(dirName, {\n    recursive: true\n  }, function (err) {\n    if (err) {\n      // eslint-disable-next-line no-console\n      console.error(err);\n      return callback(err);\n    }\n\n    fs__WEBPACK_IMPORTED_MODULE_0___default().writeFile(filename, content, function (err) {\n      if (err) {\n        // eslint-disable-next-line no-console\n        console.error(err);\n        return callback(err);\n      }\n\n      callback();\n    });\n  });\n}\n\nvar exitProcess = function exitProcess() {\n  // eslint-disable-next-line no-console\n  console.log('Exiting...');\n  process.exit();\n};\n\nvar initServer = function initServer() {\n  // Start an express server to render our app with template vars.\n  var expressServer = app.listen(PORT, function () {\n    console.log(\"App listening to \".concat(PORT, \"....\")); // Trigger a request with query string to the server so that the prerender service can do its magic.\n\n    var url = \"http://localhost:8080/?_escaped_fragment_='\";\n    console.log(\"Triggering request to route.\");\n    axios__WEBPACK_IMPORTED_MODULE_3___default().get(url).then(function (res) {\n      // TODO - maybe should build the template files here instead of the prerender hook?\n      var html = res.data; // Parse and get the `body` element children.\n\n      var innerHtml = (0,node_html_parser__WEBPACK_IMPORTED_MODULE_6__.parse)(html).querySelectorAll('body > *').map(function (el) {\n        return el.toString();\n      }).join('');\n      writeFileAndDir(\"./php/templates/app.html\", innerHtml);\n    })[\"catch\"](function (error) {\n      console.error(error);\n    })[\"finally\"](function () {\n      if (keepalive !== 'true') {\n        expressServer.close(function () {\n          console.log('Closed server.');\n        });\n\n        if (process.exit) {\n          console.log(\"Exiting...\"); // We need a delay here so any files that are being written can finish.\n\n          setTimeout(exitProcess, 3000);\n        }\n      }\n    });\n  });\n}; // Start the prerender server, and pass our express server init\n// to it (for executing when its ready)\n\n\n(0,_prerender_server__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function () {\n  initServer();\n});\n\n//# sourceURL=webpack://preact-ssr-with-php/./src/template-server/server.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "node-html-parser":
/*!***********************************!*\
  !*** external "node-html-parser" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("node-html-parser");

/***/ }),

/***/ "prerender":
/*!****************************!*\
  !*** external "prerender" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("prerender");

/***/ }),

/***/ "prerender-node":
/*!*********************************!*\
  !*** external "prerender-node" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("prerender-node");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/template-server/server.js");
/******/ 	
/******/ })()
;