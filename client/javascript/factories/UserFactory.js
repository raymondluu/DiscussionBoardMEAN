myDiscussionApp.factory('UserFactory', function ($http, $location) {
	var factory = {};
	var loggedInUser = {}; //add user to a session data so it persists on refresh

	factory.getUser = function (callback) {
		callback(loggedInUser);
	};

	factory.loginUser = function (user, callback) {
		var errors = {};

		if (user == undefined) {
			errors.message = 'A name is required!';
			callback(errors);
		}
		else {
			$http.get('/user/' + user.userName).success(function (results) {
				if (results) {
					//found user
					//set user
					//redirect to dashboard
					loggedInUser = results;

					$location.path('/dashboard');
					// $window.location.href = '#/dashboard'; //inject $window
				}
				else {
					//didn't find user
					//add user
					//redirect to dashboard
					$http.post('/user', user).success(function () {
						$http.get('/user/' + user.userName).success(function (results) {
							if (results) {
								loggedInUser = results;

								$location.path('/dashboard');
							}
							else {
								console.log("Something terrible happened with your code!");
							}
						});
						
					});
				}
			})
		}
	};

	return factory;
});