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
		  		cb(null, 'public/images/profielfoto_leden')
			},
			filename: function (req, file, cb) {
				cb(null, Date.now() + path.extname(file.originalname))
			}
		}),
		upload = multer({ storage: storage }),
	  // upload = multer({ dest: 'public/images/uploaditem' }),
		db = require(path.resolve( __dirname, "./config/db.js" )),
		env = require(path.resolve( __dirname, "./config/.env.js" )),

require ('dotenv').load()
app.set("view engine", "pug")
var WEBPORT = env.WEBPORT
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, 'public'))); // to give app.js access to public folder on server


app.use(session({
    secret: 'keyboard cat', // MAKE THIS AN ENV VARIABLE ALSO
    cookie: {},
    resave: true,               
    saveUninitialized: true     
}))


//ROUTES
require("./routes/index.js")(app)

// require("./routes/leden.js")(app)
// require("./routes/agenda.js")(app)
// require("./routes/maastricht.js")(app)
// require("./routes/contact.js")(app)

require("./routes/signup.js")(app, db, bcrypt)
require("./routes/login_logout.js")(app, db, bcrypt)
require("./routes/profile.js")(app, db)

db.sequelize.sync({ 
    force: false, // CHANGE THIS TO FALSE WHEN HOSTING - WILL OTHERWISE DELETE ALL DATA WHEN RESTARTING THE APP ! ! ! ! ! ! ! ! ! !! ! ! ! ! ! ! !! ! 
    logging: console.log 
}).then(()=> {
	app.listen(WEBPORT, ()=>{
	console.log('Running on', WEBPORT)
	})
})


