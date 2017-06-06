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
eval("\n\nfunction navbarAnimation() {\n\tif ($(document).scrollTop() < 50) {\n\t\t$('nav').addClass('navPadding');\n\t\t$('nav').removeClass('scrollFunc');\n\t} else {\n\t\t$('nav').removeClass('navPadding');\n\t\t$('nav').addClass('scrollFunc');\n\t}\n}\n\n// content section subtitle animation on scroll\nfunction contentSubtitleAnimation() {\n\n\tvar position = $(document).scrollTop();\n\tvar nav_height = $('nav').outerHeight();\n\n\t$('section').each(function () {\n\t\tvar top = $(this).offset().top - nav_height - 10;\n\t\tvar bottom = top + $(this).outerHeight();\n\n\t\t// animate subtitle content sections\n\t\t/*\r\n  if (position >= top && position <= bottom) {\r\n  \tlet that = $(this);\r\n  \tthat.children('.title').slideUp(800); \r\n  \tthat.children('hr').slideUp(800);\r\n  \tthat.children('a').fadeIn(100);\r\n  } else {\r\n  \tlet that = $(this);\r\n  \tthat.children('a').fadeOut('fast', function() {\r\n  \t\tthat.children('.title').slideDown(400);\r\n  \t\tthat.children('hr').slideDown(400);\r\n  \t}); \r\n  }\r\n  */\n\t});\n}\n\nfunction introTextOpacity() {\n\tvar position = $(document).scrollTop();\n\n\tif (position < 200) {\n\t\t$('#introBackgroundColor').css('opacity', '1');\n\t}\n\tif (position >= 200 && position <= 520) {\n\t\t// normalize position\n\t\tvar opacity = (-1 * position / 80 + 6.5) / 4;\n\t\t$('#introBackgroundColor').css('opacity', '' + opacity);\n\t}\n\tif (position > 520) {\n\t\t$('#introBackgroundColor').css('opacity', '0');\n\t}\n}\n\nfunction topOfPage() {\n\tvar position = $(document).scrollTop();\n\tvar bottom = $('#intro').outerHeight() - 100;\n\tif (position > bottom) {\n\t\t$('.top-of-page').slideDown(250);\n\t} else {\n\t\t$('.top-of-page').slideUp(250);\n\t}\n}\n\n$(document).ready(function () {\n\n\t// check for scroll position in case of browser refresh\n\tnavbarAnimation();\n\tcontentSubtitleAnimation();\n\ttopOfPage();\n\n\t// smooth scrolling\n\t$('a').click(function (e) {\n\t\tif (this.hash !== \"\") {\n\t\t\te.preventDefault();\n\t\t\tvar hash = this.hash;\n\t\t\t$('html, body').stop().animate({\n\t\t\t\tscrollTop: $(hash).offset().top - 70\n\t\t\t}, 1000, function () {\n\t\t\t\twindow.location.hash = hash;\n\t\t\t});\n\t\t}\n\t});\n\n\t// scrolling animations\n\t$(window).scroll(function () {\n\t\tintroTextOpacity();\n\t\tnavbarAnimation();\n\t\tcontentSubtitleAnimation();\n\t\ttopOfPage();\n\t});\n\t/*\r\n // detect scroll position\r\n $(window).scroll((event) => {\r\n \tvar scroll = $(window).scrollTop();\r\n \tconsole.log(scroll);\r\n });\r\n */\n});\n\n// contact form animation\n$(document).ready(function () {\n\t// Test for placeholder support\n\t$.support.placeholder = function () {\n\t\tvar i = document.createElement('input');\n\t\treturn 'placeholder' in i;\n\t}();\n\n\t// Hide labels by default if placeholders are supported\n\tif ($.support.placeholder) {\n\t\t$('.form-label').each(function () {\n\t\t\t$(this).addClass('js-hide-label');\n\t\t});\n\n\t\t// Code for adding/removing classes here\n\t\t$('.form-group').find('input, textarea').on('keyup blur focus', function (e) {\n\n\t\t\t// Cache our selectors\n\t\t\tvar $this = $(this),\n\t\t\t    $parent = $this.parent().find(\"label\");\n\n\t\t\tif (e.type == 'keyup') {\n\t\t\t\tif ($this.val() == '') {\n\t\t\t\t\t$parent.addClass('js-hide-label');\n\t\t\t\t} else {\n\t\t\t\t\t$parent.removeClass('js-hide-label');\n\t\t\t\t}\n\t\t\t} else if (e.type == 'blur') {\n\t\t\t\tif ($this.val() == '') {\n\t\t\t\t\t$parent.addClass('js-hide-label');\n\t\t\t\t} else {\n\t\t\t\t\t$parent.removeClass('js-hide-label').addClass('js-unhighlight-label');\n\t\t\t\t}\n\t\t\t} else if (e.type == 'focus') {\n\t\t\t\tif ($this.val() !== '') {\n\t\t\t\t\t$parent.removeClass('js-unhighlight-label');\n\t\t\t\t}\n\t\t\t}\n\t\t});\n\t}\n});\n\n(function () {\n\t$(document).ready(function () {\n\t\treturn $('#contact-form').submit(function (e) {\n\t\t\tvar email, message, name;\n\t\t\tname = document.getElementById('name');\n\t\t\temail = document.getElementById('email');\n\t\t\tsubject = document.getElementById('subject');\n\t\t\tmessage = document.getElementById('message');\n\t\t\tif (!name.value || !email.value || !subject.value || !message.value) {\n\t\t\t\talert.error('Please check your entries');\n\t\t\t\treturn false;\n\t\t\t} else {\n\t\t\t\t$.ajax({\n\t\t\t\t\tmethod: 'POST',\n\t\t\t\t\turl: '//formspree.io/tchuang.928@gmail.com',\n\t\t\t\t\tdata: $('#contact-form').serialize(),\n\t\t\t\t\tdatatype: 'json'\n\t\t\t\t});\n\t\t\t\te.preventDefault();\n\t\t\t\t$(this).get(0).reset();\n\t\t\t\treturn alert.success('Message sent');\n\t\t\t}\n\t\t});\n\t});\n}).call(undefined);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvaW5kZXguanM/MWZkZiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcclxuXHJcbmZ1bmN0aW9uIG5hdmJhckFuaW1hdGlvbigpIHtcclxuXHRpZiAoJChkb2N1bWVudCkuc2Nyb2xsVG9wKCkgPCA1MCkge1xyXG5cdFx0JCgnbmF2JykuYWRkQ2xhc3MoJ25hdlBhZGRpbmcnKTtcclxuXHRcdCQoJ25hdicpLnJlbW92ZUNsYXNzKCdzY3JvbGxGdW5jJyk7XHJcblx0fSBlbHNlIHtcclxuXHRcdCQoJ25hdicpLnJlbW92ZUNsYXNzKCduYXZQYWRkaW5nJyk7XHJcblx0XHQkKCduYXYnKS5hZGRDbGFzcygnc2Nyb2xsRnVuYycpO1xyXG5cdH1cclxufVxyXG5cclxuLy8gY29udGVudCBzZWN0aW9uIHN1YnRpdGxlIGFuaW1hdGlvbiBvbiBzY3JvbGxcclxuZnVuY3Rpb24gY29udGVudFN1YnRpdGxlQW5pbWF0aW9uKCkge1xyXG5cdFxyXG5cdGxldCBwb3NpdGlvbiA9ICQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpO1xyXG5cdGxldCBuYXZfaGVpZ2h0ID0gJCgnbmF2Jykub3V0ZXJIZWlnaHQoKTtcclxuXHJcblx0JCgnc2VjdGlvbicpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRsZXQgdG9wID0gJCh0aGlzKS5vZmZzZXQoKS50b3AgLSBuYXZfaGVpZ2h0IC0gMTA7XHJcblx0XHRsZXQgYm90dG9tID0gdG9wICsgJCh0aGlzKS5vdXRlckhlaWdodCgpO1xyXG5cclxuXHRcdC8vIGFuaW1hdGUgc3VidGl0bGUgY29udGVudCBzZWN0aW9uc1xyXG5cdFx0LypcclxuXHRcdGlmIChwb3NpdGlvbiA+PSB0b3AgJiYgcG9zaXRpb24gPD0gYm90dG9tKSB7XHJcblx0XHRcdGxldCB0aGF0ID0gJCh0aGlzKTtcclxuXHRcdFx0dGhhdC5jaGlsZHJlbignLnRpdGxlJykuc2xpZGVVcCg4MDApOyBcclxuXHRcdFx0dGhhdC5jaGlsZHJlbignaHInKS5zbGlkZVVwKDgwMCk7XHJcblx0XHRcdHRoYXQuY2hpbGRyZW4oJ2EnKS5mYWRlSW4oMTAwKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGxldCB0aGF0ID0gJCh0aGlzKTtcclxuXHRcdFx0dGhhdC5jaGlsZHJlbignYScpLmZhZGVPdXQoJ2Zhc3QnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHR0aGF0LmNoaWxkcmVuKCcudGl0bGUnKS5zbGlkZURvd24oNDAwKTtcclxuXHRcdFx0XHR0aGF0LmNoaWxkcmVuKCdocicpLnNsaWRlRG93big0MDApO1xyXG5cdFx0XHR9KTsgXHJcblx0XHR9XHJcblx0XHQqL1xyXG5cdH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbnRyb1RleHRPcGFjaXR5KCkge1xyXG5cdGxldCBwb3NpdGlvbiA9ICQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpO1xyXG5cclxuXHRpZiAocG9zaXRpb24gPCAyMDApIHtcclxuXHRcdCQoJyNpbnRyb0JhY2tncm91bmRDb2xvcicpLmNzcygnb3BhY2l0eScsICcxJyk7XHJcblx0fVxyXG5cdGlmICgocG9zaXRpb24gPj0yMDApICYmIChwb3NpdGlvbiA8PSA1MjApKSB7XHJcblx0XHQvLyBub3JtYWxpemUgcG9zaXRpb25cclxuXHRcdGxldCBvcGFjaXR5ID0gKC0xICogcG9zaXRpb24gLyA4MCArIDYuNSkgLyA0O1xyXG5cdFx0JCgnI2ludHJvQmFja2dyb3VuZENvbG9yJykuY3NzKCdvcGFjaXR5JywgYCR7b3BhY2l0eX1gKVxyXG5cdH1cclxuXHRpZiAocG9zaXRpb24gPiA1MjApIHtcclxuXHRcdCQoJyNpbnRyb0JhY2tncm91bmRDb2xvcicpLmNzcygnb3BhY2l0eScsICcwJyk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiB0b3BPZlBhZ2UoKSB7XHJcblx0bGV0IHBvc2l0aW9uID0gJChkb2N1bWVudCkuc2Nyb2xsVG9wKCk7IFxyXG5cdGxldCBib3R0b20gPSAkKCcjaW50cm8nKS5vdXRlckhlaWdodCgpIC0gMTAwO1xyXG5cdGlmIChwb3NpdGlvbiA+IGJvdHRvbSkge1xyXG5cdFx0JCgnLnRvcC1vZi1wYWdlJykuc2xpZGVEb3duKDI1MCk7XHJcblx0fVxyXG5cdGVsc2Uge1xyXG5cdFx0JCgnLnRvcC1vZi1wYWdlJykuc2xpZGVVcCgyNTApO1xyXG5cdH1cclxufVxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoKCkgPT4ge1xyXG5cclxuXHQvLyBjaGVjayBmb3Igc2Nyb2xsIHBvc2l0aW9uIGluIGNhc2Ugb2YgYnJvd3NlciByZWZyZXNoXHJcblx0bmF2YmFyQW5pbWF0aW9uKCk7XHJcblx0Y29udGVudFN1YnRpdGxlQW5pbWF0aW9uKCk7XHJcblx0dG9wT2ZQYWdlKCk7XHJcblxyXG5cdC8vIHNtb290aCBzY3JvbGxpbmdcclxuXHQkKCdhJykuY2xpY2soZnVuY3Rpb24oZSkge1xyXG5cdFx0aWYgKHRoaXMuaGFzaCAhPT0gXCJcIikge1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdHZhciBoYXNoID0gdGhpcy5oYXNoO1xyXG5cdFx0XHQkKCdodG1sLCBib2R5Jykuc3RvcCgpLmFuaW1hdGUoe1xyXG5cdFx0XHRcdHNjcm9sbFRvcDogJChoYXNoKS5vZmZzZXQoKS50b3AgLSA3MFxyXG5cdFx0XHR9LCAxMDAwLCAoKSA9PiB7XHJcblx0XHRcdFx0d2luZG93LmxvY2F0aW9uLmhhc2ggPSBoYXNoO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHJcblx0Ly8gc2Nyb2xsaW5nIGFuaW1hdGlvbnNcclxuXHQkKHdpbmRvdykuc2Nyb2xsKCgpID0+IHtcclxuXHRcdGludHJvVGV4dE9wYWNpdHkoKTtcclxuXHRcdG5hdmJhckFuaW1hdGlvbigpO1xyXG5cdFx0Y29udGVudFN1YnRpdGxlQW5pbWF0aW9uKCk7XHJcblx0XHR0b3BPZlBhZ2UoKTtcclxuXHR9KTtcclxuXHQvKlxyXG5cdC8vIGRldGVjdCBzY3JvbGwgcG9zaXRpb25cclxuXHQkKHdpbmRvdykuc2Nyb2xsKChldmVudCkgPT4ge1xyXG5cdFx0dmFyIHNjcm9sbCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuXHRcdGNvbnNvbGUubG9nKHNjcm9sbCk7XHJcblx0fSk7XHJcblx0Ki9cclxufSk7XHJcblxyXG4vLyBjb250YWN0IGZvcm0gYW5pbWF0aW9uXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cdC8vIFRlc3QgZm9yIHBsYWNlaG9sZGVyIHN1cHBvcnRcclxuICAgICQuc3VwcG9ydC5wbGFjZWhvbGRlciA9IChmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciBpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICByZXR1cm4gJ3BsYWNlaG9sZGVyJyBpbiBpO1xyXG4gICAgfSkoKTtcclxuXHJcbiAgICAvLyBIaWRlIGxhYmVscyBieSBkZWZhdWx0IGlmIHBsYWNlaG9sZGVycyBhcmUgc3VwcG9ydGVkXHJcbiAgICBpZigkLnN1cHBvcnQucGxhY2Vob2xkZXIpIHtcclxuICAgICAgICAkKCcuZm9ybS1sYWJlbCcpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnanMtaGlkZS1sYWJlbCcpO1xyXG4gICAgICAgIH0pOyAgXHJcblxyXG4gICAgICAgIC8vIENvZGUgZm9yIGFkZGluZy9yZW1vdmluZyBjbGFzc2VzIGhlcmVcclxuICAgICAgICAkKCcuZm9ybS1ncm91cCcpLmZpbmQoJ2lucHV0LCB0ZXh0YXJlYScpLm9uKCdrZXl1cCBibHVyIGZvY3VzJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBDYWNoZSBvdXIgc2VsZWN0b3JzXHJcbiAgICAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyksXHJcbiAgICAgICAgICAgICAgICAkcGFyZW50ID0gJHRoaXMucGFyZW50KCkuZmluZChcImxhYmVsXCIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGUudHlwZSA9PSAna2V5dXAnKSB7XHJcbiAgICAgICAgICAgICAgICBpZiggJHRoaXMudmFsKCkgPT0gJycgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHBhcmVudC5hZGRDbGFzcygnanMtaGlkZS1sYWJlbCcpOyBcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHBhcmVudC5yZW1vdmVDbGFzcygnanMtaGlkZS1sYWJlbCcpOyAgIFxyXG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICBlbHNlIGlmIChlLnR5cGUgPT0gJ2JsdXInKSB7XHJcbiAgICAgICAgICAgICAgICBpZiggJHRoaXMudmFsKCkgPT0gJycgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHBhcmVudC5hZGRDbGFzcygnanMtaGlkZS1sYWJlbCcpO1xyXG4gICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICRwYXJlbnQucmVtb3ZlQ2xhc3MoJ2pzLWhpZGUtbGFiZWwnKS5hZGRDbGFzcygnanMtdW5oaWdobGlnaHQtbGFiZWwnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgZWxzZSBpZiAoZS50eXBlID09ICdmb2N1cycpIHtcclxuICAgICAgICAgICAgICAgIGlmKCAkdGhpcy52YWwoKSAhPT0gJycgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHBhcmVudC5yZW1vdmVDbGFzcygnanMtdW5oaWdobGlnaHQtbGFiZWwnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBcclxufSk7XHJcblxyXG4oZnVuY3Rpb24oKSB7XHJcbiAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gJCgnI2NvbnRhY3QtZm9ybScpLnN1Ym1pdChmdW5jdGlvbihlKSB7XHJcbiAgICAgIHZhciBlbWFpbCwgbWVzc2FnZSwgbmFtZTtcclxuICAgICAgbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lJyk7XHJcbiAgICAgIGVtYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VtYWlsJyk7XHJcblx0XHRcdHN1YmplY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3ViamVjdCcpO1xyXG4gICAgICBtZXNzYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lc3NhZ2UnKTtcclxuICAgICAgaWYgKCFuYW1lLnZhbHVlIHx8ICFlbWFpbC52YWx1ZSB8fCAhc3ViamVjdC52YWx1ZSB8fCAhbWVzc2FnZS52YWx1ZSkge1xyXG4gICAgICAgIGFsZXJ0LmVycm9yKCdQbGVhc2UgY2hlY2sgeW91ciBlbnRyaWVzJyk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgIHVybDogJy8vZm9ybXNwcmVlLmlvL3RjaHVhbmcuOTI4QGdtYWlsLmNvbScsXHJcbiAgICAgICAgICBkYXRhOiAkKCcjY29udGFjdC1mb3JtJykuc2VyaWFsaXplKCksXHJcbiAgICAgICAgICBkYXRhdHlwZTogJ2pzb24nXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICQodGhpcykuZ2V0KDApLnJlc2V0KCk7XHJcbiAgICAgICAgcmV0dXJuIGFsZXJ0LnN1Y2Nlc3MoJ01lc3NhZ2Ugc2VudCcpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbn0pLmNhbGwodGhpcyk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvaW5kZXguanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })
/******/ ]);