var config = null;
//读取环境变量
if(process && process.env && process.env.NODE_ENV){
	config  = require('./env/' + process.env.NODE_ENV + '.js');
}else{
	config = require('./env/development.js');
}


module.exports = config;