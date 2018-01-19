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
    }) // closing app.get

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
    }) // closing app.post
} // closing module.export


