myApp.factory('financialFactory', function($http){
	var financials = [];
	var factory = {};

	factory.getFinancials = function(callback){
		$http.get('/financial-services').success(function(output){
			financials = output;
			callback(financials);
		})
	}

	return factory;
})