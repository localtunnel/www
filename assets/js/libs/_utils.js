// JSHint pointers
/* global log: false */
/* global _: false */

/** @namespace  */
var Utils = (function() {

	'use strict';

	var isTouch		= null,
		isOldie		= null;

	// Detect IE through condifional comments.
	// Read: http://james.padolsey.com/javascript/detect-ie-in-js-using-conditional-comments/
	var ie = (function() {
 
		var undef,
			v		= 3,
			div		= document.createElement('div'),
			all		= div.getElementsByTagName('i');

		while (
			div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->',
			all[0]
		);

		return v > 4 ? v : undef;
	}());

	return {

		/**
		 * Detects whether a screen supports touch events.
		 * It is actually best not to use this as it isn't cross-browser
		 * http://www.stucox.com/blog/you-cant-detect-a-touchscreen
		 * @return {Boolean}
		 */
		isTouch: function() {

			if(_.isNull(isTouch)) isTouch = ('ontouchstart' in window) || (window.DocumentTouch && document instanceof DocumentTouch);
			return isTouch;
		},

		/**
		 * Detects whether a browser is "old", i.e. less than IE 9.
		 * @return {Boolean}
		 */
		isOldie: function() {

			if(_.isNull(isOldie)) isOldie = ie < 9;
			return isOldie;
		}
	};
}());
