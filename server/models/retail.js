var mongoose = require('mongoose');

var RetailSchema = new mongoose.Schema({
	title: String,
	file_type: String,
	description: String
});

mongoose.model('Retail', RetailSchema);