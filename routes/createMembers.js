module.exports = (app, db, upload, path, fs) => {
	// ROUTE ON SUBMIT MEMBERFORM
	app.post('/memberRoute', upload.array("pf_photo[]"), function(req, res){
		if(req.session.user){
			var reqbodymember = req.body.member
			var reqfiles = req.files
			var allMembers = []

			function mapMembersToObject(inputText, files) {
				for(let i = 0; i < inputText.length; i++) {
					allMembers.push({
						memberInfo: inputText[i],
						profilePic: files[i]
					})
				}
				return allMembers
			}
			
			mapMembersToObject(reqbodymember, reqfiles) // call the function 
			
			console.log("allMembers", allMembers[0].profilePic.filename)
			console.log("allMembersFirstname", allMembers[0].memberInfo.FN)
			for(var i = 0; i < allMembers.length; i++) {
				db.members.create({
					first_name: allMembers[i].memberInfo.FN,
					last_name: allMembers[i].memberInfo.LN,
					linkedin: allMembers[i].memberInfo.linkedin,
					pf_photo: allMembers[i].profilePic.filename,
					batch_id: parseInt(req.body.batch)+1
				})
			}
			res.render("profile", {
				name: req.session.user.name,
				succesMessage: `Lichting ${req.body.batch} is toegevoegd`
			})

		} else {
            res.render("login")
        }	  
	}) // closing app.post('/memberRoute')

} // closing module.export

