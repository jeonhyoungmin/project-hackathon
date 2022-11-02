/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./App.js":
/*!****************!*\
  !*** ./App.js ***!
  \****************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected token (7:6)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n| const App = () => {\\n|   return (\\n>       <SafeAreaView style={styles.container}>\\n|         <Navigation />\\n|       </SafeAreaView>\");\n\n//# sourceURL=webpack://mobile/./App.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-native */ \"./node_modules/react-native/index.js\");\n/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_native__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App */ \"./App.js\");\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.json */ \"./app.json\");\n/**\r\n * @format\r\n */\r\n\r\n\r\n\r\n\r\n\r\nreact_native__WEBPACK_IMPORTED_MODULE_0__.AppRegistry.registerComponent(_app_json__WEBPACK_IMPORTED_MODULE_2__.name, () => (_App__WEBPACK_IMPORTED_MODULE_1___default()));\r\n\n\n//# sourceURL=webpack://mobile/./index.js?");

/***/ }),

/***/ "./node_modules/react-native/index.js":
/*!********************************************!*\
  !*** ./node_modules/react-native/index.js ***!
  \********************************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected token (14:7)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n| \\n| // Components\\n> import typeof AccessibilityInfo from './Libraries/Components/AccessibilityInfo/AccessibilityInfo';\\n| import typeof ActivityIndicator from './Libraries/Components/ActivityIndicator/ActivityIndicator';\\n| import typeof Button from './Libraries/Components/Button';\");\n\n//# sourceURL=webpack://mobile/./node_modules/react-native/index.js?");

/***/ }),

/***/ "./app.json":
/*!******************!*\
  !*** ./app.json ***!
  \******************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"name\":\"mobile\",\"displayName\":\"mobile\",\"android\":{\"googleServicesFile\":\"./google-services.json\"},\"ios\":{\"googleServicesFile\":\"./GoogleService-Info.plist\"},\"plugins\":[\"@react-native-google-signin/google-signin\"]}');\n\n//# sourceURL=webpack://mobile/./app.json?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;