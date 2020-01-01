const User = require('./../models/User');

class LoginController {
	store(req, res) {
        const { email, password } = req.body;
        
        User.get(email, password, (err, user) => {
            if (!!user) {
                res.status(200).json({token: User.generateToken(user[0])})
            }
            
        });
	}
}

module.exports = new LoginController();
