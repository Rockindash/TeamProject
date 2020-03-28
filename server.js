const express = require("express");
const app = express();
const mongoose = require("mongoose");
const mongoURI = require("./config/keys");

// Use express body-parser
app.use(express.json());

// Connect with mongo cloud db
const db = mongoURI;
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true });

// Set a temporary default route
app.get("/", (req, res) => {
  res.json({ msg: "this is a temporary server" });
});

// Initialize server on port 5000
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}...`);
});
