/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/data.js":
/*!************************!*\
  !*** ./server/data.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var singers = [{\n  name: \"村花\",\n  photo: \"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png\",\n  description: \"巴村 村花\",\n  songName: \"山歌\",\n  cardStyle: {\n    width: \"100%\",\n    textAlign: \"center\"\n  },\n  isLike: false\n}, {\n  name: \"村花\",\n  photo: \"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png\",\n  description: \"巴村 村花\",\n  songName: \"山歌\",\n  cardStyle: {\n    width: \"100%\",\n    textAlign: \"center\"\n  },\n  isLike: false\n}, {\n  name: \"村花\",\n  photo: \"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png\",\n  description: \"巴村 村花\",\n  songName: \"山歌\",\n  cardStyle: {\n    width: \"100%\",\n    textAlign: \"center\"\n  },\n  isLike: false\n}, {\n  name: \"村花\",\n  photo: \"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png\",\n  description: \"巴村 村花\",\n  songName: \"山歌\",\n  cardStyle: {\n    width: \"100%\",\n    textAlign: \"center\"\n  },\n  isLike: false\n}, {\n  name: \"村花\",\n  photo: \"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png\",\n  description: \"巴村 村花\",\n  songName: \"山歌\",\n  cardStyle: {\n    width: \"100%\",\n    textAlign: \"center\"\n  },\n  isLike: false\n}, {\n  name: \"村花\",\n  photo: \"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png\",\n  description: \"巴村 村花\",\n  songName: \"山歌\",\n  cardStyle: {\n    width: \"100%\",\n    textAlign: \"center\"\n  },\n  isLike: false\n}, {\n  name: \"村花\",\n  photo: \"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png\",\n  description: \"巴村 村花\",\n  songName: \"山歌\",\n  cardStyle: {\n    width: \"100%\",\n    textAlign: \"center\"\n  },\n  isLike: false\n}, {\n  name: \"村花\",\n  photo: \"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png\",\n  description: \"巴村 村花\",\n  songName: \"山歌\",\n  cardStyle: {\n    width: \"100%\",\n    textAlign: \"center\"\n  },\n  isLike: false\n}];\nmodule.exports = singers;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2ZXIvZGF0YS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NlcnZlci9kYXRhLmpzPzhiZWIiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIHNpbmdlcnMgPSBbXG4gIHtcbiAgICBuYW1lOiBcIuadkeiKsVwiLFxuICAgIHBob3RvOiBcImh0dHBzOi8vb3MuYWxpcGF5b2JqZWN0cy5jb20vcm1zcG9ydGFsL1FCbk9Pb0xhQWZLUGlyYy5wbmdcIixcbiAgICBkZXNjcmlwdGlvbjogXCLlt7TmnZEg5p2R6IqxXCIsXG4gICAgc29uZ05hbWU6IFwi5bGx5q2MXCIsXG4gICAgY2FyZFN0eWxlOiB7IHdpZHRoOiBcIjEwMCVcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiIH0sXG4gICAgaXNMaWtlOiBmYWxzZVxuICB9LFxuICB7XG4gICAgbmFtZTogXCLmnZHoirFcIixcbiAgICBwaG90bzogXCJodHRwczovL29zLmFsaXBheW9iamVjdHMuY29tL3Jtc3BvcnRhbC9RQm5PT29MYUFmS1BpcmMucG5nXCIsXG4gICAgZGVzY3JpcHRpb246IFwi5be05p2RIOadkeiKsVwiLFxuICAgIHNvbmdOYW1lOiBcIuWxseatjFwiLFxuICAgIGNhcmRTdHlsZTogeyB3aWR0aDogXCIxMDAlXCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiB9LFxuICAgIGlzTGlrZTogZmFsc2VcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwi5p2R6IqxXCIsXG4gICAgcGhvdG86IFwiaHR0cHM6Ly9vcy5hbGlwYXlvYmplY3RzLmNvbS9ybXNwb3J0YWwvUUJuT09vTGFBZktQaXJjLnBuZ1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIuW3tOadkSDmnZHoirFcIixcbiAgICBzb25nTmFtZTogXCLlsbHmrYxcIixcbiAgICBjYXJkU3R5bGU6IHsgd2lkdGg6IFwiMTAwJVwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfSxcbiAgICBpc0xpa2U6IGZhbHNlXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIuadkeiKsVwiLFxuICAgIHBob3RvOiBcImh0dHBzOi8vb3MuYWxpcGF5b2JqZWN0cy5jb20vcm1zcG9ydGFsL1FCbk9Pb0xhQWZLUGlyYy5wbmdcIixcbiAgICBkZXNjcmlwdGlvbjogXCLlt7TmnZEg5p2R6IqxXCIsXG4gICAgc29uZ05hbWU6IFwi5bGx5q2MXCIsXG4gICAgY2FyZFN0eWxlOiB7IHdpZHRoOiBcIjEwMCVcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiIH0sXG4gICAgaXNMaWtlOiBmYWxzZVxuICB9LFxuICB7XG4gICAgbmFtZTogXCLmnZHoirFcIixcbiAgICBwaG90bzogXCJodHRwczovL29zLmFsaXBheW9iamVjdHMuY29tL3Jtc3BvcnRhbC9RQm5PT29MYUFmS1BpcmMucG5nXCIsXG4gICAgZGVzY3JpcHRpb246IFwi5be05p2RIOadkeiKsVwiLFxuICAgIHNvbmdOYW1lOiBcIuWxseatjFwiLFxuICAgIGNhcmRTdHlsZTogeyB3aWR0aDogXCIxMDAlXCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiB9LFxuICAgIGlzTGlrZTogZmFsc2VcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwi5p2R6IqxXCIsXG4gICAgcGhvdG86IFwiaHR0cHM6Ly9vcy5hbGlwYXlvYmplY3RzLmNvbS9ybXNwb3J0YWwvUUJuT09vTGFBZktQaXJjLnBuZ1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIuW3tOadkSDmnZHoirFcIixcbiAgICBzb25nTmFtZTogXCLlsbHmrYxcIixcbiAgICBjYXJkU3R5bGU6IHsgd2lkdGg6IFwiMTAwJVwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfSxcbiAgICBpc0xpa2U6IGZhbHNlXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIuadkeiKsVwiLFxuICAgIHBob3RvOiBcImh0dHBzOi8vb3MuYWxpcGF5b2JqZWN0cy5jb20vcm1zcG9ydGFsL1FCbk9Pb0xhQWZLUGlyYy5wbmdcIixcbiAgICBkZXNjcmlwdGlvbjogXCLlt7TmnZEg5p2R6IqxXCIsXG4gICAgc29uZ05hbWU6IFwi5bGx5q2MXCIsXG4gICAgY2FyZFN0eWxlOiB7IHdpZHRoOiBcIjEwMCVcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiIH0sXG4gICAgaXNMaWtlOiBmYWxzZVxuICB9LFxuICB7XG4gICAgbmFtZTogXCLmnZHoirFcIixcbiAgICBwaG90bzogXCJodHRwczovL29zLmFsaXBheW9iamVjdHMuY29tL3Jtc3BvcnRhbC9RQm5PT29MYUFmS1BpcmMucG5nXCIsXG4gICAgZGVzY3JpcHRpb246IFwi5be05p2RIOadkeiKsVwiLFxuICAgIHNvbmdOYW1lOiBcIuWxseatjFwiLFxuICAgIGNhcmRTdHlsZTogeyB3aWR0aDogXCIxMDAlXCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiB9LFxuICAgIGlzTGlrZTogZmFsc2VcbiAgfVxuXTtcblxubW9kdWxlLmV4cG9ydHMgPSBzaW5nZXJzO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBTkE7QUFVQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./server/data.js\n");

/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var express = __webpack_require__(/*! express */ \"express\");\n\nvar app = express();\n\nvar http = __webpack_require__(/*! http */ \"http\").createServer(app);\n\nvar io = __webpack_require__(/*! socket.io */ \"socket.io\")(http);\n\nvar singers = __webpack_require__(/*! ./data */ \"./server/data.js\");\n\nvar cors = __webpack_require__(/*! cors */ \"cors\");\n\napp.use(cors());\napp.get(\"/getAllSingers\", function (req, res) {\n  return res.send(singers);\n});\nio.on(\"connect\", function (socket) {\n  socket.on(\"getAllSingers\", function () {\n    socket.broadcast.emit(\"allSingers\", singers);\n    console.log(singers);\n  });\n  socket.on(\"disconnect\", function () {\n    console.log(\"user disconnected\");\n  });\n});\nhttp.listen(5000, function () {\n  console.log(\"listening on *:5000\");\n}); // app.listen(port, () => console.log(`Example app listening on port ${port}!`));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2ZXIvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvaW5kZXguanM/MGE4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBleHByZXNzID0gcmVxdWlyZShcImV4cHJlc3NcIik7XG5jb25zdCBhcHAgPSBleHByZXNzKCk7XG52YXIgaHR0cCA9IHJlcXVpcmUoXCJodHRwXCIpLmNyZWF0ZVNlcnZlcihhcHApO1xudmFyIGlvID0gcmVxdWlyZShcInNvY2tldC5pb1wiKShodHRwKTtcblxuY29uc3Qgc2luZ2VycyA9IHJlcXVpcmUoXCIuL2RhdGFcIik7XG52YXIgY29ycyA9IHJlcXVpcmUoXCJjb3JzXCIpO1xuXG5hcHAudXNlKGNvcnMoKSk7XG5cbmFwcC5nZXQoXCIvZ2V0QWxsU2luZ2Vyc1wiLCAocmVxLCByZXMpID0+IHJlcy5zZW5kKHNpbmdlcnMpKTtcblxuaW8ub24oXCJjb25uZWN0XCIsIGZ1bmN0aW9uKHNvY2tldCkge1xuICBzb2NrZXQub24oXCJnZXRBbGxTaW5nZXJzXCIsICgpID0+IHtcbiAgICBzb2NrZXQuYnJvYWRjYXN0LmVtaXQoXCJhbGxTaW5nZXJzXCIsIHNpbmdlcnMpO1xuICAgIGNvbnNvbGUubG9nKHNpbmdlcnMpO1xuICB9KTtcbiAgc29ja2V0Lm9uKFwiZGlzY29ubmVjdFwiLCBmdW5jdGlvbigpIHtcbiAgICBjb25zb2xlLmxvZyhcInVzZXIgZGlzY29ubmVjdGVkXCIpO1xuICB9KTtcbn0pO1xuXG5odHRwLmxpc3Rlbig1MDAwLCBmdW5jdGlvbigpIHtcbiAgY29uc29sZS5sb2coXCJsaXN0ZW5pbmcgb24gKjo1MDAwXCIpO1xufSk7XG5cbi8vIGFwcC5saXN0ZW4ocG9ydCwgKCkgPT4gY29uc29sZS5sb2coYEV4YW1wbGUgYXBwIGxpc3RlbmluZyBvbiBwb3J0ICR7cG9ydH0hYCkpO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./server/index.js\n");

/***/ }),

/***/ 0:
/*!*******************************!*\
  !*** multi ./server/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./server/index.js */"./server/index.js");


/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ycy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImNvcnNcIj83ZTllIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcnNcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///cors\n");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwcmVzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIj8yMmZlIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///express\n");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImh0dHBcIj84ZDE5Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0dHBcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///http\n");

/***/ }),

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"socket.io\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ja2V0LmlvLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic29ja2V0LmlvXCI/Y2IzNCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzb2NrZXQuaW9cIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///socket.io\n");

/***/ })

/******/ });