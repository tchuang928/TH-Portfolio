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
eval("\n\n$(document).ready(function () {\n\n\t// smooth scrolling\n\t$('a').on('click', function (event) {\n\n\t\tif (this.hash !== \"\") {\n\t\t\tevent.preventDefault();\n\t\t\tvar hash = this.hash;\n\n\t\t\t$('html, body').animate({\n\t\t\t\t// create variable scrollTop number when scrolling from the top due to hide and show subtitles\n\t\t\t\tscrollTop: $(hash).offset().top - 107\n\t\t\t}, 1000, function () {\n\t\t\t\twindow.location.hash = hash;\n\t\t\t});\n\t\t}\n\t});\n\n\t// detect scroll position and run proper animation\n\tif ($(document).scrollTop() > 50) {\n\t\t$('nav').addClass('scrollFunc');\n\t} else {\n\t\t$('nav').removeClass('scrollFunc');\n\t}\n\n\t// navbar animation on scroll\n\t$(window).scroll(function () {\n\t\tif ($(document).scrollTop() > 50) {\n\t\t\t$('nav').removeClass('navPadding');\n\t\t\t$('nav').addClass('scrollFunc');\n\t\t} else {\n\t\t\t$('nav').addClass('navPadding');\n\t\t\t$('nav').removeClass('scrollFunc');\n\t\t}\n\t});\n\n\t// about section subtitle animation on scroll\n\t$(window).scroll(function () {\n\t\tif ($(document).scrollTop() > 792) {\n\t\t\t//$('#aboutTitle').addClass('joinNavbar').addClass('navbar-fixed-top');\n\t\t\t$('#aboutNavbar').fadeIn('slow');\n\t\t\t$('#aboutTitle').slideUp('slow');\n\t\t\t$('#aboutPadding').slideDown('slow');\n\t\t} else {\n\t\t\t//$('#aboutTitle').removeClass('joinNavbar').removeClass('navbar-fixed-top');\n\t\t\t$('#aboutNavbar').hide();\n\t\t\t$('#aboutTitle').slideDown('slow');\n\t\t\t$('#aboutPadding').slideUp('slow');\n\t\t}\n\t});\n\n\t// detect scroll position\n\t$(window).scroll(function (event) {\n\t\tvar scroll = $(window).scrollTop();\n\t\tconsole.log(scroll);\n\t});\n});//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvaW5kZXguanM/MWZkZiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KCgpID0+IHtcclxuXHRcclxuXHQvLyBzbW9vdGggc2Nyb2xsaW5nXHJcbiAgJCgnYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblxyXG4gICAgaWYgKHRoaXMuaGFzaCAhPT0gXCJcIikge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB2YXIgaGFzaCA9IHRoaXMuaGFzaDtcclxuXHJcbiAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcclxuXHRcdFx0XHQvLyBjcmVhdGUgdmFyaWFibGUgc2Nyb2xsVG9wIG51bWJlciB3aGVuIHNjcm9sbGluZyBmcm9tIHRoZSB0b3AgZHVlIHRvIGhpZGUgYW5kIHNob3cgc3VidGl0bGVzXHJcbiAgICAgICAgc2Nyb2xsVG9wOiAkKGhhc2gpLm9mZnNldCgpLnRvcCAtMTA3XHJcblx0XHRcdH0sIDEwMDAsICgpID0+IHtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IGhhc2g7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBcclxuICB9KTtcclxuXHJcblx0Ly8gZGV0ZWN0IHNjcm9sbCBwb3NpdGlvbiBhbmQgcnVuIHByb3BlciBhbmltYXRpb25cclxuXHRpZiAoJChkb2N1bWVudCkuc2Nyb2xsVG9wKCkgPiA1MCkge1xyXG5cdFx0JCgnbmF2JykuYWRkQ2xhc3MoJ3Njcm9sbEZ1bmMnKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0JCgnbmF2JykucmVtb3ZlQ2xhc3MoJ3Njcm9sbEZ1bmMnKTtcclxuXHR9XHJcblxyXG5cdC8vIG5hdmJhciBhbmltYXRpb24gb24gc2Nyb2xsXHJcblx0JCh3aW5kb3cpLnNjcm9sbCgoKSA9PiB7XHJcblx0XHRpZiAoJChkb2N1bWVudCkuc2Nyb2xsVG9wKCkgPiA1MCkge1xyXG5cdFx0XHQkKCduYXYnKS5yZW1vdmVDbGFzcygnbmF2UGFkZGluZycpO1xyXG5cdFx0XHQkKCduYXYnKS5hZGRDbGFzcygnc2Nyb2xsRnVuYycpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0JCgnbmF2JykuYWRkQ2xhc3MoJ25hdlBhZGRpbmcnKTtcclxuXHRcdFx0JCgnbmF2JykucmVtb3ZlQ2xhc3MoJ3Njcm9sbEZ1bmMnKTtcclxuXHRcdH1cclxuXHR9KVxyXG5cclxuXHQvLyBhYm91dCBzZWN0aW9uIHN1YnRpdGxlIGFuaW1hdGlvbiBvbiBzY3JvbGxcclxuXHQkKHdpbmRvdykuc2Nyb2xsKCgpID0+IHtcclxuXHRcdGlmICgkKGRvY3VtZW50KS5zY3JvbGxUb3AoKSA+IDc5Mikge1xyXG5cdFx0XHQvLyQoJyNhYm91dFRpdGxlJykuYWRkQ2xhc3MoJ2pvaW5OYXZiYXInKS5hZGRDbGFzcygnbmF2YmFyLWZpeGVkLXRvcCcpO1xyXG5cdFx0XHQkKCcjYWJvdXROYXZiYXInKS5mYWRlSW4oJ3Nsb3cnKTtcclxuXHRcdFx0JCgnI2Fib3V0VGl0bGUnKS5zbGlkZVVwKCdzbG93Jyk7XHJcblx0XHRcdFx0JCgnI2Fib3V0UGFkZGluZycpLnNsaWRlRG93bignc2xvdycpO1xyXG5cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdC8vJCgnI2Fib3V0VGl0bGUnKS5yZW1vdmVDbGFzcygnam9pbk5hdmJhcicpLnJlbW92ZUNsYXNzKCduYXZiYXItZml4ZWQtdG9wJyk7XHJcblx0XHRcdCQoJyNhYm91dE5hdmJhcicpLmhpZGUoKTtcclxuXHRcdFx0JCgnI2Fib3V0VGl0bGUnKS5zbGlkZURvd24oJ3Nsb3cnKTtcclxuXHRcdFx0JCgnI2Fib3V0UGFkZGluZycpLnNsaWRlVXAoJ3Nsb3cnKTtcclxuXHRcdH1cclxuXHR9KVxyXG5cclxuXHQvLyBkZXRlY3Qgc2Nyb2xsIHBvc2l0aW9uXHJcblx0JCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHRcdFx0dmFyIHNjcm9sbCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuXHRcdFx0Y29uc29sZS5sb2coc2Nyb2xsKTtcclxuXHR9KTtcclxuXHJcbn0pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2luZGV4LmpzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBIiwic291cmNlUm9vdCI6IiJ9");

/***/ })
/******/ ]);