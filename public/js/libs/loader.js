define(['order!libs/jquery/jquery.min', 'order!libs/underscore/underscore.dev', 'order!libs/backbone/backbone.dev', 'order!jQueryUI', 'order!helper/namespace/namespace'], function () {
	return {
		Backbone : Backbone.noConflict(),
		_ : _.noConflict(),
		$ : jQuery.noConflict(),
		clipboard : window.clipboard
	};
});