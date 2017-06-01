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

	$('section').each(function(index, value) {
		let top = $(this).offset().top - nav_height - 50;
		let bottom = top + $(this).outerHeight();

		if (position >= top && position <= bottom) {
			$(this).children('.joinNavbar').fadeIn(1000)
			$(this).children('.title').slideUp('fast')
			$(this).children('.addPadding').slideDown('fast')
		} else {
			$(this).children('.joinNavbar').fadeOut('fast')
			$(this).children('.title').slideDown('fast')
			$(this).children('.addPadding').slideUp('fast')
		}
	});
}


$(document).ready(() => {
	navbarAnimation();
	contentSubtitleAnimation();

	// smooth scrolling
	$('a').click(function () {
		var $href = $(this).attr('href');
		$('body').stop().animate({
			scrollTop: $($href).offset().top - 107
		}, 1500);
		return false;
	});


	// navbar animation on scroll
	$(window).scroll(() => {
		navbarAnimation();
		contentSubtitleAnimation();
	});

	// detect scroll position
	/*	
	$(window).scroll((event) => {
			var scroll = $(window).scrollTop();
			console.log(scroll);
	});
	*/
});
