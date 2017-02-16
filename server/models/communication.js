var mongoose = require('mongoose');

var CommunicationSchema = new mongoose.Schema({
	title: String,
	file_type: String,
	description: String
});

mongoose.model('Communication', CommunicationSchema);