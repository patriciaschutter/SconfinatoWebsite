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

    app.post('/batchRoute', upload.single("file"), function(req, res){
    	if(true){
    		console.log("req.file = ", req.file)
    		console.log("req.body = ", req.body)
    		db.batches.create({
    			batch: parseInt(req.body.batch),
    			inauguration: req.body.inauguration,
    			batch_photo: req.file.filename
    		})
    		.then( () => {
                var yes = "yes"
                console.log(yes)
                console.log(parseInt(req.body.batch))
                res.render('addLichting', {
                    name: req.session.user.name,
                    batchCreated: yes
                })
            })
           .catch((e) => {
                console.log(e)
            })
    	} else {
            res.render("login")
        }
    }) // closing app.post('/LichtingRoute')


} // closing modele.export