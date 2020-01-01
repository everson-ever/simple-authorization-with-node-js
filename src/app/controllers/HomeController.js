class HomeController {
	index(req, res) {
		res.send('Home user');
	}
}

module.exports = new HomeController();
