myApp.controller('aboutsController', function($scope, aboutFactory){
	$scope.abouts = [];
	updateAbouts();

	function updateAbouts(){
		aboutFactory.getAbouts(function(output){
			$scope.abouts = output;
		})
	}
})