myApp.controller('communicationsController', function($scope, communicationFactory){
	$scope.communications = [];
	updateCommunications();

	function updateCommunications(){
		communicationFactory.getCommunications(function(output){
			$scope.communications = output;
		})
	}

})