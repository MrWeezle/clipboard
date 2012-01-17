require.config({
	paths : {
		'loader' : 'libs/loader',
		'jQuery' : 'libs/jquery/jquery',
		'jQueryUI' : 'libs/jqueryui/jqueryui.min',
		'Underscore' : 'libs/underscore/underscore',
		'Backbone' : 'libs/backbone/backbone',
		'Observer' : 'helper/observer',
		'niceDate' : 'helper/nice-date',
		'clipboard.form' : 'modules/clipboard/form',
		'clipboard.content' : 'modules/clipboard/content',
		'clipboard.footer' : 'modules/clipboard/footer',
		'clipboard.form-tmpl' : 'templates/clipboard/form-tmpl',
		'clipboard.content-tmpl' : 'templates/clipboard/content-tmpl',
		'clipboard.footer-tmpl' : 'templates/clipboard/footer-tmpl'
	}
});

require(['clipboard.form', 'clipboard.content', 'clipboard.footer'], function (Form, Content, Footer) {

	var form = new Form(),
		content = new Content(),
		footer = new Footer();

});