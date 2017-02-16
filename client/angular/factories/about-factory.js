myApp.factory('aboutFactory', function($http){
	var abouts = [];
	var factory = {};

	factory.getAbouts = function(callback){
		$http.get('/about').success(function(output){
			abouts = output;
			callback(abouts);
		})
	}

	return factory;
})