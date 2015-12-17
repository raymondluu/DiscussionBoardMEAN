var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = (function () {
	return {
		addUser: function (req, res) {
			var user = new User(req.body);

			user.save(function (err) {
				if (err) {
					var errors = {};

					if (err.code == '11000') {
						errors.errorMessage = 'User already exists!';
					}
					else {
						errors.errorMessage = 'A name is required';
					}
					res.json(errors);
				}
				else {
					res.end();
				}
			});
		},

		findUser: function (req, res) {
			User.findOne(req.params, function (err, results) {
				if (err) {
					console.log("Something terrible happened with your code!");
				}
				else {
					res.json(results);
				}
			});
		}
	}
})();