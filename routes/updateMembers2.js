module.exports = (app, db) => {
	//ROUTE TO UPDATE NEW MEMBER INFO IN DATABASE 
	app.post('/updateMembers2Route', upload.single("pf_photo"), (req, res) =>{
		console.log('hallo')
		if(req.session.user){
			console.log('req.body', req.body)
			console.log('req.file', req.file)
			db.members.update(
			{	first_name: req.body.first_name,
				last_name: req.body.last_name,
				linkedin: req.body.linkedin },
			{	where: { id: req.body.memberid} }//// NOT HARDCODED
			)
			.then(()=>{
				res.render("profile", {
					name: req.session.user.name,
					succesMessage: `Info of ${req.body.first_name} ${req.body.last_name} has been updated`
				})
			})
			.catch(err =>{
	    		console.log(err)
			})
		} else {
            res.render("login")
        }	
	})

}

// db.members.findAll({
// 				where: {
// 					id: req.body.selectedMember
// 				}
// 			})

// // The equivalent call using update looks like this:
// task.update({ title: 'foooo', description: 'baaaaaar'}, {fields: ['title']}).then(() => {
//  // title will now be 'foooo' but description is the very same as before
// })