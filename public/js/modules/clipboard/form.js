define(['jQuery', 'Underscore', 'Backbone', 'Observer', 'clipboard.form-tmpl'], function ($, _, Backbone, Observer, tmpl) {

	var Model = Backbone.Model.extend({
			defaults : {
				user : 'novalue',
				text : 'Keine Angaben',
				pos_x : 80,
				pos_y : 80,
				timestamp : (function () {return Date();})()
			},
			validate : function (attrs) {
				return function () {
					console.log(attrs);
				}();
			}
		}),
			
		Collection = Backbone.Collection.extend({
			model : Model,
			url : window.location.pathname + '/post'
		}),
		
		View = Backbone.View.extend({
	
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
						text : escape(elem.value.replace('<', '&lt;').replace('>', '&gt;'))
					});
			
				this.collection.create(model);
			
				elem.value = '';
				elem.blur();
			
				Observer.trigger('itemAdded');
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
	
	return View;

});