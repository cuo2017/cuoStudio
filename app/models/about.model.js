var mongoose = require('mongoose');

var aboutSchema = mongoose.Schema({
	"type": String,
	"content" : String
});

var about = mongoose.model('about',aboutSchema);