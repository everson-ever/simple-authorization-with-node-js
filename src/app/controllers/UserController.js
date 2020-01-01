const User = require('./../models/User');


class UserController {
	index(req, res) {
		User.getAll((err, rows) => {
            res.status(200).json(rows);
        });
	}
	store(req, res) {
		res.send('Register User');
	}
}

module.exports = new UserController();
