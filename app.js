(function() {
	var $container = $('.packery').packery();

	var app = angular.module('Avocado', []);

	app.controller('GalleryController', ['$scope', function($scope) {
		$scope.artwork = artworks;
		$scope.selectedArt = undefined;

		$scope.showArt = function(art) {
			var scrollTop = $(document).scrollTop();
			$scope.selectedArt = art.full;
			disableScroll();
			$(".obfuscate").css("top", scrollTop);
			$(".selected-art").css("top", scrollTop);
		};

		$scope.showGallery = function() {
			$scope.selectedArt = undefined;
			enableScroll();
		};
	}]);

	var artworks = [
		{
			name: 'Council',
			thumb: 'images/thumbs/council.jpg',
			full: 'images/full/council.jpg',
			thumbStyle: ''
		},
		{
			name: 'The Reader',
			thumb: 'images/thumbs/reader.jpg',
			full: 'images/full/reader.jpg',
			thumbStyle: 'height4'
		},
		{
			name: 'Lazy Cat',
			thumb: 'images/thumbs/lazy_cat.jpg',
			full: 'images/full/lazy_cat.jpg',
			thumbStyle: 'width2 height2'
		},		
		{
			name: 'Dagger',
			thumb: 'images/thumbs/dagger.jpg',
			full: 'images/full/dagger.jpg',
			thumbStyle: ''
		},
		{
			name: 'Flicker & Billow',
			thumb: 'images/thumbs/fb.jpg',
			full: 'images/full/fb.jpg',
			thumbStyle: 'width2'
		},
		{
			name: 'Lysol',
			thumb: 'images/thumbs/lysol.jpg',
			full: 'images/full/lysol.jpg',
			thumbStyle: 'width2'
		},
		{
			name: 'Shantou',
			thumb: 'images/thumbs/shantou.jpg',
			full: 'images/full/shantou.jpg',
			thumbStyle: 'width4'
		},
		{
			name: 'Gatsby',
			thumb: 'images/thumbs/gatsby.jpg',
			full: 'images/full/gatsby.jpg',
			thumbStyle: 'height2'
		},
		{
			name: 'Wrought',
			thumb: 'images/thumbs/wrought.jpg',
			full: 'images/full/wrought.jpg',
			thumbStyle: ''
		},
		{
			name: 'Inhabitants',
			thumb: 'images/thumbs/inhabitants.jpg',
			full: 'images/full/inhabitants.jpg',
			thumbStyle: ''
		},
		{
			name: 'Realm',
			thumb: 'images/thumbs/realm.jpg',
			full: 'images/full/realm.jpg',
			thumbStyle: ''
		},
		{
			name: 'Fish',
			thumb: 'images/thumbs/fish.jpg',
			full: 'images/full/fish.jpg',
			thumbStyle: ''
		},
		{
			name: 'Boots',
			thumb: 'images/thumbs/boots.jpg',
			full: 'images/full/boots.jpg',
			thumbStyle: ''
		},
		{
			name: 'Crab Cakes',
			thumb: 'images/thumbs/crab_cakes.jpg',
			full: 'images/full/crab_cakes.jpg',
			thumbStyle: ''
		},
		{
			name: 'Pelican',
			thumb: 'images/thumbs/pelican.jpg',
			full: 'images/full/pelican.jpg',
			thumbStyle: ''
		},
		{
			name: 'Gangsta Pirate',
			thumb: 'images/thumbs/pirate.jpg',
			full: 'images/full/pirate.jpg',
			thumbStyle: ''
		}
	];

	// left: 37, up: 38, right: 39, down: 40,
	// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
	var keys = {37: 1, 38: 1, 39: 1, 40: 1};

	function preventDefault(e) {
	  e = e || window.event;
	  if (e.preventDefault)
	      e.preventDefault();
	  e.returnValue = false;  
	};

	function preventDefaultForScrollKeys(e) {
	    if (keys[e.keyCode]) {
	        preventDefault(e);
	        return false;
	    }
	};

	function disableScroll() {
	  if (window.addEventListener) // older FF
	      window.addEventListener('DOMMouseScroll', preventDefault, false);
	  window.onwheel = preventDefault; // modern standard
	  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
	  window.ontouchmove  = preventDefault; // mobile
	  document.onkeydown  = preventDefaultForScrollKeys;
	};

	function enableScroll() {
	    if (window.removeEventListener)
	        window.removeEventListener('DOMMouseScroll', preventDefault, false);
	    window.onmousewheel = document.onmousewheel = null; 
	    window.onwheel = null; 
	    window.ontouchmove = null;  
	    document.onkeydown = null;  
	};
})();