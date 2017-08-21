var mongoose = require('mongoose');

var proSchema = mongoose.Schema({
	type: String,
	title: String,
	content: String,
	img: String,
});

var pro = mongoose.model('pro',proSchema);