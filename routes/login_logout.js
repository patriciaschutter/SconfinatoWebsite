module.exports = (app, db, bcrypt) => {
	app.get("/login", (req, res) => {
		if (req.session.user) { // already logged in so no need to login > index page rendered
			res.render("index", {
				name: req.session.user.name
			})
		} else {
			res.render("login")
		}
	})


	app.post("/loginRoute", (req, res) => {
		console.log("loginRoute:", req.body.email)
		db.users.findAll({
			where: {
			email: req.body.email
			}
		})
		.then((result)=> {
			if (result.length <= 0) { // so if email doesn't exist in database
				res.render("login", {
					errorLogin: "Sorry not sorry - onjuiste inlog combinatie"
				})
			}
			else if (result.length >= 1) { // if email does exist in database > password check
				var userinfo = {
					id: result[0].dataValues.id,
					name: result[0].dataValues.name,
					email: result[0].dataValues.email,
					hashedPassword: result[0].dataValues.password
				}

				console.log(userinfo)
				bcrypt.compare(req.body.password, userinfo.hashedPassword).then(function(result){
					console.log(result)
					if (result == true) { // if password is correct > go to profile page
						req.session.user = userinfo
						if(req.session.user.name){
							res.redirect("/profile", 301)
						}
					} 
					else {
						res.render("login", {
							errorLogin: "Sorry not sorry - onjuiste inlog combinatie"
						})
					}
				})
			}
		})
		.catch((e) => {
		 	console.log(e)
		})
	})

	app.get('/logout',function(req,res){
	// if the user logs out, destroy all of their individual session
		req.session.destroy(function(err) {
			if(err) {
				console.log(err);
			} else {
				res.redirect('/login');
			}
		})
	})
} //end of module exports