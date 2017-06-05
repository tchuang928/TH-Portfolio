'use strict'

function navbarAnimation() {
	if ($(document).scrollTop() < 50) {
		$('nav').addClass('navPadding');
		$('nav').removeClass('scrollFunc');
	} else {
		$('nav').removeClass('navPadding');
		$('nav').addClass('scrollFunc');
	}
}

// content section subtitle animation on scroll
function contentSubtitleAnimation() {
	
	let position = $(document).scrollTop();
	let nav_height = $('nav').outerHeight();

	$('section').each(function() {
		let top = $(this).offset().top - nav_height - 10;
		let bottom = top + $(this).outerHeight();

		// animate subtitle content sections
		if (position >= top && position <= bottom) {
			let that = $(this);
			that.children('.title').slideUp(800); 
			that.children('hr').slideUp(800);
			that.children('a').fadeIn(100);
		} else {
			let that = $(this);
			that.children('a').fadeOut('fast', function() {
				that.children('.title').slideDown(400);
				that.children('hr').slideDown(400);
			}); 
		}
	});
}

function introTextOpacity() {
	let position = $(document).scrollTop();

	if (position < 200) {
		$('#introBackgroundColor').css('opacity', '1');
	}
	if ((position >=200) && (position <= 520)) {
		// normalize position
		let opacity = (-1 * position / 80 + 6.5) / 4;
		$('#introBackgroundColor').css('opacity', `${opacity}`)
	}
	if (position > 520) {
		$('#introBackgroundColor').css('opacity', '0');
	}
}

function topOfPage() {
	let position = $(document).scrollTop(); 
	let bottom = $('#intro').outerHeight() - 100;
	if (position > bottom) {
		$('.top-of-page').slideDown(800);
	}
	else {
		$('.top-of-page').slideUp(800);
	}
}

$(document).ready(() => {
	// check for scroll position in case of browser refresh
	navbarAnimation();
	contentSubtitleAnimation();
	topOfPage();

	// smooth scrolling
	$('a').click(function () {
		var $href = $(this).attr('href');
		$('body').stop().animate({
			scrollTop: $($href).offset().top - 70
		}, 1000);
		return false;
	});

	// scrolling animations
	$(window).scroll(() => {
		introTextOpacity();
		navbarAnimation();
		contentSubtitleAnimation();
		topOfPage();
	});
	// detect scroll position
	$(window).scroll((event) => {
		var scroll = $(window).scrollTop();
		console.log(scroll);
	});
});
