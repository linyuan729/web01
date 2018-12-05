$(document).ready(function(){	

	// Scrollreveal /////////////////////////////////////////////
	window.sr = ScrollReveal({
		reset: true,
		duration: 800,
		distance: '100px'
	});
	sr.reveal('.js-moveInUp');
	sr.reveal('.js-moveInRight',{
		origin: 'left'
	});
	sr.reveal('.js-moveInLeft',{
		origin: 'right'
	});
	sr.reveal('.index-service .js-moveInUp',400);
	sr.reveal('.social-btns .js-moveInUp',200);
	sr.reveal('.timeline .js-moveInUp',{scale: 1},200);


	// owl-carousel /////////////////////////////////////////////
	$(".owl-carousel").owlCarousel({
		loop: true,
		margin: 32,
		nav: true,
		responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:2
	        }
	    }
	});
});