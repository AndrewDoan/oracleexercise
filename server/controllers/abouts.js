var mongoose = require('mongoose');
var About = mongoose.model('About');

module.exports = {

	show: function(req,res){
		About.find({}, function(err,result){
			if(err){
				console.log(err);
			}
			else{
				res.json(result);
			}
		})
	}
	
} // module.exports