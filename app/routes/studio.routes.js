var StudioController = require('../controllers/studio.controller');

module.exports = function(app){

// test
	app.route('/contact')
	.get(StudioController.thumbsUp);

	app.route('/clear')
	.get(StudioController.clearGood);

	app.route('/test')
	.get(StudioController.postGood);

// Studio

	app.route('/clearAll')
	.get(StudioController.clearStudio);
// about
	app.route('/fAbout')
	.get(StudioController.firstAbout);

	app.route('/uAbout')
	.post(StudioController.updateAbout);

	app.route('/gAbout')
	.get(StudioController.getAbout);
// pro

	app.route('/fPro')
	.get(StudioController.firstPro);

	app.route('/gPro')
	.get(StudioController.getPro);

	app.route('/uPro')
	.post(StudioController.updatePro);

// news

	app.route('/fNews')
	.get(StudioController.firstNews);

	app.route('/gNews')
	.get(StudioController.getNews);

	app.route('/uNews')
	.post(StudioController.updateNews);

// words
	app.route('/aWords')
	.post(StudioController.addWords);

	app.route('/gWords')
	.get(StudioController.getWords);

	app.route('/cWords')
	.get(StudioController.clearWords);

};