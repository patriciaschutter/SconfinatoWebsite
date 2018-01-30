module.exports = (app, db) => {
	//PAGE TO SELECT WHICH MEMBERS INFO TO UPDATE
	app.get('/updatePraesidium', (req, res) => {
		if(req.session.user){
			db.members.findAll({
				order: [['batch_id', 'DESC']]
			}).then((result) =>{
				console.log(result[0].dataValues)
				console.log(result[0].dataValues.id)
				res.render('updatePraesidium', {
					name: req.session.user.name, 
					result: result
				})
			})
		}
		else {
			res.render('login')
		}
	})//end of app.get

	//UPDATE PRAESIDIUM ROUTE
	app.post('/updatePraesidiumRoute', upload.single("praesidium_photo"), (req, res) => {
			console.log(" SWHHASDLIFJ", req.body)
			console.log("req.file ==== ", req.file)
		if(req.session.user){
			db.praesidia.create({
				pipa: req.body.pipa,
				vice: req.body.vice,
				questrix: req.body.questrix,
				monthyear: req.body.monthyear,
				praesidium_photo: req.file.filename
			})
			.then((result) =>{
				res.render('profile', {
					name: req.session.user.name,
					succesMessage: `Preasidium has been updated`
				})
			})
		   .catch((e) => {
				console.log(e)
			})
		} else {
			res.render("login")
		}
	}) // end of app.post
}
