const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Design the inDine items schema
const inDine = new Schema({
  name: {
    type: String,
    required: true
  }
});

module.exports = InDine = mongoose.model("inDiningList", inDine);
