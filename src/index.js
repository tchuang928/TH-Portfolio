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

function navbarAboutActive() {
	let position = $(document).scrollTop();
	let nav_height = $('nav').outerHeight();

	let aboutSection = $('#aboutLink');
		let top = aboutSection.offset().top - nav_height - 10;
		let bottom = top + aboutSection.outerHeight();

		if (position >= top && position <= bottom) {
			$('#about-active').addClass('nav-about-active');
		} else {
			$('#about-active').removeClass('nav-about-active');
		}
}

function navbarProjectsActive() {
	let position = $(document).scrollTop();
	let nav_height = $('nav').outerHeight();

	let projectsSection = $('#projectsLink');
		let top = projectsSection.offset().top - nav_height - 10;
		let bottom = top + projectsSection.outerHeight();

		if (position >= top && position <= bottom) {
			$('#projects-active').addClass('nav-projects-active');
		} else {
			$('#projects-active').removeClass('nav-projects-active');
		}
}

function navbarContactActive() {
	let position = $(document).scrollTop();
	let nav_height = $('nav').outerHeight();

	let contactSection = $('#contactLink');
		let top = contactSection.offset().top - nav_height - 10;
		let bottom = top + contactSection.outerHeight();

		if (position >= top && position <= bottom) {
			$('#contact-active').addClass('nav-contact-active');
		} else {
			$('#contact-active').addClass('nav-contact-active');
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
		/*
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
		*/
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
		$('.top-of-page').slideDown(250);
	}
	else {
		$('.top-of-page').slideUp(250);
	}
}

$(document).ready(() => {

	// check for scroll position in case of browser refresh
	navbarAnimation();
	contentSubtitleAnimation();
	topOfPage();
	navbarAboutActive();
	navbarProjectsActive();
	navbarContactActive();

	// smooth scrolling
	$('a').click(function(e) {
		if (this.hash !== "") {
			e.preventDefault();
			var hash = this.hash;
			$('html, body').stop().animate({
				scrollTop: $(hash).offset().top - 70
			}, 1000, () => {
				window.location.hash = hash;
			});
		}
	});

	// scrolling animations
	$(window).scroll(() => {
		introTextOpacity();
		navbarAnimation();
		contentSubtitleAnimation();
		topOfPage();
		navbarAboutActive();
		navbarProjectsActive();
		navbarContactActive();
	});
	/*
	// detect scroll position
	$(window).scroll((event) => {
		var scroll = $(window).scrollTop();
		console.log(scroll);
	});
	*/
});

// contact form animation
$(document).ready(function() {
	// Test for placeholder support
	$.support.placeholder = (function(){
			var i = document.createElement('input');
			return 'placeholder' in i;
	})();

	// Hide labels by default if placeholders are supported
	if($.support.placeholder) {
		$('.form-label').each(function(){
				$(this).addClass('js-hide-label');
		});  

		// Code for adding/removing classes here
		$('.form-group').find('input, textarea').on('keyup blur focus', function(e){
				
			// Cache our selectors
			var $this = $(this),
				$parent = $this.parent().find("label");

			if (e.type == 'keyup') {
				if( $this.val() == '' ) {
						$parent.addClass('js-hide-label'); 
				} else {
						$parent.removeClass('js-hide-label');   
				}                     
			} 
			else if (e.type == 'blur') {
				if( $this.val() == '' ) {
						$parent.addClass('js-hide-label');
				} 
				else {
						$parent.removeClass('js-hide-label').addClass('js-unhighlight-label');
				}
			} 
			else if (e.type == 'focus') {
				if( $this.val() !== '' ) {
						$parent.removeClass('js-unhighlight-label');
				}
			}
		});
	} 
});
