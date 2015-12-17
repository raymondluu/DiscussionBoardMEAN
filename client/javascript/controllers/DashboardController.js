myDiscussionApp.controller('DashboardController', function ($scope, UserFactory, TopicsFactory) {
	$scope.user = {};
	$scope.topics = {};
	$scope.categories = ['Html', 'Ruby', 'UX', 'MEAN']; //move hard coded categories into database
	$scope.input = {};
	$scope.input.topicCategory = $scope.categories[0];

	UserFactory.getUser(function (data) {
		$scope.user = data;
	});

	TopicsFactory.getTopics(function (data) {
		$scope.topics = data;
	});

	$scope.addTopic = function () {
		$scope.input.user = $scope.user;

		TopicsFactory.addTopic($scope.input, function (data) {
			TopicsFactory.getTopics(function (data) {
				$scope.topics = data;
			});

			$scope.input = {};
			$scope.input.topicCategory = $scope.categories[0];
		});
	}
});