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
eval("\n\nfunction navbarAnimation() {\n\tif ($(document).scrollTop() < 50) {\n\t\t$('nav').addClass('navPadding');\n\t\t$('nav').removeClass('scrollFunc');\n\t} else {\n\t\t$('nav').removeClass('navPadding');\n\t\t$('nav').addClass('scrollFunc');\n\t}\n}\n\n// content section subtitle animation on scroll\nfunction contentSubtitleAnimation() {\n\n\tvar position = $(document).scrollTop();\n\tvar nav_height = $('nav').outerHeight();\n\n\t$('section').each(function (index, value) {\n\t\tvar top = $(this).offset().top - nav_height - 50;\n\t\tvar bottom = top + $(this).outerHeight() + 20;\n\n\t\t// animate subtitle content sections\n\t\tif (position >= top && position <= bottom) {\n\t\t\tvar that = $(this);\n\t\t\tthat.children('.title').slideUp(800);\n\t\t\tthat.children('a').fadeIn(100);\n\t\t} else {\n\t\t\tvar _that = $(this);\n\t\t\t_that.children('a').fadeOut('fast', function () {\n\t\t\t\t_that.children('.title').slideDown(400);\n\t\t\t});\n\t\t}\n\t});\n}\n\nfunction introTextOpacity() {\n\tvar position = $(document).scrollTop();\n\tif (position < 200) {\n\t\t$('#introBackgroundColor').css('opacity', '1');\n\t}\n\tif (position >= 200 && position <= 520) {\n\t\t// normalize position\n\t\tvar opacity = (-1 * position / 80 + 6.5) / 4;\n\t\t$('#introBackgroundColor').css('opacity', '' + opacity);\n\t}\n\tif (position > 520) {\n\t\t$('#introBackgroundColor').css('opacity', '0');\n\t}\n}\n\n$(document).ready(function () {\n\tnavbarAnimation();\n\tcontentSubtitleAnimation();\n\n\t// smooth scrolling\n\t$('a').click(function () {\n\t\tvar $href = $(this).attr('href');\n\t\t$('body').stop().animate({\n\t\t\tscrollTop: $($href).offset().top - 100\n\t\t}, 1000);\n\t\treturn false;\n\t});\n\n\t$(window).scroll(function () {\n\t\tintroTextOpacity();\n\t\tnavbarAnimation();\n\t\tcontentSubtitleAnimation();\n\t});\n\n\t/*\r\n if !($('.portfolio-item').mouseover()) {\r\n \t$('.img-overlay').hide();\r\n }\r\n // detect scroll position\r\n /*\r\n $(window).scroll((event) => {\r\n \tvar scroll = $(window).scrollTop();\r\n \tconsole.log(scroll);\r\n });\r\n  */\n});//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvaW5kZXguanM/MWZkZiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcclxuXHJcbmZ1bmN0aW9uIG5hdmJhckFuaW1hdGlvbigpIHtcclxuXHRpZiAoJChkb2N1bWVudCkuc2Nyb2xsVG9wKCkgPCA1MCkge1xyXG5cdFx0JCgnbmF2JykuYWRkQ2xhc3MoJ25hdlBhZGRpbmcnKTtcclxuXHRcdCQoJ25hdicpLnJlbW92ZUNsYXNzKCdzY3JvbGxGdW5jJyk7XHJcblx0fSBlbHNlIHtcclxuXHRcdCQoJ25hdicpLnJlbW92ZUNsYXNzKCduYXZQYWRkaW5nJyk7XHJcblx0XHQkKCduYXYnKS5hZGRDbGFzcygnc2Nyb2xsRnVuYycpO1xyXG5cdH1cclxufVxyXG5cclxuLy8gY29udGVudCBzZWN0aW9uIHN1YnRpdGxlIGFuaW1hdGlvbiBvbiBzY3JvbGxcclxuZnVuY3Rpb24gY29udGVudFN1YnRpdGxlQW5pbWF0aW9uKCkge1xyXG5cdFxyXG5cdGxldCBwb3NpdGlvbiA9ICQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpO1xyXG5cdGxldCBuYXZfaGVpZ2h0ID0gJCgnbmF2Jykub3V0ZXJIZWlnaHQoKTtcclxuXHJcblx0JCgnc2VjdGlvbicpLmVhY2goZnVuY3Rpb24oaW5kZXgsIHZhbHVlKSB7XHJcblx0XHRsZXQgdG9wID0gJCh0aGlzKS5vZmZzZXQoKS50b3AgLSBuYXZfaGVpZ2h0IC0gNTA7XHJcblx0XHRsZXQgYm90dG9tID0gdG9wICsgJCh0aGlzKS5vdXRlckhlaWdodCgpICsgMjA7XHJcblxyXG5cdFx0Ly8gYW5pbWF0ZSBzdWJ0aXRsZSBjb250ZW50IHNlY3Rpb25zXHJcblx0XHRpZiAocG9zaXRpb24gPj0gdG9wICYmIHBvc2l0aW9uIDw9IGJvdHRvbSkge1xyXG5cdFx0XHRsZXQgdGhhdCA9ICQodGhpcyk7XHJcblx0XHRcdHRoYXQuY2hpbGRyZW4oJy50aXRsZScpLnNsaWRlVXAoODAwKTsgXHJcblx0XHRcdHRoYXQuY2hpbGRyZW4oJ2EnKS5mYWRlSW4oMTAwKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGxldCB0aGF0ID0gJCh0aGlzKTtcclxuXHRcdFx0dGhhdC5jaGlsZHJlbignYScpLmZhZGVPdXQoJ2Zhc3QnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHR0aGF0LmNoaWxkcmVuKCcudGl0bGUnKS5zbGlkZURvd24oNDAwKTtcclxuXHRcdFx0fSk7IFxyXG5cdFx0fVxyXG5cdH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbnRyb1RleHRPcGFjaXR5KCkge1xyXG5cdGxldCBwb3NpdGlvbiA9ICQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpO1xyXG5cdGlmIChwb3NpdGlvbiA8IDIwMCkge1xyXG5cdFx0JCgnI2ludHJvQmFja2dyb3VuZENvbG9yJykuY3NzKCdvcGFjaXR5JywgJzEnKTtcclxuXHR9XHJcblx0aWYgKChwb3NpdGlvbiA+PTIwMCkgJiYgKHBvc2l0aW9uIDw9IDUyMCkpIHtcclxuXHRcdC8vIG5vcm1hbGl6ZSBwb3NpdGlvblxyXG5cdFx0bGV0IG9wYWNpdHkgPSAoLTEgKiBwb3NpdGlvbiAvIDgwICsgNi41KSAvIDQ7XHJcblx0XHQkKCcjaW50cm9CYWNrZ3JvdW5kQ29sb3InKS5jc3MoJ29wYWNpdHknLCBgJHtvcGFjaXR5fWApXHJcblx0fVxyXG5cdGlmIChwb3NpdGlvbiA+IDUyMCkge1xyXG5cdFx0JCgnI2ludHJvQmFja2dyb3VuZENvbG9yJykuY3NzKCdvcGFjaXR5JywgJzAnKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeSgoKSA9PiB7XHJcblx0bmF2YmFyQW5pbWF0aW9uKCk7XHJcblx0Y29udGVudFN1YnRpdGxlQW5pbWF0aW9uKCk7XHJcblxyXG5cdC8vIHNtb290aCBzY3JvbGxpbmdcclxuXHQkKCdhJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG5cdFx0dmFyICRocmVmID0gJCh0aGlzKS5hdHRyKCdocmVmJyk7XHJcblx0XHQkKCdib2R5Jykuc3RvcCgpLmFuaW1hdGUoe1xyXG5cdFx0XHRzY3JvbGxUb3A6ICQoJGhyZWYpLm9mZnNldCgpLnRvcCAtIDEwMFxyXG5cdFx0fSwgMTAwMCk7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fSk7XHJcblxyXG5cdCQod2luZG93KS5zY3JvbGwoKCkgPT4ge1xyXG5cdFx0aW50cm9UZXh0T3BhY2l0eSgpO1xyXG5cdFx0bmF2YmFyQW5pbWF0aW9uKCk7XHJcblx0XHRjb250ZW50U3VidGl0bGVBbmltYXRpb24oKTtcclxuXHR9KTtcclxuXHJcblx0LypcclxuXHRpZiAhKCQoJy5wb3J0Zm9saW8taXRlbScpLm1vdXNlb3ZlcigpKSB7XHJcblx0XHQkKCcuaW1nLW92ZXJsYXknKS5oaWRlKCk7XHJcblx0fVxyXG5cdC8vIGRldGVjdCBzY3JvbGwgcG9zaXRpb25cclxuXHQvKlxyXG5cdCQod2luZG93KS5zY3JvbGwoKGV2ZW50KSA9PiB7XHJcblx0XHR2YXIgc2Nyb2xsID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG5cdFx0Y29uc29sZS5sb2coc2Nyb2xsKTtcclxuXHR9KTtcclxuICAqL1xyXG59KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9pbmRleC5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFXQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })
/******/ ]);