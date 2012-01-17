define(['jQuery', 'Underscore', 'Backbone', 'index.content-tmpl'], function ($, _, Backbone, tmpl) {

	var View = Backbone.View.extend({
	
		el : $('#index'),
		
		events : {
			'keyup input' : 'handleInput'
		},
		
		initialize : function () {
		
			this.render();
		},
		
		render : function (collection) {
			return this.el.html(tmpl);
		},
		
		handleInput : function (evnt) {
		
			var _val = evnt.currentTarget.value,
				regex = /^[A-Z0-9-_]+$/gi,
				$warning = this.el.find('div');
			
			if ( !_val || _val.match(regex) ) {
				$warning.fadeOut('fast');
				if ( _val && evnt.keyCode === 13 ) {
					window.location = '/' + _val;
				}
			} else {
				$warning.fadeIn('fast');
			}			
			
		}
	
	});
	
	return View;

});