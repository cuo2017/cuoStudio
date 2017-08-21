var mongoose = require('mongoose');

var contactShema = new mongoose.Schema({
	"good" : Number

});

var contact = mongoose.model('contact',contactShema );
