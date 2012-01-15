define( function () {
	return {
		convert : function (timestamp) {
			var dateArr = timestamp.split('-');
			return dateArr[2].split('T')[0] + '.' + dateArr[1] + '.' +dateArr[0];
		}
	};
});