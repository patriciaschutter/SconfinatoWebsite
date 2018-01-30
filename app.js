const	express = require("express"),
		app = express(),
		path = require("path"),
		session = require("express-session"),
		bodyParser = require("body-parser"),
		pg = require('pg'),
		Client = pg.Client,
		bcrypt = require('bcrypt'),
		multer  = require('multer'),
		fs = require('fs'),
		dotenv = require("dotenv")
		storage = multer.diskStorage({
		  	destination: function (req, file, cb) {
		  		cb(null, 'public/images/uploaded_db')
			},
			filename: function (req, file, cb) {
				cb(null, Date.now() + path.extname(file.originalname))
			}
		}),
		upload = multer({ 
			storage: storage,
			limits: { fileSize: 10000000 } // 10MB
		}),
		db = require(path.resolve( __dirname, "./config/db.js" )),
		env = require(path.resolve( __dirname, "./config/.env.js" )),

require ('dotenv').load()
app.set("view engine", "pug")
var WEBPORT = env.WEBPORT
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, 'public'))); // to give app.js access to public folder on server


app.use(session({
    secret: 'keyboard cat', 
    cookie: {},
    resave: true,               
    saveUninitialized: true     
}))


//ROUTES
require("./routes/index.js")(app)

require("./routes/leden.js")(app, db)
require("./routes/agenda.js")(app)
require("./routes/photoPage.js")(app)
// require("./routes/contact.js")(app)

require("./routes/signup.js")(app, db, bcrypt)
require("./routes/login_logout.js")(app, db, bcrypt)
require("./routes/profile.js")(app, db)
require("./routes/createBatch.js")(app, db, upload, path, fs)
require("./routes/createMembers.js")(app, db, upload, path, fs)
require("./routes/updateMembers1.js")(app, db, upload, path, fs)
require("./routes/updateMembers2.js")(app, db, upload, path, fs)
require("./routes/updatePraesidium.js")(app, db, upload, path, fs)


db.sequelize.sync({ 
    force: false, // CHANGE THIS TO FALSE WHEN HOSTING - WILL OTHERWISE DELETE ALL DATA WHEN RESTARTING 
    logging: console.log 
}).then(()=> {
	app.listen(WEBPORT, ()=>{
	console.log('Running on', WEBPORT)
	})
})


