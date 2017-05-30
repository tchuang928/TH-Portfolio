$(document).ready($ => {
	'use strict'
	
		if ($(document).scrollTop() > 50) {
			$('nav').addClass('scrollFunc');
		} else {
			$('nav').removeClass('scrollFunc');
		}


	$(window).scroll(() => {
		if ($(document).scrollTop() > 50) {
			$('nav').addClass('scrollFunc');
		} else {
			$('nav').removeClass('scrollFunc');
		}
	})

	// smooth scrolling
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top -130
      }, 1000, function(){
   
        window.location.hash = hash;
      });
    } 
  });
});
