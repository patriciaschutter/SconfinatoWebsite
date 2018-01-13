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

    app.post('/batchRoute', upload.fields([{ name: 'batch_photo', maxCount: 1}, { name: 'member[]'}]), function(req, res){
        console.log("req.body.member = ", req.body.member)
        console.log("req.body.member[0] = ", req.body.member[0])
        console.log("req.body.member[0].FN = ", req.body.member[0].FN)
        console.log("req.body.member.FN = ", req.body.member.FN)
        // console.log("req.files = ", req.files)
        // console.log("parsed batch", parseInt(req.body.batch))
        // console.log("req.body.member = ", req.body.member)

    	// if(req.session.user){
    	// 	db.batches.create({
    	// 		batch: parseInt(req.body.batch),
    	// 		inauguration: req.body.inauguration,
    	// 		batch_photo: req.files.batch_photo.filename
    	// 	})
    	// 	.then( () => {
     //            for (var item in req.body.member){
     //                console.log(item.FN)
     //            }
     //            console.log("yes inserted in members" )
     //        })
     //        .then(()=>{
                res.send("inserted in both databases")
                // res.render('addLichting', {
                //         name: req.session.user.name,
                //         batchCreated: yes
                //     })
     //        })
     //       .catch((e) => {
     //            console.log(e)
     //        })
    	// } else {
     //        res.render("login")
     //    }
    }) // closing app.post('/batchRoute')


} // closing modele.export

// var string1 = "";
// var object1 = {a: 1, b: 2, c: 3};

// for (var property1 in object1) {
//   string1 = string1 + object1[property1];
// }

// console.log(string1);
// // expected output: "123"



