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
eval("\n\nfunction navbarAnimation() {\n\tif ($(document).scrollTop() < 50) {\n\t\t$('nav').addClass('navPadding');\n\t\t$('nav').removeClass('scrollFunc');\n\t} else {\n\t\t$('nav').removeClass('navPadding');\n\t\t$('nav').addClass('scrollFunc');\n\t}\n}\n\n// content section subtitle animation on scroll\nfunction contentSubtitleAnimation() {\n\n\tvar position = $(document).scrollTop();\n\tvar nav_height = $('nav').outerHeight();\n\n\t$('section').each(function () {\n\t\tvar top = $(this).offset().top - nav_height - 10;\n\t\tvar bottom = top + $(this).outerHeight();\n\n\t\t// animate subtitle content sections\n\t\t/*\r\n  if (position >= top && position <= bottom) {\r\n  \tlet that = $(this);\r\n  \tthat.children('.title').slideUp(800); \r\n  \tthat.children('hr').slideUp(800);\r\n  \tthat.children('a').fadeIn(100);\r\n  } else {\r\n  \tlet that = $(this);\r\n  \tthat.children('a').fadeOut('fast', function() {\r\n  \t\tthat.children('.title').slideDown(400);\r\n  \t\tthat.children('hr').slideDown(400);\r\n  \t}); \r\n  }\r\n  */\n\t});\n}\n\nfunction introTextOpacity() {\n\tvar position = $(document).scrollTop();\n\n\tif (position < 200) {\n\t\t$('#introBackgroundColor').css('opacity', '1');\n\t}\n\tif (position >= 200 && position <= 520) {\n\t\t// normalize position\n\t\tvar opacity = (-1 * position / 80 + 6.5) / 4;\n\t\t$('#introBackgroundColor').css('opacity', '' + opacity);\n\t}\n\tif (position > 520) {\n\t\t$('#introBackgroundColor').css('opacity', '0');\n\t}\n}\n\nfunction topOfPage() {\n\tvar position = $(document).scrollTop();\n\tvar bottom = $('#intro').outerHeight() - 100;\n\tif (position > bottom) {\n\t\t$('.top-of-page').slideDown(250);\n\t} else {\n\t\t$('.top-of-page').slideUp(250);\n\t}\n}\n\n$(document).ready(function () {\n\n\t// check for scroll position in case of browser refresh\n\tnavbarAnimation();\n\tcontentSubtitleAnimation();\n\ttopOfPage();\n\n\t// smooth scrolling\n\t$('a').click(function (e) {\n\t\te.preventDefault();\n\t\t$('html,body').stop().animate({\n\t\t\tscrollTop: $(this.hash).offset().top - 70\n\t\t}, 1000);\n\t\treturn false;\n\t});\n\n\t// scrolling animations\n\t$(window).scroll(function () {\n\t\tintroTextOpacity();\n\t\tnavbarAnimation();\n\t\tcontentSubtitleAnimation();\n\t\ttopOfPage();\n\t});\n\t// detect scroll position\n\t$(window).scroll(function (event) {\n\t\tvar scroll = $(window).scrollTop();\n\t\tconsole.log(scroll);\n\t});\n});\n\n// contact form\n$(document).ready(function () {\n\t// Test for placeholder support\n\t$.support.placeholder = function () {\n\t\tvar i = document.createElement('input');\n\t\treturn 'placeholder' in i;\n\t}();\n\n\t// Hide labels by default if placeholders are supported\n\tif ($.support.placeholder) {\n\t\t$('.form-label').each(function () {\n\t\t\t$(this).addClass('js-hide-label');\n\t\t});\n\n\t\t// Code for adding/removing classes here\n\t\t$('.form-group').find('input, textarea').on('keyup blur focus', function (e) {\n\n\t\t\t// Cache our selectors\n\t\t\tvar $this = $(this),\n\t\t\t    $parent = $this.parent().find(\"label\");\n\n\t\t\tif (e.type == 'keyup') {\n\t\t\t\tif ($this.val() == '') {\n\t\t\t\t\t$parent.addClass('js-hide-label');\n\t\t\t\t} else {\n\t\t\t\t\t$parent.removeClass('js-hide-label');\n\t\t\t\t}\n\t\t\t} else if (e.type == 'blur') {\n\t\t\t\tif ($this.val() == '') {\n\t\t\t\t\t$parent.addClass('js-hide-label');\n\t\t\t\t} else {\n\t\t\t\t\t$parent.removeClass('js-hide-label').addClass('js-unhighlight-label');\n\t\t\t\t}\n\t\t\t} else if (e.type == 'focus') {\n\t\t\t\tif ($this.val() !== '') {\n\t\t\t\t\t$parent.removeClass('js-unhighlight-label');\n\t\t\t\t}\n\t\t\t}\n\t\t});\n\t}\n});//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvaW5kZXguanM/MWZkZiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcclxuXHJcbmZ1bmN0aW9uIG5hdmJhckFuaW1hdGlvbigpIHtcclxuXHRpZiAoJChkb2N1bWVudCkuc2Nyb2xsVG9wKCkgPCA1MCkge1xyXG5cdFx0JCgnbmF2JykuYWRkQ2xhc3MoJ25hdlBhZGRpbmcnKTtcclxuXHRcdCQoJ25hdicpLnJlbW92ZUNsYXNzKCdzY3JvbGxGdW5jJyk7XHJcblx0fSBlbHNlIHtcclxuXHRcdCQoJ25hdicpLnJlbW92ZUNsYXNzKCduYXZQYWRkaW5nJyk7XHJcblx0XHQkKCduYXYnKS5hZGRDbGFzcygnc2Nyb2xsRnVuYycpO1xyXG5cdH1cclxufVxyXG5cclxuLy8gY29udGVudCBzZWN0aW9uIHN1YnRpdGxlIGFuaW1hdGlvbiBvbiBzY3JvbGxcclxuZnVuY3Rpb24gY29udGVudFN1YnRpdGxlQW5pbWF0aW9uKCkge1xyXG5cdFxyXG5cdGxldCBwb3NpdGlvbiA9ICQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpO1xyXG5cdGxldCBuYXZfaGVpZ2h0ID0gJCgnbmF2Jykub3V0ZXJIZWlnaHQoKTtcclxuXHJcblx0JCgnc2VjdGlvbicpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRsZXQgdG9wID0gJCh0aGlzKS5vZmZzZXQoKS50b3AgLSBuYXZfaGVpZ2h0IC0gMTA7XHJcblx0XHRsZXQgYm90dG9tID0gdG9wICsgJCh0aGlzKS5vdXRlckhlaWdodCgpO1xyXG5cclxuXHRcdC8vIGFuaW1hdGUgc3VidGl0bGUgY29udGVudCBzZWN0aW9uc1xyXG5cdFx0LypcclxuXHRcdGlmIChwb3NpdGlvbiA+PSB0b3AgJiYgcG9zaXRpb24gPD0gYm90dG9tKSB7XHJcblx0XHRcdGxldCB0aGF0ID0gJCh0aGlzKTtcclxuXHRcdFx0dGhhdC5jaGlsZHJlbignLnRpdGxlJykuc2xpZGVVcCg4MDApOyBcclxuXHRcdFx0dGhhdC5jaGlsZHJlbignaHInKS5zbGlkZVVwKDgwMCk7XHJcblx0XHRcdHRoYXQuY2hpbGRyZW4oJ2EnKS5mYWRlSW4oMTAwKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGxldCB0aGF0ID0gJCh0aGlzKTtcclxuXHRcdFx0dGhhdC5jaGlsZHJlbignYScpLmZhZGVPdXQoJ2Zhc3QnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHR0aGF0LmNoaWxkcmVuKCcudGl0bGUnKS5zbGlkZURvd24oNDAwKTtcclxuXHRcdFx0XHR0aGF0LmNoaWxkcmVuKCdocicpLnNsaWRlRG93big0MDApO1xyXG5cdFx0XHR9KTsgXHJcblx0XHR9XHJcblx0XHQqL1xyXG5cdH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbnRyb1RleHRPcGFjaXR5KCkge1xyXG5cdGxldCBwb3NpdGlvbiA9ICQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpO1xyXG5cclxuXHRpZiAocG9zaXRpb24gPCAyMDApIHtcclxuXHRcdCQoJyNpbnRyb0JhY2tncm91bmRDb2xvcicpLmNzcygnb3BhY2l0eScsICcxJyk7XHJcblx0fVxyXG5cdGlmICgocG9zaXRpb24gPj0yMDApICYmIChwb3NpdGlvbiA8PSA1MjApKSB7XHJcblx0XHQvLyBub3JtYWxpemUgcG9zaXRpb25cclxuXHRcdGxldCBvcGFjaXR5ID0gKC0xICogcG9zaXRpb24gLyA4MCArIDYuNSkgLyA0O1xyXG5cdFx0JCgnI2ludHJvQmFja2dyb3VuZENvbG9yJykuY3NzKCdvcGFjaXR5JywgYCR7b3BhY2l0eX1gKVxyXG5cdH1cclxuXHRpZiAocG9zaXRpb24gPiA1MjApIHtcclxuXHRcdCQoJyNpbnRyb0JhY2tncm91bmRDb2xvcicpLmNzcygnb3BhY2l0eScsICcwJyk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiB0b3BPZlBhZ2UoKSB7XHJcblx0bGV0IHBvc2l0aW9uID0gJChkb2N1bWVudCkuc2Nyb2xsVG9wKCk7IFxyXG5cdGxldCBib3R0b20gPSAkKCcjaW50cm8nKS5vdXRlckhlaWdodCgpIC0gMTAwO1xyXG5cdGlmIChwb3NpdGlvbiA+IGJvdHRvbSkge1xyXG5cdFx0JCgnLnRvcC1vZi1wYWdlJykuc2xpZGVEb3duKDI1MCk7XHJcblx0fVxyXG5cdGVsc2Uge1xyXG5cdFx0JCgnLnRvcC1vZi1wYWdlJykuc2xpZGVVcCgyNTApO1xyXG5cdH1cclxufVxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoKCkgPT4ge1xyXG5cclxuXHQvLyBjaGVjayBmb3Igc2Nyb2xsIHBvc2l0aW9uIGluIGNhc2Ugb2YgYnJvd3NlciByZWZyZXNoXHJcblx0bmF2YmFyQW5pbWF0aW9uKCk7XHJcblx0Y29udGVudFN1YnRpdGxlQW5pbWF0aW9uKCk7XHJcblx0dG9wT2ZQYWdlKCk7XHJcblxyXG5cdC8vIHNtb290aCBzY3JvbGxpbmdcclxuXHQkKCdhJykuY2xpY2soZnVuY3Rpb24oZSkge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0JCgnaHRtbCxib2R5Jykuc3RvcCgpLmFuaW1hdGUoe1xyXG5cdFx0XHRzY3JvbGxUb3A6ICQodGhpcy5oYXNoKS5vZmZzZXQoKS50b3AgLSA3MFxyXG5cdFx0fSwgMTAwMCk7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fSk7XHJcblxyXG5cdC8vIHNjcm9sbGluZyBhbmltYXRpb25zXHJcblx0JCh3aW5kb3cpLnNjcm9sbCgoKSA9PiB7XHJcblx0XHRpbnRyb1RleHRPcGFjaXR5KCk7XHJcblx0XHRuYXZiYXJBbmltYXRpb24oKTtcclxuXHRcdGNvbnRlbnRTdWJ0aXRsZUFuaW1hdGlvbigpO1xyXG5cdFx0dG9wT2ZQYWdlKCk7XHJcblx0fSk7XHJcblx0Ly8gZGV0ZWN0IHNjcm9sbCBwb3NpdGlvblxyXG5cdCQod2luZG93KS5zY3JvbGwoKGV2ZW50KSA9PiB7XHJcblx0XHR2YXIgc2Nyb2xsID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG5cdFx0Y29uc29sZS5sb2coc2Nyb2xsKTtcclxuXHR9KTtcclxufSk7XHJcblxyXG4vLyBjb250YWN0IGZvcm1cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcblx0Ly8gVGVzdCBmb3IgcGxhY2Vob2xkZXIgc3VwcG9ydFxyXG4gICAgJC5zdXBwb3J0LnBsYWNlaG9sZGVyID0gKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIHJldHVybiAncGxhY2Vob2xkZXInIGluIGk7XHJcbiAgICB9KSgpO1xyXG5cclxuICAgIC8vIEhpZGUgbGFiZWxzIGJ5IGRlZmF1bHQgaWYgcGxhY2Vob2xkZXJzIGFyZSBzdXBwb3J0ZWRcclxuICAgIGlmKCQuc3VwcG9ydC5wbGFjZWhvbGRlcikge1xyXG4gICAgICAgICQoJy5mb3JtLWxhYmVsJykuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdqcy1oaWRlLWxhYmVsJyk7XHJcbiAgICAgICAgfSk7ICBcclxuXHJcbiAgICAgICAgLy8gQ29kZSBmb3IgYWRkaW5nL3JlbW92aW5nIGNsYXNzZXMgaGVyZVxyXG4gICAgICAgICQoJy5mb3JtLWdyb3VwJykuZmluZCgnaW5wdXQsIHRleHRhcmVhJykub24oJ2tleXVwIGJsdXIgZm9jdXMnLCBmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIENhY2hlIG91ciBzZWxlY3RvcnNcclxuICAgICAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgICAgICRwYXJlbnQgPSAkdGhpcy5wYXJlbnQoKS5maW5kKFwibGFiZWxcIik7XHJcblxyXG4gICAgICAgICAgICBpZiAoZS50eXBlID09ICdrZXl1cCcpIHtcclxuICAgICAgICAgICAgICAgIGlmKCAkdGhpcy52YWwoKSA9PSAnJyApIHtcclxuICAgICAgICAgICAgICAgICAgICAkcGFyZW50LmFkZENsYXNzKCdqcy1oaWRlLWxhYmVsJyk7IFxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAkcGFyZW50LnJlbW92ZUNsYXNzKCdqcy1oaWRlLWxhYmVsJyk7ICAgXHJcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGUudHlwZSA9PSAnYmx1cicpIHtcclxuICAgICAgICAgICAgICAgIGlmKCAkdGhpcy52YWwoKSA9PSAnJyApIHtcclxuICAgICAgICAgICAgICAgICAgICAkcGFyZW50LmFkZENsYXNzKCdqcy1oaWRlLWxhYmVsJyk7XHJcbiAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHBhcmVudC5yZW1vdmVDbGFzcygnanMtaGlkZS1sYWJlbCcpLmFkZENsYXNzKCdqcy11bmhpZ2hsaWdodC1sYWJlbCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICBlbHNlIGlmIChlLnR5cGUgPT0gJ2ZvY3VzJykge1xyXG4gICAgICAgICAgICAgICAgaWYoICR0aGlzLnZhbCgpICE9PSAnJyApIHtcclxuICAgICAgICAgICAgICAgICAgICAkcGFyZW50LnJlbW92ZUNsYXNzKCdqcy11bmhpZ2hsaWdodC1sYWJlbCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IFxyXG59KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9pbmRleC5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9");

/***/ })
/******/ ]);