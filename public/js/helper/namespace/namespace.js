(function (global, undefined) {
	global.clipboard = {
		module : function () {
			var modules = {};
			
			return function (name) {
				if ( modules[name] ) {
					return modules[name];
				}
				return modules[name] = { Views: {} };
			};
		}(),
		app: _.extend({}, Backbone.Events)
	};
})(this);