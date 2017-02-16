myApp.factory('retailFactory', function($http){
	var retails = [];
	var factory = {};

	factory.getRetails = function(callback){
		$http.get('/retail').success(function(output){
			retails = output;
			callback(retails);
		})
	}

	return factory;
})