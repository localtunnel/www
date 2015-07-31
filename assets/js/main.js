(function(window, $){

'use strict';

// Underscore is bundled in with ender, so just require it
// Comment out this line when using the separated Underscore file,
// eg. when using jQuery
var _ = require('underscore');

// Document -------------------------------------------------------------------

// When using jQuery, use
// $(document).ready(function () {

$.domReady(function () {

	console.log('## Document ready');

	// VARS -------------------------------------------------------------------
	//

	var
		$window = $(window),
		$body = $('body')
	;

	// ACTIONS ----------------------------------------------------------------
	//

	// $elem.on('something', doSomething);

	//
	// FUNCTIONS --------------------------------------------------------------
	//

	// function doSomething () {}

});

}(window, $));