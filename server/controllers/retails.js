var mongoose = require('mongoose');
var Retail = mongoose.model('Retail');

module.exports = {

	show: function(req,res){
		Retail.find({}, function(err,result){
			if(err){
				console.log(err);
			}
			else{
				res.json(result);
			}
		})
	}
	
} // module.exports