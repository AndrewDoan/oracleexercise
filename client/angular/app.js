var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider
		.when('/',{
			templateUrl: 'partials/communications.html'
		})
		.when('/retail',{
			templateUrl: 'partials/retail.html'
		})
		.when('/financial-services',{
			templateUrl: 'partials/financial-services.html'
		})
		.when('/about',{
			templateUrl: 'partials/about.html'
		})
		.otherwise({
			redirectTo: '/'
		})
});