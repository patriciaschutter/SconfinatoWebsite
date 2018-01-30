module.exports = (app) => {
	app.get('/photoPage', (req, res) => {
		if(req.session.user){
			res.render('photoPage', {
				name: req.session.user.name})
		}
		else {
			res.render('photoPage')
		}
	})//end of app.post
}//end of module exports
