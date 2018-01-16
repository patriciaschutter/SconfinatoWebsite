module.exports = (app, db) => {
	app.get('/leden', (req, res) => {
		db.batches.findAll({
			include: [{
				model: db.members,
			}],
			order: [['batch', 'DESC']]
		})
		.then((result) => {
			
			console.log('ONLY RESULT[0]', result[1])
			console.log('RESULT[0].dataValues.batch', result[1].dataValues.batch) // gives batch nr
			// console.log('RESULT[0].members', result[0].members) // gives members
			// console.log('RESULT[0].members[0].dataValues', result[0].members[0].dataValues.first_name) // gives FN
			// console.log('RESULT[0].members[1].dataValues', result[0].members[1].dataValues.first_name) // gives FN
			res.render('leden',{
				result: result
			})
		})
		.catch((e) => {
			console.log(e)
		})
	})
}

