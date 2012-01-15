var mongoose = require('mongoose'),
	dbUrl = 'mongodb://127.0.0.1/my_database',

	Schema = mongoose.Schema,

	NoteList = new Schema({
		user : {type : String, default : 'novalue'},
		text : {type : String, default : 'No value'},
		pos_x : {type : Number, default : 100},
		pos_y : {type : Number, default : 100},
		timestamp : {type : Date, default : Date.now}
	}),
	Note = null,
	newNote = null;

	mongoose.model('NoteList', NoteList);	
	Note = mongoose.model('NoteList');

exports.connect = function (callback) {
	mongoose.connect(dbUrl);
};

exports.disconnect = function (callback) {
	mongooose.disconnect();
};

exports.add = function (obj, callback) {

	/*
	 * Prevent notes with invalid usernames.
	**/
	
	if ( !obj.user.match(/^[A-Z0-9-_]+$/gi) ) {
		return;
	}
	
	var newNote = new Note();
	
	newNote.user = obj.user;
	newNote.text = obj.text;
	newNote.pos_x = obj.pos_x;
	newNote.pos_y = obj.pos_y;
	newNote.timestamp = Date.now();
	
	newNote.save( function (err) {
		if (err) {
			callback(err);
		} else {
			callback(null);
		}
	});
};

exports.delete = function (_id, callback) {
	Note.findById(_id, function (err, note) {
		if ( !!err || !note ) {
			callback(err);
		} else {
			note.remove( function (err) {
				if (err) {
					callback(err);
				} else {
					callback(null);
				}
			});
		}
	});
};

exports.update = function (type, _id, args, callback) {
	Note.findById(_id, function (err, doc) {
		if ( !err ) {
			if ( type === 'text' ) {
				doc.text = args.text;
			} else if ( type === 'position' ) {
				doc.pos_x = args.pos_x;
				doc.pos_y = args.pos_y;
			}
			
			doc.save( function (err) {
				if (err) {
					callback(err);
				} else {
					callback(null);
				}
			});
		}
	});
};

exports.getAll = function (args, callback) {
	Note.find(args, callback);
}