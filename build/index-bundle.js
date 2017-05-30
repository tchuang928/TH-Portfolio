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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* no static exports found */
/* all exports used */
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n$(document).ready(function ($) {\n\t'use strict';\n\n\tif ($(document).scrollTop() > 50) {\n\t\t$('nav').addClass('scrollFunc');\n\t} else {\n\t\t$('nav').removeClass('scrollFunc');\n\t}\n\n\t$(window).scroll(function () {\n\t\tif ($(document).scrollTop() > 50) {\n\t\t\t$('nav').addClass('scrollFunc');\n\t\t} else {\n\t\t\t$('nav').removeClass('scrollFunc');\n\t\t}\n\t});\n\n\t// smooth scrolling\n\t$(\"a\").on('click', function (event) {\n\n\t\tif (this.hash !== \"\") {\n\t\t\tevent.preventDefault();\n\t\t\tvar hash = this.hash;\n\n\t\t\t$('html, body').animate({\n\t\t\t\tscrollTop: $(hash).offset().top - 130\n\t\t\t}, 1000, function () {\n\n\t\t\t\twindow.location.hash = hash;\n\t\t\t});\n\t\t}\n\t});\n});//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvaW5kZXguanM/MWZkZiJdLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeSgkID0+IHtcclxuXHQndXNlIHN0cmljdCdcclxuXHRcclxuXHRcdGlmICgkKGRvY3VtZW50KS5zY3JvbGxUb3AoKSA+IDUwKSB7XHJcblx0XHRcdCQoJ25hdicpLmFkZENsYXNzKCdzY3JvbGxGdW5jJyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQkKCduYXYnKS5yZW1vdmVDbGFzcygnc2Nyb2xsRnVuYycpO1xyXG5cdFx0fVxyXG5cclxuXHJcblx0JCh3aW5kb3cpLnNjcm9sbCgoKSA9PiB7XHJcblx0XHRpZiAoJChkb2N1bWVudCkuc2Nyb2xsVG9wKCkgPiA1MCkge1xyXG5cdFx0XHQkKCduYXYnKS5hZGRDbGFzcygnc2Nyb2xsRnVuYycpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0JCgnbmF2JykucmVtb3ZlQ2xhc3MoJ3Njcm9sbEZ1bmMnKTtcclxuXHRcdH1cclxuXHR9KVxyXG5cclxuXHQvLyBzbW9vdGggc2Nyb2xsaW5nXHJcbiAgJChcImFcIikub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHJcbiAgICBpZiAodGhpcy5oYXNoICE9PSBcIlwiKSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHZhciBoYXNoID0gdGhpcy5oYXNoO1xyXG5cclxuICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xyXG4gICAgICAgIHNjcm9sbFRvcDogJChoYXNoKS5vZmZzZXQoKS50b3AgLTEzMFxyXG4gICAgICB9LCAxMDAwLCBmdW5jdGlvbigpe1xyXG4gICBcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IGhhc2g7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBcclxuICB9KTtcclxufSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvaW5kZXguanMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9");

/***/ })
/******/ ]);