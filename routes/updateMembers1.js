module.exports = (app, db) => {
	//PAGE TO SELECT WHICH MEMBERS INFO TO UPDATE
	app.get('/updateMembers1', (req, res) => {
		if(req.session.user){
			db.members.findAll({
				order: [['batch_id', 'DESC']]
			}).then((result) =>{
				console.log(result[0].dataValues)
				console.log(result[0].dataValues.id)
				res.render('updateMembers1', {
					name: req.session.user.name, 
					result: result
				})
			})
		}
		else {
			res.render('login')
		}
	})//end of app.get

	// MEMBER SELECTED FOR INFO UPDATE ROUTE
	app.post('/updateMembers1Route', (req, res) => {
		if(req.session.user) {
			console.log(" SWHHASDLIFJ", req.body.selectedMember)
			db.members.findAll({
				where: {
					id: req.body.selectedMember
				}
			})
			.then((result) => {
				res.render('updateMembers2', {
					name: req.session.user.name, 
					result: result
				})
			})
			.catch(err =>{
	    		console.log(err)
			})
		} else {
			res.render('login')
		}
	}) // end of app.post
}


