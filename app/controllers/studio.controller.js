var mongoose = require('mongoose');

var Contact = mongoose.model('contact');
var About = mongoose.model('about');
var Pro = mongoose.model('pro');
var News = mongoose.model('news');
var Words = mongoose.model('words');
var Notes = mongoose.model('notes');

module.exports = {
	// test
	thumbsUp:function(req, res, next){
		
		Contact.update({"_id":"5980894753c9271c3074d018"},{$inc:{"good":1}},function(){
			return res.json(Contact);
		});
		
	},
	postGood:function(req,res,next){
		// var contact = new Contact(req.body);
		// contact.save(function(){
		// 	return res.json(contact);
		// });
		Contact.find().exec(function(err,docs){
			return res.json(docs);
		});
	},
	clearGood:function(req,res,next){
		Contact.remove(function(err,docs){
			console.log('removed all data!');
			return res.json(docs);
		});
	},


	// GROUP
	clearStudio: function(req,res,next){
		Contact.remove(function(err,docs){
			if(err) console.log('contact rm error!');
			else console.log('contact removed');
		});
		About.remove(function(err,docs){
			if(err) console.log('about rm error!');
			else console.log('about removed');
		});
		Pro.remove(function(err,docs){
			if(err) console.log('Pro rm error!');
			else console.log('Pro removed');
		});
		News.remove(function(err,docs){
			if(err) console.log('News rm error!');
			else console.log('News removed');
		});
		Words.remove(function(err,docs){
			if(err) console.log('words rm error!');
			else console.log('words removed');
		});


		return res.json("all done!");
	},


// About
	updateAbout:function(req,res,next){
		About.remove({"type":"about"},function(err,docs){
			console.log('removed about data!');
		});
		console.log('cyh is pig');
		var about = new About(req.body);
		about.save(function(err,docs){
		 	if(err){
            	console.log("Error:" + err);
        	}
        	else {
        	    console.log("Res:" + res);
        	    return res.json(about)
        	}
		});

	},
	firstAbout:function(req,res,next){
		About.remove({"type":"about"},function(err,docs){
			console.log('removed about data!');
		});
		var about = new About({
			type : "about",
			content: "first Data!"
		});
		about.save(function(err,docs){
		 	if(err){
            	console.log("Error:" + err);
        	}
        	else {
        	    console.log("Res:" + res);
        	    return res.json(about)
        	}
		});
	},
	getAbout:function(req,res,next){
		About.find().exec(function(err,docs){
			return res.json(docs);
		});
	},


// pro
	updatePro : function(req,res,next){
		var pro = new Pro(req.body);
		pro.save(function(err, docs){
			return res.json(docs);
		});
	},
	getPro: function(req,res,next){
		Pro.find().exec(function(err,docs){
			return res.json(docs);
		});
	},
	firstPro: function(req,res,next){
		Pro.remove({"type":"pro"},function(err,docs){
			return res.json('removed pro data');
		});
		// var pro = new Pro({
		// 	type: "pro",
		// 	title: "proTitle",
		// 	content: "proContent",
		// 	img:"proImg"
		// });
		// pro.save(function(err,docs){
		// 	if(err){
		// 		console.log("err:"+err);
		// 	}
		// 	else{
		// 		return res.json(pro)
		// 	}
		// });
	},

//news
	updateNews : function(req,res,next){
		var news = new News(req.body);
		news.save(function(err,docs){
			return res.json(docs);
		});
	},
	getNews: function(req,res,next){
		News.find().exec(function(err,docs){
			return res.json(docs);
		});
	},
	firstNews: function(req,res,next){
		News.remove({"type":"news"},function(err,docs){
			console.log('removed news data');
		});
		var news = new News({
			type: "news",
			title: "newsTitle",
			content: "newsContent",
			img:"newsImg"
		});
		news.save(function(err,docs){
			if(err){
				console.log("err:"+err);
			}
			else{
				return res.json(news)
			}
		});
	},


//words 
	addWords: function(req, res, next){
		var words = new Words(req.body);
		words.save(function(err,docs){
			return res.json(docs);
		});
	},
	getWords: function(req, res, next){
		Words.find().exec(function(err, docs){
			return res.json(docs);
		});
	},
	clearWords: function(req, res, next){
		Words.remove({"type":"words"},function(err,docs){
			console.log('removed words data');
			return res.json(docs);
		});
	},

// notes
	addNotes: function(req, res, next){
		var notes = new Note(req.body);
		notes.save(function(err, docs){
			return res.json(docs);
		});
	},
	// updateNotes: function(req, res, next){
	// 	Notes.update()
	// },
	// deleteNotes: function(req,res,next){
	// 	var 
	// },	
	clearNotes: function(req,res,next){
		Notes.remove(function(err,docs){
			console.log('remove all Notes!');
			return res.json(docs);
		});
	},
	getNotes: function(req,res,next){
		Notes.find().exec(function(err, docs){
			return res.json(docs);
		});
	}
	// findNotes
};
