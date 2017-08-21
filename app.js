var mongodb = require('./config/mongoose');
var express = require('./config/express');


var db = mongodb();//使用配置文件连接的数据库 
var app = express();

module.exports = app;