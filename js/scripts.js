// ios add2home script config
var addToHomeConfig = {
	animationIn: 'bubble',
	animationOut: 'drop',
	expire: 1,
	touchIcon: true
};

window.addEventListener('load', function() {
	navigator.serviceWorker.register('js/service-worker.js', { scope: './' })
		.then(function(r) {
			//
		})
		.catch(function(e) {
			//
		});
});

(function ($) {
	"use strict";
	$('#myCarousel').carousel({
		interval: 7000
	});
})(jQuery);
