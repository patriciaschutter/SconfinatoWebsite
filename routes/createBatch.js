module.exports = (app, db, upload, path, fs) => {
    // ROUTE TO RENDER CREATE BATCH PAGE
    app.get('/createBatch', (req, res) => {
        if (req.session.user) {
        	db.batches.count().then(count => {
        		console.log("number of batches", count)
        		var batchNr = count
				res.render("createBatch", {
					name: req.session.user.name,
					batchNr: batchNr.toString()
				 })
        	})
        } else {
            res.render("login")
        }
    }) // closing app.get('/addLichtingPage')

    // ROUTE ON SUBMIT BATCHFORM
    app.post('/batchRoute', upload.single("batch_photo"), function(req, res){
    	if(req.session.user){
    		db.batches.create({
    			batch: parseInt(req.body.batch),
    			inauguration: req.body.inauguration,
    			batch_photo: req.file.filename
    		})
            .then(()=>{
                db.batches.findAll({
                    where: {
                        batch: parseInt(req.body.batch)
                    }
                })
                .then((result) =>{
                    res.render('createMembers', {
                            name: req.session.user.name,
                            batchNr: req.body.batch,
                            batches: result
                    })
                })
            })
           .catch((e) => {
                console.log(e)
            })
    	} else {
            res.render("login")
        }
    }) // closing app.post('/batchRoute')

    // ROUTE IF NOT LOGGED IN AND ON ADD BATCHFORM ROUTE
    app.get('/batchRoute', (req, res) => {
        if(req.session.user) {
            res.redirect('createBatch')
        } else {
            res.render("login")
        }
    });// closing app.get('/batchRoute')

} // closing module.export


