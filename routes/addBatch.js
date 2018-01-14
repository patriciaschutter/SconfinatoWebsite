module.exports = (app, db, upload, path, fs) => {
    // ROUTE TO RENDER ADD LICHTING PAGE
    app.get('/addBatchPage', (req, res) => {
        if (req.session.user) {
        	db.batches.count().then(count => {
        		console.log("number of batches", count)
        		var newBatchNR = count
        		console.log("new batch nr =", newBatchNR)
				res.render("addBatchPage", {
					name: req.session.user.name,
					newBatchNR: newBatchNR.toString()
				 })
        	})

        } else {
            res.render("login")
        }
    }) // closing app.get('/addLichtingPage')

    app.post('/batchRoute', upload.single("batch_photo"), function(req, res){
        console.log("CONSOLE.LOG REQ.FILE", req.file)
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
                    console.log(result)
                    res.render('addBatchPage', {
                            name: req.session.user.name,
                            batchNR: req.body.batch,
                            batchCreated: 'yes',
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


    app.post('/memberRoute', upload.fields([{name: "pf_photo[]"}]), function(req, res){
        console.log("req.body.member=", req.body.member)
        console.log("CONSOLELOG REQ.FILEs=", req.files)

        res.send('hoiiii')

    }) // closing app.post('/batchRoute')

} // closing modele.export


