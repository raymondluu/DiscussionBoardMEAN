myDiscussionApp.controller('LoginController', function ($scope, UserFactory) {
	$scope.input = {};
	
	$scope.loginUser = function () {
		UserFactory.loginUser($scope.input, function (errors) {
			$scope.errors = errors;
			$scope.input = {};
		});
	}
});