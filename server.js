const express = require("express")
const app = express()
const mongoose = require("mongoose")
const mongoURI = require("./config/keys")
const cors = require("cors")
const items = require("./routes/api/items")
// Use cors
app.use(cors())
// Use express body-parser
app.use(express.json())
// Connect with mongo cloud db
const db = mongoURI.mongoURI
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected..."))
  .catch(err => console.log(err))
// Use API routes
app.use("/api/items", items)
// Set a temporary default route
app.get("/", (req, res) => {
  res.json({ msg: "this is a temporary server" })
})
// Initialize server on port 5000
const port = process.env.PORT || 5000
var server = app.listen(port, () => {
  console.log(`Server started on port ${port}...`)
})

module.exports = server