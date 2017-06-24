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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* no static exports found */
/* all exports used */
/*!*****************************!*\
  !*** ./www/src/js/index.js ***!
  \*****************************/
/***/ (function(module, exports) {

eval("\nvar this$1 = this;\nvar app = {\n   initialize: function () {\n      document.addEventListener('deviceready', app.onDeviceReady.bind(this$1), false);\n      document.addEventListener('init', function (event) {\n         var page = event.target;\n\n         // TOPページ\n         if (page.id === 'top') {\n            // 編集ページ遷移\n            page.querySelector('#push-button').onclick = function () {\n               document.querySelector('#myNavigator').pushPage('settings.html', {data: {}})\n            }\n\n            // メニューダイアログ表示\n            var btn_dialog = document.querySelector('#show-dialog')\n            btn_dialog.addEventListener('click', function () {\n               document.getElementById('menu-dialog').show()\n            })\n\n            // メニューダイアログ非表示\n            btn_dialog = document.querySelector('#hide-dialog')\n            btn_dialog.addEventListener('click', function () {\n               document.getElementById('menu-dialog').hide()\n            })\n         }\n\n         // 編集ページ\n         else if (page.id === 'settings') {\n            document.querySelector('.back-button').onclick = function () {\n               document.querySelector('#myNavigator').popPage('settings.html')\n            }\n         }\n      });\n   },\n\n    // deviceready Event Handler\n    //\n    // Bind any cordova events here. Common events are:\n    // 'pause', 'resume', etc.\n    onDeviceReady: function() {\n        this.receivedEvent('deviceready');\n\n        // sqlitePlugin.selfTest(function() {\n        //       // テスト成功\n        //       alert('success')\n        //    },\n        //    function(error) {\n        //       // プラグインテスト失敗\n        //       alert('error')\n        //    });\n    },\n\n    // Update DOM on a Received Event\n    receivedEvent: function(id) {\n        var parentElement = document.getElementById(id);\n        var listeningElement = parentElement.querySelector('.listening');\n        var receivedElement = parentElement.querySelector('.received');\n\n        listeningElement.setAttribute('style', 'display:none;');\n        receivedElement.setAttribute('style', 'display:block;');\n\n        console.log('Received Event: ' + id);\n    },\n};\n\napp.initialize();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93d3cvc3JjL2pzL2luZGV4LmpzP2NkYzQiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXBwID0ge1xuICAgaW5pdGlhbGl6ZTogKCkgPT4ge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZGV2aWNlcmVhZHknLCBhcHAub25EZXZpY2VSZWFkeS5iaW5kKHRoaXMpLCBmYWxzZSk7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdpbml0JywgKGV2ZW50KSA9PiB7XG4gICAgICAgICBjb25zdCBwYWdlID0gZXZlbnQudGFyZ2V0O1xuXG4gICAgICAgICAvLyBUT1Djg5rjg7zjgrhcbiAgICAgICAgIGlmIChwYWdlLmlkID09PSAndG9wJykge1xuICAgICAgICAgICAgLy8g57eo6ZuG44Oa44O844K46YG356e7XG4gICAgICAgICAgICBwYWdlLnF1ZXJ5U2VsZWN0b3IoJyNwdXNoLWJ1dHRvbicpLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXlOYXZpZ2F0b3InKS5wdXNoUGFnZSgnc2V0dGluZ3MuaHRtbCcsIHtkYXRhOiB7fX0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIOODoeODi+ODpeODvOODgOOCpOOCouODreOCsOihqOekulxuICAgICAgICAgICAgbGV0IGJ0bl9kaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2hvdy1kaWFsb2cnKVxuICAgICAgICAgICAgYnRuX2RpYWxvZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51LWRpYWxvZycpLnNob3coKVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgLy8g44Oh44OL44Ol44O844OA44Kk44Ki44Ot44Kw6Z2e6KGo56S6XG4gICAgICAgICAgICBidG5fZGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hpZGUtZGlhbG9nJylcbiAgICAgICAgICAgIGJ0bl9kaWFsb2cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudS1kaWFsb2cnKS5oaWRlKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICB9XG5cbiAgICAgICAgIC8vIOe3qOmbhuODmuODvOOCuFxuICAgICAgICAgZWxzZSBpZiAocGFnZS5pZCA9PT0gJ3NldHRpbmdzJykge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhY2stYnV0dG9uJykub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNteU5hdmlnYXRvcicpLnBvcFBhZ2UoJ3NldHRpbmdzLmh0bWwnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgfVxuICAgICAgfSk7XG4gICB9LFxuXG4gICAgLy8gZGV2aWNlcmVhZHkgRXZlbnQgSGFuZGxlclxuICAgIC8vXG4gICAgLy8gQmluZCBhbnkgY29yZG92YSBldmVudHMgaGVyZS4gQ29tbW9uIGV2ZW50cyBhcmU6XG4gICAgLy8gJ3BhdXNlJywgJ3Jlc3VtZScsIGV0Yy5cbiAgICBvbkRldmljZVJlYWR5OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5yZWNlaXZlZEV2ZW50KCdkZXZpY2VyZWFkeScpO1xuXG4gICAgICAgIC8vIHNxbGl0ZVBsdWdpbi5zZWxmVGVzdChmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gICAgICAgLy8g44OG44K544OI5oiQ5YqfXG4gICAgICAgIC8vICAgICAgIGFsZXJ0KCdzdWNjZXNzJylcbiAgICAgICAgLy8gICAgfSxcbiAgICAgICAgLy8gICAgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgLy8gICAgICAgLy8g44OX44Op44Kw44Kk44Oz44OG44K544OI5aSx5pWXXG4gICAgICAgIC8vICAgICAgIGFsZXJ0KCdlcnJvcicpXG4gICAgICAgIC8vICAgIH0pO1xuICAgIH0sXG5cbiAgICAvLyBVcGRhdGUgRE9NIG9uIGEgUmVjZWl2ZWQgRXZlbnRcbiAgICByZWNlaXZlZEV2ZW50OiBmdW5jdGlvbihpZCkge1xuICAgICAgICBjb25zdCBwYXJlbnRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgICAgICBjb25zdCBsaXN0ZW5pbmdFbGVtZW50ID0gcGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdGVuaW5nJyk7XG4gICAgICAgIGNvbnN0IHJlY2VpdmVkRWxlbWVudCA9IHBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnJlY2VpdmVkJyk7XG5cbiAgICAgICAgbGlzdGVuaW5nRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6bm9uZTsnKTtcbiAgICAgICAgcmVjZWl2ZWRFbGVtZW50LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTpibG9jazsnKTtcblxuICAgICAgICBjb25zb2xlLmxvZygnUmVjZWl2ZWQgRXZlbnQ6ICcgKyBpZCk7XG4gICAgfSxcbn07XG5cbmFwcC5pbml0aWFsaXplKCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd3d3L3NyYy9qcy9pbmRleC5qcyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQVNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 1 */
/* no static exports found */
/* all exports used */
/*!***********************************!*\
  !*** multi ./www/src/js/index.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./www/src/js/index.js */0);


/***/ })
/******/ ]);