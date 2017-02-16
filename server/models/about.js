var mongoose = require('mongoose');

var AboutSchema = new mongoose.Schema({
	title: String,
	file_type: String,
	description: String
});

mongoose.model('About', AboutSchema);