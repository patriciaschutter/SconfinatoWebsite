module.exports = (app) => {
	app.get('/', (req, res) => {
		res.render('index')
	})

	app.get('/homepage', (req, res) => {
		res.render('homepage')
	})
}