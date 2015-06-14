(function() {
	var app = angular.module('Avocado', []);

	app.controller('GalleryController', function() {
		this.artwork = artworks;
	});

	var artworks = [
		{
			name: 'Lazy Cat',
			thumb: 'images/thumbs/lazy_cat_thumb.jpg',
			full: 'images/full/lazy_cat.jpg',
			layout: 'portrait'
		},
		{
			name: 'The Reader',
			thumb: 'images/thumbs/reader_thumb.jpg',
			full: 'images/full/reader.jpg',
			layout: 'portrait'
		},
		{
			name: 'Flicker & Billow',
			thumb: 'images/thumbs/fb_thumb.jpg',
			full: 'images/full/fb.jpg',
			layout: 'portrait'
		},
		{
			name: 'Gatsby',
			thumb: 'images/thumbs/gatsby_thumb.jpg',
			full: 'images/full/gatsby.jpg',
			layout: 'portrait'
		},
		{
			name: 'Lysol',
			thumb: 'images/thumbs/lysol_thumb.jpg',
			full: 'images/full/lysol.jpg',
			layout: 'portrait'
		},
		{
			name: 'Shantou',
			thumb: 'images/thumbs/shantou_thumb.jpg',
			full: 'images/full/shantou.jpg',
			layout: 'landscape'
		},
		{
			name: 'Council',
			thumb: 'images/thumbs/council_thumb.jpg',
			full: 'images/full/council.jpg',
			layout: 'portrait'
		},
		{
			name: 'Dagger',
			thumb: 'images/thumbs/dagger_thumb.jpg',
			full: 'images/full/dagger.jpg',
			layout: 'portrait'
		},
		{
			name: 'Inhabitants',
			thumb: 'images/thumbs/inhabitants_thumb.jpg',
			full: 'images/full/inhabitants.jpg',
			layout: 'portrait'
		},
		{
			name: 'Wrought',
			thumb: 'images/thumbs/wrought_thumb.jpg',
			full: 'images/full/wrought.jpg',
			layout: 'landscape'
		},
		{
			name: 'Realm',
			thumb: 'images/thumbs/realm_thumb.jpg',
			full: 'images/full/realm.jpg',
			layout: 'portrait'
		}
	];
})();