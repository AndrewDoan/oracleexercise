var mongoose = require('mongoose');
var Financial = mongoose.model('Financial');

module.exports = {

	show: function(req,res){
		Financial.find({}, function(err,result){
			if(err){
				console.log(err);
			}
			else{
				res.json(result);
			}
		})
	}
	
} // module.exports