myApp.controller('financialsController', function($scope, financialFactory){
	$scope.financials = [];
	updateFinancials();

	function updateFinancials(){
		financialFactory.getFinancials(function(output){
			$scope.financials = output;
		})
	}
})