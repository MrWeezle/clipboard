define(['jQuery', 'Underscore', 'Backbone', 'clipboard.footer-tmpl'], function ($, _, Backbone, tmpl) {

	var View = Backbone.View.extend({
			el : $('#footer'),
			initialize : function () {
				this.render();
			},
			render : function () {
				return this.el.html(tmpl);
			}
		});
	
	return View;
});