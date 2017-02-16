myApp.controller('retailsController', function($scope, retailFactory){
	$scope.retails = [];
	updateRetails();

	function updateRetails(){
		retailFactory.getRetails(function(output){
			$scope.retails = output;
		})
	}
})