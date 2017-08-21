var mongoose = require('mongoose');

var wordsSchema = mongoose.Schema({
	type: String,
	date: {type:Date, default: Date.now},
	words: String,
	name: String,
	color:String,
});

var words = mongoose.model('words', wordsSchema);