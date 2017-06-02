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
			let that = $(this);
			that.children('.title').slideUp(800); 
			that.children('a').fadeIn(100);
		} else {
			let that = $(this);
			that.children('a').fadeOut('fast', function() {
				that.children('.title').slideDown(10);
			}); 
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
			scrollTop: $($href).offset().top - 100
		}, 1000);
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
