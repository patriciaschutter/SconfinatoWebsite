module.exports = (app) => {
	app.get('/', (req, res) => {
		if(req.session.user){
			res.render('index', {
				name: req.session.user.name})
		}
		else {
			res.render('index')
		}
	})
}

