define(['jQuery', 'Underscore', 'Backbone', 'Namespace', 'clipboard.form-tmpl'], function ($, _, Backbone, clipboard, tmpl) {

	var form = clipboard.module('form'),
		
		Model = Backbone.Model.extend({
			defaults : {
				user : 'novalue',
				text : 'Keine Angaben',
				pos_x : 80,
				pos_y : 80,
				timestamp : (function () {return Date();})()
			}
		}),
			
		Collection = Backbone.Collection.extend({
			model : Model,
			url : window.location.pathname + '/post'
		});
		
	form.View = Backbone.View.extend({
	
		el : $('#form'),
		
		events : {
			'keypress .note_input' : 'addNote',
			'click button' : 'toggleOptions'
		},
		
		initialize : function () {
		
			this.collection = new Collection();
			this.render();
			this.collection.bind('add', this.triggerAdded, this);
		
		},
		
		render : function () {
			return this.el.html(tmpl);
		},
		
		addNote : function (evnt) {
			if ( evnt.keyCode != 13 ) {
				return;
			}
			
			var elem = evnt.currentTarget,
				model = new Model({
					user : window.location.pathname.replace('/', ''),
					text : escape(elem.value)
				});
			
			this.collection.create(model);
			
			elem.value = '';
			elem.blur();
			
			clipboard.app.trigger('itemAdded');
		},
		
		toggleOptions : function () {
			var $elem = this.el
				.find('button')
					.toggleClass('active')
					.end()
				.find('ul')
				.toggle();
		}
	
	});
	
	return form;

});