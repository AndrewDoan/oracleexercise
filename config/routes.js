var communications = require('./../server/controllers/communications.js');
var retails = require('./../server/controllers/retails.js');
var financials = require('./../server/controllers/financials.js');
var abouts = require('./../server/controllers/abouts.js');

module.exports = function(app){

	app.get('/communications', function(req,res){
		communications.show(req,res);
	})

	app.get('/retail', function(req,res){
		retails.show(req,res);
	})

	app.get('/financial-services', function(req,res){
		financials.show(req,res);
	})

	app.get('/about', function(req,res){
		abouts.show(req,res);
	})
};