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
eval("\n\nfunction navbarAnimation() {\n\tif ($(document).scrollTop() < 50) {\n\t\t$('nav').addClass('navPadding');\n\t\t$('nav').removeClass('scrollFunc');\n\t} else {\n\t\t$('nav').removeClass('navPadding');\n\t\t$('nav').addClass('scrollFunc');\n\t}\n}\n\n// content section subtitle animation on scroll\nfunction contentSubtitleAnimation() {\n\n\tvar position = $(document).scrollTop();\n\tvar nav_height = $('nav').outerHeight();\n\n\t$('section').each(function (index, value) {\n\t\tvar top = $(this).offset().top - nav_height - 235;\n\t\tvar bottom = top + $(this).outerHeight();\n\n\t\tif (position >= top && position <= bottom) {\n\t\t\t$(this).children('.joinNavbar').fadeIn(1000);\n\t\t\t$(this).children('.title').slideUp('fast');\n\t\t\t$(this).children('.addPadding').slideDown('fast');\n\t\t} else {\n\t\t\t$(this).children('.joinNavbar').fadeOut('fast');\n\t\t\t$(this).children('.title').slideDown('fast');\n\t\t\t$(this).children('.addPadding').slideUp('fast');\n\t\t}\n\t});\n}\n\n$(document).ready(function () {\n\tnavbarAnimation();\n\tcontentSubtitleAnimation();\n\n\t// smooth scrolling\n\t$('a').click(function () {\n\t\tvar $href = $(this).attr('href');\n\t\t$('body').stop().animate({\n\t\t\tscrollTop: $($href).offset().top - 107\n\t\t}, 1000);\n\t\treturn false;\n\t});\n\n\t// navbar animation on scroll\n\t$(window).scroll(function () {\n\t\tnavbarAnimation();\n\t\tcontentSubtitleAnimation();\n\t});\n\n\t// detect scroll position\n\t/*\t\r\n $(window).scroll((event) => {\r\n \t\tvar scroll = $(window).scrollTop();\r\n \t\tconsole.log(scroll);\r\n });\r\n */\n});//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvaW5kZXguanM/MWZkZiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcclxuXHJcbmZ1bmN0aW9uIG5hdmJhckFuaW1hdGlvbigpIHtcclxuXHRpZiAoJChkb2N1bWVudCkuc2Nyb2xsVG9wKCkgPCA1MCkge1xyXG5cdFx0JCgnbmF2JykuYWRkQ2xhc3MoJ25hdlBhZGRpbmcnKTtcclxuXHRcdCQoJ25hdicpLnJlbW92ZUNsYXNzKCdzY3JvbGxGdW5jJyk7XHJcblx0fSBlbHNlIHtcclxuXHRcdCQoJ25hdicpLnJlbW92ZUNsYXNzKCduYXZQYWRkaW5nJyk7XHJcblx0XHQkKCduYXYnKS5hZGRDbGFzcygnc2Nyb2xsRnVuYycpO1xyXG5cdH1cclxufVxyXG5cclxuLy8gY29udGVudCBzZWN0aW9uIHN1YnRpdGxlIGFuaW1hdGlvbiBvbiBzY3JvbGxcclxuZnVuY3Rpb24gY29udGVudFN1YnRpdGxlQW5pbWF0aW9uKCkge1xyXG5cdFxyXG5cdGxldCBwb3NpdGlvbiA9ICQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpO1xyXG5cdGxldCBuYXZfaGVpZ2h0ID0gJCgnbmF2Jykub3V0ZXJIZWlnaHQoKTtcclxuXHJcblx0JCgnc2VjdGlvbicpLmVhY2goZnVuY3Rpb24oaW5kZXgsIHZhbHVlKSB7XHJcblx0XHRsZXQgdG9wID0gJCh0aGlzKS5vZmZzZXQoKS50b3AgLSBuYXZfaGVpZ2h0IC0gMjM1O1xyXG5cdFx0bGV0IGJvdHRvbSA9IHRvcCArICQodGhpcykub3V0ZXJIZWlnaHQoKTtcclxuXHJcblx0XHRpZiAocG9zaXRpb24gPj0gdG9wICYmIHBvc2l0aW9uIDw9IGJvdHRvbSkge1xyXG5cdFx0XHQkKHRoaXMpLmNoaWxkcmVuKCcuam9pbk5hdmJhcicpLmZhZGVJbigxMDAwKVxyXG5cdFx0XHQkKHRoaXMpLmNoaWxkcmVuKCcudGl0bGUnKS5zbGlkZVVwKCdmYXN0JylcclxuXHRcdFx0JCh0aGlzKS5jaGlsZHJlbignLmFkZFBhZGRpbmcnKS5zbGlkZURvd24oJ2Zhc3QnKVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0JCh0aGlzKS5jaGlsZHJlbignLmpvaW5OYXZiYXInKS5mYWRlT3V0KCdmYXN0JylcclxuXHRcdFx0JCh0aGlzKS5jaGlsZHJlbignLnRpdGxlJykuc2xpZGVEb3duKCdmYXN0JylcclxuXHRcdFx0JCh0aGlzKS5jaGlsZHJlbignLmFkZFBhZGRpbmcnKS5zbGlkZVVwKCdmYXN0JylcclxuXHRcdH1cclxuXHR9KTtcclxufVxyXG5cclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KCgpID0+IHtcclxuXHRuYXZiYXJBbmltYXRpb24oKTtcclxuXHRjb250ZW50U3VidGl0bGVBbmltYXRpb24oKTtcclxuXHJcblx0Ly8gc21vb3RoIHNjcm9sbGluZ1xyXG5cdCQoJ2EnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcblx0XHR2YXIgJGhyZWYgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKTtcclxuXHRcdCQoJ2JvZHknKS5zdG9wKCkuYW5pbWF0ZSh7XHJcblx0XHRcdHNjcm9sbFRvcDogJCgkaHJlZikub2Zmc2V0KCkudG9wIC0gMTA3XHJcblx0XHR9LCAxMDAwKTtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9KTtcclxuXHJcblxyXG5cdC8vIG5hdmJhciBhbmltYXRpb24gb24gc2Nyb2xsXHJcblx0JCh3aW5kb3cpLnNjcm9sbCgoKSA9PiB7XHJcblx0XHRuYXZiYXJBbmltYXRpb24oKTtcclxuXHRcdGNvbnRlbnRTdWJ0aXRsZUFuaW1hdGlvbigpO1xyXG5cdH0pO1xyXG5cclxuXHQvLyBkZXRlY3Qgc2Nyb2xsIHBvc2l0aW9uXHJcblx0LypcdFxyXG5cdCQod2luZG93KS5zY3JvbGwoKGV2ZW50KSA9PiB7XHJcblx0XHRcdHZhciBzY3JvbGwgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcblx0XHRcdGNvbnNvbGUubG9nKHNjcm9sbCk7XHJcblx0fSk7XHJcblx0Ki9cclxufSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvaW5kZXguanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })
/******/ ]);