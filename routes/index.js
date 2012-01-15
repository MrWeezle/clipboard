var url = require('url'),
	model = require('../model');

exports.index = function (req, res) {
	res.render('index');
};

exports.clipboard = function (req, res) {
	res.render('clipboard');
};

exports.post = function (req, res) {

	model.connect();
	
	model.add(req.body, function () {
		console.log(arguments);
	});

};

exports.get = function (req, res) {

	model.connect();
	
	model.getAll({user : req.url.split('/')[1]}, function (err, data) {
		if ( !err ) {
			 res.contentType('application/json');
			res.send(JSON.stringify(data));
		} else {
			throw new Error('No data available.');
		}
	});

};

exports.delete = function (req, res) {

	model.connect();

	var _id = req.body._id;
	
	model.delete(_id, function (err) {
		if ( !err ) {
			res.json({deleted : true});
		} else {
			res.json({deleted : false});
			console.log(err);
		}
	})
};

exports.update = function (req, res) {

	model.connect();

	var type = req.body.type,
		_id = req.body._id,
		args = type === 'text' ?
			{text : req.body.text} :
			{pos_x : req.body.pos_x, pos_y : req.body.pos_y};
	
	model.update(type, _id, args, function (err) {
		if ( !err ) {
			res.json({updated : true});
		} else {
			res.json({updated : false});
			console.log(err);
		}
	});
};