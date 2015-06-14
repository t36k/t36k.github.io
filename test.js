$(document).ready( function() {
	var $container = $('#container');
	// init
	$container.packery({
	  itemSelector: '.item',
	  columnWidth: 250,
	  gutter: 10
	});
});