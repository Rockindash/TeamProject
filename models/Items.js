const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Design the schema
const ItemSchema = new Schema({
  inDineNameTimeStamp: {
    type: Array,
    required: true
  },
  outDineNameTimeStamp: {
    type: Array,
    required: true
  },
  currentDate: {
    type: String,
    required: true
  },
  inDineUnit: {
    type: Array,
    required: true
  },
  outDineUnit: {
    type: Array,
    required: true
  },
  inDineQuantity: {
    type: Array,
    required: true
  },
  outDineQuantity: {
    type: Array,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  inDiningList: {
    type: Array,
    required: true
  },
  inDineSelectedState: {
    type: Array,
    required: true
  },
  outDiningList: {
    type: Array,
    required: true
  },
  outDineSelectedState: {
    type: Array,
    required: true
  },
  milkGroup: {
    type: Array,
    required: true
  },
  vegGroup: {
    type: Array,
    required: true
  },
  grainGroup: {
    type: Array,
    required: true
  },
  meatGroup: {
    type: Array,
    required: true
  },
  milkGroupUnit: {
    type: Array,
    required: true
  },
  vegGroupUnit: {
    type: Array,
    required: true
  },
  grainGroupUnit: {
    type: Array,
    required: true
  },
  meatGroupUnit: {
    type: Array,
    required: true
  },
  milkGroupQuantity: {
    type: Array,
    required: true
  },
  vegGroupQuantity: {
    type: Array,
    required: true
  },
  grainGroupQuantity: {
    type: Array,
    required: true
  },
  meatGroupQuantity: {
    type: Array,
    required: true
  },
  milkSum: {
    type: Number,
    default: 0,
    required: true
  },
  vegSum: {
    type: Number,
    default: 0,
    required: true
  },
  grainSum: {
    type: Number,
    default: 0,
    required: true
  },
  meatSum: {
    type: Number,
    default: 0,
    required: true
  }
});

module.exports = Items = mongoose.model("items", ItemSchema);

// milkGroupUnit
// to
// last
