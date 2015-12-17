var myDiscussionApp = angular.module('myDiscussionApp', ['ngRoute']);

myDiscussionApp.config(function ($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'partials/login.html',
		controller: 'LoginController'
	})
	.when('/dashboard', {
		templateUrl: 'partials/dashboard.html',
		controller: 'DashboardController'
	})
	.when('/topic/:index', {
		templateUrl: 'partials/topic.html',
		controller: 'TopicController'
	})
	// .when('/orders', {
	// 	templateUrl: 'partials/orders.html',
	// 	controller: 'OrdersController'
	// })
	.otherwise({
		redirectTo: '/'
	});
});