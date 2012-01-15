define(['jQuery', 'Underscore', 'Backbone', 'Namespace', 'clipboard.content-tmpl', 'niceDate'], function ($, _, Backbone, clipboard, tmpl, niceDate) {

	var content = clipboard.module('content'),
		
		Model = Backbone.Model.extend(),
	
		Collection = Backbone.Collection.extend({
			model : Model,
			url : window.location.pathname + '/get'
		});
	
	content.View = Backbone.View.extend({
	
		el : $('#content'),
		
		user : window.location.pathname.replace('/', ''),
		
		tmpl : _.template(tmpl),
		
		events : {
			'click .delete' : 'deleteNote',
			'keypress .delete' : 'deleteNote',
			'dblclick .text' : 'editNote',
			'keypress .edit' : 'saveChanges',
			'mouseover .note' : 'initDraggable'
		},

		user : window.location.pathname.replace('/', ''),
		
		initialize : function () {
		
			this.collection = new Collection();
			this.collection.fetch();
			
			this.collection.bind('reset', this.addNotes, this);
			
			clipboard.app.bind('itemAdded', function () {
				this.collection.fetch();
			}, this);
		},
		
		render : function (collection) {
			var content = collection.toJSON();
			
			content.timestamp = niceDate.convert(content.timestamp);
			
			this.el.append(this.tmpl(content));
		},
		
		addNotes : function () {
			this.el.empty();
			this.collection.each( function (num) {
				this.render(num);
			}, this);
		},
		
		deleteNote : function (evnt) {
		
			evnt.stopPropagation();
			
			if ( evnt.type === 'keypress' && evnt.keyCode != 13 ) {
				return;
			}
			
			var that = this,
				elem = evnt.currentTarget,
				_id = elem.parentNode.parentNode.id,
				model = this.collection.filter( function (num) {
					return num.attributes._id === _id;
				})[0],
				_delete = confirm('Soll die Notiz wirklich gelöscht werden?');
			
			if ( _delete ) {
				$.post(window.location.pathname + '/delete', {_id : _id}).complete(function (data, success) {
					if ( success ) {
						that.collection.fetch();
					}
				});
			}
		
		},
		
		editNote : function (evnt) {
		
			var $elem = $(evnt.currentTarget);
			
			_.bindAll(this, 'abortEdit');
			$(document).bind('click', this.abortEdit);
			
			evnt.stopPropagation();
			
			$elem.html(this.createTextarea.call($elem));
		},
		
		createTextarea : function () {
			return $('<textarea />', {
					height : this.innerHeight(),
					width : this.innerWidth(),
					value : this.text(),
					'class' : 'edit',
					autofocus : true
				}).bind('keypress', function (evnt) {
					if ( !evnt.currentTarget.scrollTop ) {
						return;
					}
					$(this).css('height', '+=' + evnt.currentTarget.scrollTop);
				});
		},
		
		abortEdit : function (evnt) {
			
			if ( evnt.target.nodeName.toLowerCase() === 'textarea' ) {
				return;
			}
			
			this.collection.fetch();
			
			$(document).unbind('click');
		},
		
		saveChanges  : function (evnt) {
		
			if ( evnt.keyCode != 13 ) {
				return;
			}
			
			var that = this,
				elem = evnt.currentTarget,
				_id = elem.parentNode.parentNode.id,
				text = elem.value;
			
			this.updateNote({
				type : 'text',
				_id : _id,
				text : escape(text)
			});
			
			$(document).unbind('click');
		
		},
		
		updateNote : function (obj) {
		
			var that = this;
			
			$.post(window.location.pathname + '/update', obj).complete( function (data, success) {
				if ( success ) {
					that.collection.fetch();
				}
			});
		
		},
		
		initDraggable : function (evnt) {
			var that = this;
			
			$(evnt.currentTarget).draggable({
				containment : 'parent',
				stop : function (evnt, ui) {
					that.updateNote({
						user : that.user,
						type : 'position',
						_id : this.id,
						pos_x : ui.position.left,
						pos_y : ui.position.top
					});
				}
			});
		}
	
	});
	
	return content;

});