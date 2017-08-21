var mongoose = require('mongoose');
var config = require('./config.js');
module.exports = function(){
	var db = mongoose.connect(config.mongodb);//创建并连接数据库

	require('../app/models/contact.model');//跑模型
	require('../app/models/about.model');
	require('../app/models/product.model');
	require('../app/models/news.model');
	require('../app/models/words.model');

	return db;
 };