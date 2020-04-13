const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Design the inDine items schema
const outDine = new Schema({
  name: {
    type: String,
    required: true
  }
});

module.exports = OutDine = mongoose.model("outDiningList", outDine);
