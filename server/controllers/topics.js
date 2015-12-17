var mongoose = require('mongoose');
var Topic = mongoose.model('Topic');

module.exports = (function () {
	return {
		addTopic: function (req, res) {
			var topic = new Topic(req.body);

			topic.save(function (err) {
				if (err) {
					console.log('Something went wrong with your code');
				}
				else {
					res.end();
				}
			})
		},

		findTopics: function (req, res) {
			Topic.find({}, function (err, results) {
				if (err) {
					console.log('Something terrible happened with your code!');
				}
				else {
					res.json(results);
				}
			});
		},

		getTopic: function (req, res) {
			Topic.find({}, function (err, results) {
				if (err) {
					console.log('Something terrible happened with your code!');
				}
				else {
					res.json(results[req.params.index]);
				}
			});
		},

		addPost: function (req, res) {
			Topic.find({}, function (err, results) {
				var topic = results[req.body.index];

				if (err) {
					console.log('Something terrible happened with your code!');
				}
				else {
					topic.posts.push({post: req.body.post, user: req.body.user, comments: []});

					topic.save(function (err) {
						if (err) {
							console.log('Something went wrong with your code');
						}
						else {
							res.end();
						}
					});
				}
			});
		},

		addComment: function (req, res) {
			Topic.find({}, function (err, results) {
				var topic = results[req.body.index];
								// console.log(topic.posts[req.body.postIndex].comments);

				if (err) {
					console.log('Something terrible happened with your code!');
				}
				else {
					topic.posts[req.body.postIndex].comments.push({comment: req.body.comment, user: req.body.user});
									// console.log(topic.posts[req.body.postIndex].comments);

					// console.log(topic);
					
					topic.markModified('posts');

					topic.save(function (err) {
						if (err) {
							console.log('Something went wrong with your code');
						}
						else {
							res.end();
						}
					});
				}
			});
		}
		// addUser: function (req, res) {
		// 	var user = new User(req.body);

		// 	user.save(function (err) {
		// 		if (err) {
		// 			var errors = {};

		// 			if (err.code == '11000') {
		// 				errors.errorMessage = 'User already exists!';
		// 			}
		// 			else {
		// 				errors.errorMessage = 'A name is required';
		// 			}
		// 			res.json(errors);
		// 		}
		// 		else {
		// 			res.end();
		// 		}
		// 	});
		// },

		// findUser: function (req, res) {
		// 	User.findOne(req.params, function (err, results) {
		// 		if (err) {
		// 			console.log("Something terrible happened with your code!");
		// 		}
		// 		else {
		// 			res.json(results);
		// 		}
		// 	});
		// }
	}
})();