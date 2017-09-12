var mongoose = require('mongoose');

var notesSchema = mongoose.Schema({
	ID : Number,
	title : String,
	tag : String,
	author: String,
	date : { type: Date , default : Date.now},
	content : String,
});

var notes = mongoose.model('notes',notesSchema);