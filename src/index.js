'use strict'

$(document).ready(() => {
	
	// smooth scrolling
  $('a').on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      $('html, body').animate({
				// create variable scrollTop number when scrolling from the top due to hide and show subtitles
        scrollTop: $(hash).offset().top -107
			}, 1000, () => {
        window.location.hash = hash;
      });
    } 
  });

	// detect scroll position and run proper animation
	if ($(document).scrollTop() > 50) {
		$('nav').addClass('scrollFunc');
	} else {
		$('nav').removeClass('scrollFunc');
	}

	// navbar animation on scroll
	$(window).scroll(() => {
		if ($(document).scrollTop() > 50) {
			$('nav').removeClass('navPadding');
			$('nav').addClass('scrollFunc');
		} else {
			$('nav').addClass('navPadding');
			$('nav').removeClass('scrollFunc');
		}
	})

	// about section subtitle animation on scroll
	$(window).scroll(() => {
		if ($(document).scrollTop() > 792) {
			//$('#aboutTitle').addClass('joinNavbar').addClass('navbar-fixed-top');
			$('#aboutNavbar').fadeIn('slow');
			$('#aboutTitle').slideUp('slow');
				$('#aboutPadding').slideDown('slow');

		} else {
			//$('#aboutTitle').removeClass('joinNavbar').removeClass('navbar-fixed-top');
			$('#aboutNavbar').hide();
			$('#aboutTitle').slideDown('slow');
			$('#aboutPadding').slideUp('slow');
		}
	})

	// detect scroll position
	$(window).scroll(function (event) {
			var scroll = $(window).scrollTop();
			console.log(scroll);
	});

});
