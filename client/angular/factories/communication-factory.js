myApp.factory('communicationFactory', function($http){
	var communications = [];
	var factory = {};

	factory.getCommunications = function(callback){
		$http.get('/communications').success(function(output){
			communications = output;
			callback(communications);
		})
	}

	return factory;
})