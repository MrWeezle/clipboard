require.config({
	paths : {
		'loader' : 'libs/loader',
		'jQuery' : 'libs/jquery/jquery',
		'jQueryUI' : 'libs/jqueryui/jqueryui.min',
		'Underscore' : 'libs/underscore/underscore',
		'Backbone' : 'libs/backbone/backbone',
		'index.content' : 'modules/index/content',
		'index.content-tmpl' : 'templates/index/content-tmpl'
	}
});

require(['index.content'], function (Content) {

	var content = new Content();

});