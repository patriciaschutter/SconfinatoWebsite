const express = require("express")
const app = express()
const path = require("path")
	  
app.set("view engine", "pug")
app.use(express.static(path.join(__dirname, 'public'))); // to give app.js access to images on server





// require("./routes/prepage.js")(app)
require("./routes/index.js")(app)

// require("./routes/leden.js")(app)
// require("./routes/agenda.js")(app)
// require("./routes/maastricht.js")(app)
// require("./routes/contact.js")(app)
// require("./routes/login.js")(app)
// require("./routes/profile.js")(app)
// require("./routes/logout.js")(app)



app.listen(3001, ()=>{
	console.log("Running on 3001")
})


