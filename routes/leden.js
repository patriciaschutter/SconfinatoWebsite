module.exports = (app) => {
	app.get('/leden', (req, res) => {
		res.render('leden')
	})
}