const express = require("express")
const app = express()
const port = 42069

//static files
app.use(express.urlencoded({ extended: true }))

app.use("/public", express.static(__dirname + "/public"))
//end of static files

app.get("/", (req, res) => {
  res.redirect("/public/index.html")
})

app.listen(port, () => {
  console.log("listening on port " + port)
})
