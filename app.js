(function() {
	var app = angular.module('Avocado', []);

	app.controller('GalleryController', function() {
		this.artwork = artworks;
		this.test = 'test';
	});

	var artworks = [
		{
			name: 'Lazy Cat'
		}
	];
})();