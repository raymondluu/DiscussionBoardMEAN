myDiscussionApp.controller('TopicController', function ($scope, $routeParams, UserFactory, TopicsFactory) {
	$scope.topic = {};
	$scope.input = {};

	UserFactory.getUser(function (data) {
		$scope.user = data;
	});

	TopicsFactory.getTopic($routeParams.index, function (data) {
		$scope.topic = data;
	});

	$scope.addPost = function () {
		$scope.input.index = $routeParams.index;
		$scope.input.user = $scope.user;

		TopicsFactory.addPost($scope.input, function () {
			TopicsFactory.getTopic($routeParams.index, function (data) {
				$scope.topic = data;
			});

			$scope.input = {};
		});
	};

	$scope.addComment = function (postIndex) {
		$scope.input.index = $routeParams.index;
		$scope.input.user = $scope.user;
		$scope.input.postIndex = postIndex;

		TopicsFactory.addComment($scope.input, function () {
			TopicsFactory.getTopic($routeParams.index, function (data) {
				$scope.topic = data;
			});

			$scope.input = {};
		})
	};
});


// myStoreApp.controller('CustomersController', function ($scope, PageFactory, CustomerFactory) {
// 	$scope.customers = {};

// 	PageFactory.setTitle('Customers');

// 	CustomerFactory.getCustomers(function (data) {
// 		$scope.customers = data;
// 	});

// 	$scope.addCustomer = function () {
// 		CustomerFactory.addCustomer($scope.input, function (errors) {
// 			$scope.errors = errors;
			
// 			CustomerFactory.getCustomers(function (data) {
// 				$scope.customers = data;
// 			});

// 			$scope.input = {};
// 		});
// 	};

// 	$scope.removeCustomer = function (customer) {
// 		CustomerFactory.removeCustomer(customer, function () {
// 			CustomerFactory.getCustomers(function (data) {
// 				$scope.customers = data;
// 			});
// 		});
// 	};
// });