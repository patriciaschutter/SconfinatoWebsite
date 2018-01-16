module.exports = (app) => {
	app.get('/agenda', (req, res) => {
		if(req.session.user){
			res.render('agenda', {
				name: req.session.user.name})
		}
		else {
			res.render('agenda')
		}
	})
}

