module.exports = (app, db, bcrypt) => {
	app.post('/signupRoute', (req, res) => {
		var salt = bcrypt.genSalt(10, function(error, salt) {
			bcrypt.hash(req.body.password, salt)
			.then((hash)=> {
				return db.users.create({
					name: req.body.name,
					email: req.body.email,
					password: hash
				})
			})
			.then(() => {
				res.render("login")
			})
			.catch(e => {
				console.log("error signup.js", e)
			})
		})
	}) //end of app.post
} //end of module exports