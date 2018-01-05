const express = require("express")
const app = express()
	  
app.set("view engine", "pug")


require("./routes/index.js")(app) 

app.listen(3001, ()=>{
	console.log("Running on 3001")
})


