(function ($) {
	"use strict";
	jQuery(document).ready(function ($) {
		new WOW().init();
		lightbox.option({
			'resizeDuration': 200,
			'wrapAround': true,
			alwaysShowNavOnTouchDevices: true
		})
	});


	// jQuery loading function starts          
	// jQuery(window).load(function () {

	// });
	$('[data-toggle="datepicker"]').datepicker();
}(jQuery));


var rellax = new Rellax('.rellax');