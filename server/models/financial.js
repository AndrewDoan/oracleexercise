var mongoose = require('mongoose');

var FinancialSchema = new mongoose.Schema({
	title: String,
	file_type: String,
	description: String
});

mongoose.model('Financial', FinancialSchema);