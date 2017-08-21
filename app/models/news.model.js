var mongoose = require('mongoose');

var newsSchema = mongoose.Schema({
	type: String,
	date: {type:Date, default: Date.now},
	title: String,
	content: String,
	img:String,
	color: String,

});

var news = mongoose.model('news',newsSchema);