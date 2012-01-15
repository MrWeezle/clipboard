define(['jQuery', 'Underscore', 'Backbone', 'Namespace', 'clipboard.footer-tmpl'], function ($, _, Backbone, clipboard, tmpl) {

	var content = clipboard.module('footer');
	
	content.View = Backbone.View.extend({
		el : $('#footer'),
		initialize : function () {
			this.render();
		},
		render : function () {
			return this.el.html(tmpl);
		}
	});
	
	return content;
});