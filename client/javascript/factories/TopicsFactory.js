myDiscussionApp.factory('TopicsFactory', function ($http) {
	var factory = {};

	factory.getTopics = function (callback) {
		$http.get('/topics').success(function (results) {
			callback(results);
		});
	};

	factory.addTopic = function (topic, callback) {
		$http.post('/topic', topic).success(function () {
			callback();
		});
	};

	factory.getTopic = function (index, callback) {
		$http.get('/topic/' + index).success(function (result) {
			callback(result);
		});
	};

	factory.addPost = function (input, callback) {
		$http.post('/post', input).success(function () {
			callback();
		});
	};

	factory.addComment = function (input, callback) {
		$http.post('/comment', input).success(function () {
			callback();
		});
	};

	return factory;
});