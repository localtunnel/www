(function(w){

'use strict';

// VARS

var
	b     = document.body,
	font = null

// Load fonts if needed

if (!b.classList.contains('font-loaded')) {
	font = new w.FontFaceObserver('Source Sans Pro', {})
		.check()
		.then(function(){
			console.log('Font "Source Sans Pro" was loaded');

			b.classList.add('font-loaded');
			w.Cookies.set('fontloaded', 'true', { expires: Infinity });
		}, function () {
			console.log('Font "Source Sans Pro" not available');
		});
}

}(window));