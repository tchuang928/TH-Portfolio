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
eval("\n\nfunction navbarAnimation() {\n\tif ($(document).scrollTop() < 50) {\n\t\t$('nav').addClass('navPadding');\n\t\t$('nav').removeClass('scrollFunc');\n\t} else {\n\t\t$('nav').removeClass('navPadding');\n\t\t$('nav').addClass('scrollFunc');\n\t}\n}\n\n// content section subtitle animation on scroll\nfunction contentSubtitleAnimation() {\n\n\tvar position = $(document).scrollTop();\n\tvar nav_height = $('nav').outerHeight();\n\n\t$('section').each(function () {\n\t\tvar top = $(this).offset().top - nav_height - 10;\n\t\tvar bottom = top + $(this).outerHeight();\n\n\t\t// animate subtitle content sections\n\t\tif (position >= top && position <= bottom) {\n\t\t\tvar that = $(this);\n\t\t\tthat.children('.title').slideUp(800);\n\t\t\tthat.children('hr').slideUp(800);\n\t\t\tthat.children('a').fadeIn(100);\n\t\t} else {\n\t\t\tvar _that = $(this);\n\t\t\t_that.children('a').fadeOut('fast', function () {\n\t\t\t\t_that.children('.title').slideDown(400);\n\t\t\t\t_that.children('hr').slideDown(400);\n\t\t\t});\n\t\t}\n\t});\n}\n\nfunction introTextOpacity() {\n\tvar position = $(document).scrollTop();\n\n\tif (position < 200) {\n\t\t$('#introBackgroundColor').css('opacity', '1');\n\t}\n\tif (position >= 200 && position <= 520) {\n\t\t// normalize position\n\t\tvar opacity = (-1 * position / 80 + 6.5) / 4;\n\t\t$('#introBackgroundColor').css('opacity', '' + opacity);\n\t}\n\tif (position > 520) {\n\t\t$('#introBackgroundColor').css('opacity', '0');\n\t}\n}\n\nfunction topOfPage() {\n\tvar position = $(document).scrollTop();\n\tvar bottom = $('#intro').outerHeight() - 100;\n\tif (position > bottom) {\n\t\t$('.top-of-page').slideDown(800);\n\t} else {\n\t\t$('.top-of-page').slideUp(800);\n\t}\n}\n\n$(document).ready(function () {\n\t// check for scroll position in case of browser refresh\n\tnavbarAnimation();\n\tcontentSubtitleAnimation();\n\ttopOfPage();\n\n\t// smooth scrolling\n\t$('a').click(function () {\n\t\tvar $href = $(this).attr('href');\n\t\t$('body').stop().animate({\n\t\t\tscrollTop: $($href).offset().top - 70\n\t\t}, 1000);\n\t\treturn false;\n\t});\n\n\t// scrolling animations\n\t$(window).scroll(function () {\n\t\tintroTextOpacity();\n\t\tnavbarAnimation();\n\t\tcontentSubtitleAnimation();\n\t\ttopOfPage();\n\t});\n\t// detect scroll position\n\t$(window).scroll(function (event) {\n\t\tvar scroll = $(window).scrollTop();\n\t\tconsole.log(scroll);\n\t});\n});//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvaW5kZXguanM/MWZkZiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcclxuXHJcbmZ1bmN0aW9uIG5hdmJhckFuaW1hdGlvbigpIHtcclxuXHRpZiAoJChkb2N1bWVudCkuc2Nyb2xsVG9wKCkgPCA1MCkge1xyXG5cdFx0JCgnbmF2JykuYWRkQ2xhc3MoJ25hdlBhZGRpbmcnKTtcclxuXHRcdCQoJ25hdicpLnJlbW92ZUNsYXNzKCdzY3JvbGxGdW5jJyk7XHJcblx0fSBlbHNlIHtcclxuXHRcdCQoJ25hdicpLnJlbW92ZUNsYXNzKCduYXZQYWRkaW5nJyk7XHJcblx0XHQkKCduYXYnKS5hZGRDbGFzcygnc2Nyb2xsRnVuYycpO1xyXG5cdH1cclxufVxyXG5cclxuLy8gY29udGVudCBzZWN0aW9uIHN1YnRpdGxlIGFuaW1hdGlvbiBvbiBzY3JvbGxcclxuZnVuY3Rpb24gY29udGVudFN1YnRpdGxlQW5pbWF0aW9uKCkge1xyXG5cdFxyXG5cdGxldCBwb3NpdGlvbiA9ICQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpO1xyXG5cdGxldCBuYXZfaGVpZ2h0ID0gJCgnbmF2Jykub3V0ZXJIZWlnaHQoKTtcclxuXHJcblx0JCgnc2VjdGlvbicpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRsZXQgdG9wID0gJCh0aGlzKS5vZmZzZXQoKS50b3AgLSBuYXZfaGVpZ2h0IC0gMTA7XHJcblx0XHRsZXQgYm90dG9tID0gdG9wICsgJCh0aGlzKS5vdXRlckhlaWdodCgpO1xyXG5cclxuXHRcdC8vIGFuaW1hdGUgc3VidGl0bGUgY29udGVudCBzZWN0aW9uc1xyXG5cdFx0aWYgKHBvc2l0aW9uID49IHRvcCAmJiBwb3NpdGlvbiA8PSBib3R0b20pIHtcclxuXHRcdFx0bGV0IHRoYXQgPSAkKHRoaXMpO1xyXG5cdFx0XHR0aGF0LmNoaWxkcmVuKCcudGl0bGUnKS5zbGlkZVVwKDgwMCk7IFxyXG5cdFx0XHR0aGF0LmNoaWxkcmVuKCdocicpLnNsaWRlVXAoODAwKTtcclxuXHRcdFx0dGhhdC5jaGlsZHJlbignYScpLmZhZGVJbigxMDApO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0bGV0IHRoYXQgPSAkKHRoaXMpO1xyXG5cdFx0XHR0aGF0LmNoaWxkcmVuKCdhJykuZmFkZU91dCgnZmFzdCcsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHRoYXQuY2hpbGRyZW4oJy50aXRsZScpLnNsaWRlRG93big0MDApO1xyXG5cdFx0XHRcdHRoYXQuY2hpbGRyZW4oJ2hyJykuc2xpZGVEb3duKDQwMCk7XHJcblx0XHRcdH0pOyBcclxuXHRcdH1cclxuXHR9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW50cm9UZXh0T3BhY2l0eSgpIHtcclxuXHRsZXQgcG9zaXRpb24gPSAkKGRvY3VtZW50KS5zY3JvbGxUb3AoKTtcclxuXHJcblx0aWYgKHBvc2l0aW9uIDwgMjAwKSB7XHJcblx0XHQkKCcjaW50cm9CYWNrZ3JvdW5kQ29sb3InKS5jc3MoJ29wYWNpdHknLCAnMScpO1xyXG5cdH1cclxuXHRpZiAoKHBvc2l0aW9uID49MjAwKSAmJiAocG9zaXRpb24gPD0gNTIwKSkge1xyXG5cdFx0Ly8gbm9ybWFsaXplIHBvc2l0aW9uXHJcblx0XHRsZXQgb3BhY2l0eSA9ICgtMSAqIHBvc2l0aW9uIC8gODAgKyA2LjUpIC8gNDtcclxuXHRcdCQoJyNpbnRyb0JhY2tncm91bmRDb2xvcicpLmNzcygnb3BhY2l0eScsIGAke29wYWNpdHl9YClcclxuXHR9XHJcblx0aWYgKHBvc2l0aW9uID4gNTIwKSB7XHJcblx0XHQkKCcjaW50cm9CYWNrZ3JvdW5kQ29sb3InKS5jc3MoJ29wYWNpdHknLCAnMCcpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gdG9wT2ZQYWdlKCkge1xyXG5cdGxldCBwb3NpdGlvbiA9ICQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpOyBcclxuXHRsZXQgYm90dG9tID0gJCgnI2ludHJvJykub3V0ZXJIZWlnaHQoKSAtIDEwMDtcclxuXHRpZiAocG9zaXRpb24gPiBib3R0b20pIHtcclxuXHRcdCQoJy50b3Atb2YtcGFnZScpLnNsaWRlRG93big4MDApO1xyXG5cdH1cclxuXHRlbHNlIHtcclxuXHRcdCQoJy50b3Atb2YtcGFnZScpLnNsaWRlVXAoODAwKTtcclxuXHR9XHJcbn1cclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KCgpID0+IHtcclxuXHQvLyBjaGVjayBmb3Igc2Nyb2xsIHBvc2l0aW9uIGluIGNhc2Ugb2YgYnJvd3NlciByZWZyZXNoXHJcblx0bmF2YmFyQW5pbWF0aW9uKCk7XHJcblx0Y29udGVudFN1YnRpdGxlQW5pbWF0aW9uKCk7XHJcblx0dG9wT2ZQYWdlKCk7XHJcblxyXG5cdC8vIHNtb290aCBzY3JvbGxpbmdcclxuXHQkKCdhJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG5cdFx0dmFyICRocmVmID0gJCh0aGlzKS5hdHRyKCdocmVmJyk7XHJcblx0XHQkKCdib2R5Jykuc3RvcCgpLmFuaW1hdGUoe1xyXG5cdFx0XHRzY3JvbGxUb3A6ICQoJGhyZWYpLm9mZnNldCgpLnRvcCAtIDcwXHJcblx0XHR9LCAxMDAwKTtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9KTtcclxuXHJcblx0Ly8gc2Nyb2xsaW5nIGFuaW1hdGlvbnNcclxuXHQkKHdpbmRvdykuc2Nyb2xsKCgpID0+IHtcclxuXHRcdGludHJvVGV4dE9wYWNpdHkoKTtcclxuXHRcdG5hdmJhckFuaW1hdGlvbigpO1xyXG5cdFx0Y29udGVudFN1YnRpdGxlQW5pbWF0aW9uKCk7XHJcblx0XHR0b3BPZlBhZ2UoKTtcclxuXHR9KTtcclxuXHQvLyBkZXRlY3Qgc2Nyb2xsIHBvc2l0aW9uXHJcblx0JCh3aW5kb3cpLnNjcm9sbCgoZXZlbnQpID0+IHtcclxuXHRcdHZhciBzY3JvbGwgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcblx0XHRjb25zb2xlLmxvZyhzY3JvbGwpO1xyXG5cdH0pO1xyXG59KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9pbmRleC5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })
/******/ ]);