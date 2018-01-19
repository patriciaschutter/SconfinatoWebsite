module.exports = (app, db) => {
	app.get('/leden', (req, res) => {
		
		db.batches.findAll({
			// exclude: { // exclude batch 0 > founders seperate on page
			// 	where: {
			// 		batch: 0
			// 	}
			// },
			include: [{
				model: db.members,
			}],
			order: [['batch', 'DESC']]
			
		})
		.then((result) => {
			if(req.session.user){
			console.log(' RESULT ===== ', result)
			// console.log('RESULT[0].dataValues.batch', result[1].dataValues.batch) // gives batch nr
			// console.log('RESULT[0].members', result[0].members) // gives members
			// console.log('RESULT[0].members[0].dataValues', result[0].members[0].dataValues.first_name) // gives FN
			// console.log('RESULT[0].members[1].dataValues', result[0].members[1].dataValues.first_name) // gives FN
				res.render('leden',{
					result: result,
					name: req.session.user.name
				})
			} 
			else {
				res.render('leden', {
					result: result
				})
			}
		})
		.catch((e) => {
			console.log(e)
		})
	})//end of app.get
}//end of module exports