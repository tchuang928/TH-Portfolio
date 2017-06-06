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
eval("\n\nfunction navbarAnimation() {\n\tif ($(document).scrollTop() < 50) {\n\t\t$('nav').addClass('navPadding');\n\t\t$('nav').removeClass('scrollFunc');\n\t} else {\n\t\t$('nav').removeClass('navPadding');\n\t\t$('nav').addClass('scrollFunc');\n\t}\n}\n\n// content section subtitle animation on scroll\nfunction contentSubtitleAnimation() {\n\n\tvar position = $(document).scrollTop();\n\tvar nav_height = $('nav').outerHeight();\n\n\t$('section').each(function () {\n\t\tvar top = $(this).offset().top - nav_height - 10;\n\t\tvar bottom = top + $(this).outerHeight();\n\n\t\t// animate subtitle content sections\n\t\t/*\r\n  if (position >= top && position <= bottom) {\r\n  \tlet that = $(this);\r\n  \tthat.children('.title').slideUp(800); \r\n  \tthat.children('hr').slideUp(800);\r\n  \tthat.children('a').fadeIn(100);\r\n  } else {\r\n  \tlet that = $(this);\r\n  \tthat.children('a').fadeOut('fast', function() {\r\n  \t\tthat.children('.title').slideDown(400);\r\n  \t\tthat.children('hr').slideDown(400);\r\n  \t}); \r\n  }\r\n  */\n\t});\n}\n\nfunction introTextOpacity() {\n\tvar position = $(document).scrollTop();\n\n\tif (position < 200) {\n\t\t$('#introBackgroundColor').css('opacity', '1');\n\t}\n\tif (position >= 200 && position <= 520) {\n\t\t// normalize position\n\t\tvar opacity = (-1 * position / 80 + 6.5) / 4;\n\t\t$('#introBackgroundColor').css('opacity', '' + opacity);\n\t}\n\tif (position > 520) {\n\t\t$('#introBackgroundColor').css('opacity', '0');\n\t}\n}\n\nfunction topOfPage() {\n\tvar position = $(document).scrollTop();\n\tvar bottom = $('#intro').outerHeight() - 100;\n\tif (position > bottom) {\n\t\t$('.top-of-page').slideDown(250);\n\t} else {\n\t\t$('.top-of-page').slideUp(250);\n\t}\n}\n\n$(document).ready(function () {\n\t// check for scroll position in case of browser refresh\n\tnavbarAnimation();\n\tcontentSubtitleAnimation();\n\ttopOfPage();\n\n\t// smooth scrolling\n\t$('a').click(function (e) {\n\t\te.preventDefault();\n\t\t$('html,body').stop().animate({\n\t\t\tscrollTop: $(this.hash).offset().top - 70\n\t\t}, 1000);\n\t\treturn false;\n\t});\n\n\t// scrolling animations\n\t$(window).scroll(function () {\n\t\tintroTextOpacity();\n\t\tnavbarAnimation();\n\t\tcontentSubtitleAnimation();\n\t\ttopOfPage();\n\t});\n\t// detect scroll position\n\t$(window).scroll(function (event) {\n\t\tvar scroll = $(window).scrollTop();\n\t\tconsole.log(scroll);\n\t});\n});//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvaW5kZXguanM/MWZkZiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcclxuXHJcbmZ1bmN0aW9uIG5hdmJhckFuaW1hdGlvbigpIHtcclxuXHRpZiAoJChkb2N1bWVudCkuc2Nyb2xsVG9wKCkgPCA1MCkge1xyXG5cdFx0JCgnbmF2JykuYWRkQ2xhc3MoJ25hdlBhZGRpbmcnKTtcclxuXHRcdCQoJ25hdicpLnJlbW92ZUNsYXNzKCdzY3JvbGxGdW5jJyk7XHJcblx0fSBlbHNlIHtcclxuXHRcdCQoJ25hdicpLnJlbW92ZUNsYXNzKCduYXZQYWRkaW5nJyk7XHJcblx0XHQkKCduYXYnKS5hZGRDbGFzcygnc2Nyb2xsRnVuYycpO1xyXG5cdH1cclxufVxyXG5cclxuLy8gY29udGVudCBzZWN0aW9uIHN1YnRpdGxlIGFuaW1hdGlvbiBvbiBzY3JvbGxcclxuZnVuY3Rpb24gY29udGVudFN1YnRpdGxlQW5pbWF0aW9uKCkge1xyXG5cdFxyXG5cdGxldCBwb3NpdGlvbiA9ICQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpO1xyXG5cdGxldCBuYXZfaGVpZ2h0ID0gJCgnbmF2Jykub3V0ZXJIZWlnaHQoKTtcclxuXHJcblx0JCgnc2VjdGlvbicpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRsZXQgdG9wID0gJCh0aGlzKS5vZmZzZXQoKS50b3AgLSBuYXZfaGVpZ2h0IC0gMTA7XHJcblx0XHRsZXQgYm90dG9tID0gdG9wICsgJCh0aGlzKS5vdXRlckhlaWdodCgpO1xyXG5cclxuXHRcdC8vIGFuaW1hdGUgc3VidGl0bGUgY29udGVudCBzZWN0aW9uc1xyXG5cdFx0LypcclxuXHRcdGlmIChwb3NpdGlvbiA+PSB0b3AgJiYgcG9zaXRpb24gPD0gYm90dG9tKSB7XHJcblx0XHRcdGxldCB0aGF0ID0gJCh0aGlzKTtcclxuXHRcdFx0dGhhdC5jaGlsZHJlbignLnRpdGxlJykuc2xpZGVVcCg4MDApOyBcclxuXHRcdFx0dGhhdC5jaGlsZHJlbignaHInKS5zbGlkZVVwKDgwMCk7XHJcblx0XHRcdHRoYXQuY2hpbGRyZW4oJ2EnKS5mYWRlSW4oMTAwKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGxldCB0aGF0ID0gJCh0aGlzKTtcclxuXHRcdFx0dGhhdC5jaGlsZHJlbignYScpLmZhZGVPdXQoJ2Zhc3QnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHR0aGF0LmNoaWxkcmVuKCcudGl0bGUnKS5zbGlkZURvd24oNDAwKTtcclxuXHRcdFx0XHR0aGF0LmNoaWxkcmVuKCdocicpLnNsaWRlRG93big0MDApO1xyXG5cdFx0XHR9KTsgXHJcblx0XHR9XHJcblx0XHQqL1xyXG5cdH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbnRyb1RleHRPcGFjaXR5KCkge1xyXG5cdGxldCBwb3NpdGlvbiA9ICQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpO1xyXG5cclxuXHRpZiAocG9zaXRpb24gPCAyMDApIHtcclxuXHRcdCQoJyNpbnRyb0JhY2tncm91bmRDb2xvcicpLmNzcygnb3BhY2l0eScsICcxJyk7XHJcblx0fVxyXG5cdGlmICgocG9zaXRpb24gPj0yMDApICYmIChwb3NpdGlvbiA8PSA1MjApKSB7XHJcblx0XHQvLyBub3JtYWxpemUgcG9zaXRpb25cclxuXHRcdGxldCBvcGFjaXR5ID0gKC0xICogcG9zaXRpb24gLyA4MCArIDYuNSkgLyA0O1xyXG5cdFx0JCgnI2ludHJvQmFja2dyb3VuZENvbG9yJykuY3NzKCdvcGFjaXR5JywgYCR7b3BhY2l0eX1gKVxyXG5cdH1cclxuXHRpZiAocG9zaXRpb24gPiA1MjApIHtcclxuXHRcdCQoJyNpbnRyb0JhY2tncm91bmRDb2xvcicpLmNzcygnb3BhY2l0eScsICcwJyk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiB0b3BPZlBhZ2UoKSB7XHJcblx0bGV0IHBvc2l0aW9uID0gJChkb2N1bWVudCkuc2Nyb2xsVG9wKCk7IFxyXG5cdGxldCBib3R0b20gPSAkKCcjaW50cm8nKS5vdXRlckhlaWdodCgpIC0gMTAwO1xyXG5cdGlmIChwb3NpdGlvbiA+IGJvdHRvbSkge1xyXG5cdFx0JCgnLnRvcC1vZi1wYWdlJykuc2xpZGVEb3duKDI1MCk7XHJcblx0fVxyXG5cdGVsc2Uge1xyXG5cdFx0JCgnLnRvcC1vZi1wYWdlJykuc2xpZGVVcCgyNTApO1xyXG5cdH1cclxufVxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoKCkgPT4ge1xyXG5cdC8vIGNoZWNrIGZvciBzY3JvbGwgcG9zaXRpb24gaW4gY2FzZSBvZiBicm93c2VyIHJlZnJlc2hcclxuXHRuYXZiYXJBbmltYXRpb24oKTtcclxuXHRjb250ZW50U3VidGl0bGVBbmltYXRpb24oKTtcclxuXHR0b3BPZlBhZ2UoKTtcclxuXHJcblx0Ly8gc21vb3RoIHNjcm9sbGluZ1xyXG5cdCQoJ2EnKS5jbGljayhmdW5jdGlvbihlKSB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHQkKCdodG1sLGJvZHknKS5zdG9wKCkuYW5pbWF0ZSh7XHJcblx0XHRcdHNjcm9sbFRvcDogJCh0aGlzLmhhc2gpLm9mZnNldCgpLnRvcCAtIDcwXHJcblx0XHR9LCAxMDAwKTtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9KTtcclxuXHJcblx0Ly8gc2Nyb2xsaW5nIGFuaW1hdGlvbnNcclxuXHQkKHdpbmRvdykuc2Nyb2xsKCgpID0+IHtcclxuXHRcdGludHJvVGV4dE9wYWNpdHkoKTtcclxuXHRcdG5hdmJhckFuaW1hdGlvbigpO1xyXG5cdFx0Y29udGVudFN1YnRpdGxlQW5pbWF0aW9uKCk7XHJcblx0XHR0b3BPZlBhZ2UoKTtcclxuXHR9KTtcclxuXHQvLyBkZXRlY3Qgc2Nyb2xsIHBvc2l0aW9uXHJcblx0JCh3aW5kb3cpLnNjcm9sbCgoZXZlbnQpID0+IHtcclxuXHRcdHZhciBzY3JvbGwgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcblx0XHRjb25zb2xlLmxvZyhzY3JvbGwpO1xyXG5cdH0pO1xyXG59KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9pbmRleC5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })
/******/ ]);