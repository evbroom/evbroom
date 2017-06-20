'use strict';

$(document).ready(function () {
	$(document).on('click touchstart', 'a[href^="#"]', function (event) {
		event.preventDefault();
		var targetId = $(this).attr('href');
		var position = $(targetId).offset().top;
		$('body, html').animate({ scrollTop: position }, 1500);
	});
});