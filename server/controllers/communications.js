var mongoose = require('mongoose');
var Communication = mongoose.model('Communication');

module.exports = {

	show: function(req,res){
		Communication.find({}, function(err,result){
			if(err){
				console.log(err);
			}
			else{
				res.json(result);
			}
		})
	},
	
} // module.exports