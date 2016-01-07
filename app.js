(function() {
	var $container = $('.packery').packery();

	var app = angular.module('Avocado', []);

	app.controller('GalleryController', function() {
		this.artwork = artworks;
	});

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
			name: 'Lysol',
			thumb: 'images/thumbs/lysol.jpg',
			full: 'images/full/lysol.jpg',
			thumbStyle: 'width2'
		},
		{
			name: 'Realm',
			thumb: 'images/thumbs/realm.jpg',
			full: 'images/full/realm.jpg',
			thumbStyle: ''
		}
	];
})();