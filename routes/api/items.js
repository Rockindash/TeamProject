const express = require("express")
const router = express.Router()

// Import db model
const Items = require("../../models/Items")
const Indine = require("../../models/InDineItem")
const Outdine = require("../../models/OutDineItem")

// @route   GET all items
// @desc    view all entries currently in db
// @access  public
router.get("/", (req, res) => {
  console.log("Server get request")
  Items.find().then(items => res.json(items))
})

// @route   Sync items
// @desc    synchronize front end with back
// @access  public
router.post("/", (req, res) => {
  console.log("Server sync request")
  var query = { _id: "5e80317b5cf02b571404c15d" }
  Items.updateOne(
    query,
    {
      inDineNameTimeStamp: req.body.inDineNameTimeStamp,
      outDineNameTimeStamp: req.body.outDineNameTimeStamp,
      currentDate: req.body.currentDate,
      inDineUnit: req.body.inDineUnit,
      outDineUnit: req.body.outDineUnit,
      inDineQuantity: req.body.inDineQuantity,
      outDineQuantity: req.body.outDineQuantity,
      quantity: req.body.quantity,
      inDiningList: req.body.inDiningList,
      inDineSelectedState: req.body.inDineSelectedState,
      outDiningList: req.body.outDiningList,
      outDineSelectedState: req.body.outDineSelectedState,
      milkGroup: req.body.milkGroup,
      vegGroup: req.body.vegGroup,
      grainGroup: req.body.grainGroup,
      meatGroup: req.body.meatGroup,
      milkGroupUnit: req.body.milkGroupUnit,
      vegGroupUnit: req.body.vegGroupUnit,
      grainGroupUnit: req.body.grainGroupUnit,
      meatGroupUnit: req.body.meatGroupUnit,
      milkGroupQuantity: req.body.milkGroupQuantity,
      vegGroupQuantity: req.body.vegGroupQuantity,
      grainGroupQuantity: req.body.grainGroupQuantity,
      meatGroupQuantity: req.body.meatGroupQuantity,
      milkSum: req.body.milkSum,
      vegSum: req.body.vegSum,
      grainSum: req.body.grainSum,
      meatSum: req.body.meatSum,
    },
    err => {
      if (err) res.status(404).json({ msg: "error" })
    }
  ).then(res.status(200).json({ msg: "updated " }))
})

// @route   POST indineitem
// @desc    add an item to indine list
// @access  public
router.post("/inDineItem", (req, res) => {
  const newItem = new InDine({
    name: req.body.name,
  })

  newItem.save().then(items => {
    res.json(items)
  })
})

// @route   POST outdineitem
// @desc    add an item to outdine list
// @access  public
router.post("/outDineItem", (req, res) => {
  const newItem = new OutDine({
    name: req.body.name,
  })

  newItem.save().then(items => {
    res.json(items)
  })
})

// Initialize the schema in db
router.post("/init", (req, res) => {
  console.log('Server item init req')
  const newItem = new Items({
    _id: "5e80317b5cf02b571404c15d",
    inDiningList: req.body.inDiningList,
    inDineSelectedState: req.body.inDineSelectedState,
    outDiningList: req.body.outDiningList,
    outDineSelectedState: req.body.outDineSelectedState,
    milkGroup: req.body.milkGroup,
    vegGroup: req.body.vegGroup,
    grainGroup: req.body.grainGroup,
    meatGroup: req.body.meatGroup,
    milkGroupUnit: req.body.milkGroupUnit,
    vegGroupUnit: req.body.vegGroupUnit,
    grainGroupUnit: req.body.grainGroupUnit,
    meatGroupUnit: req.body.meatGroupUnit,
    milkGroupQuantity: req.body.milkGroupQuantity,
    vegGroupQuantity: req.body.vegGroupQuantity,
    grainGroupQuantity: req.body.grainGroupQuantity,
    meatGroupQuantity: req.body.meatGroupQuantity,
    milkSum: req.body.milkSum,
    vegSum: req.body.vegSum,
    grainSum: req.body.grainSum,
    meatSum: req.body.meatSum,
    inDineNameTimeStamp: req.body.inDineNameTimeStamp,
    outDineNameTimeStamp: req.body.outDineNameTimeStamp,
    currentDate: req.body.currentDate,
    inDineUnit: req.body.inDineUnit,
    outDineUnit: req.body.outDineUnit,
    inDineQuantity: req.body.inDineQuantity,
    outDineQuantity: req.body.outDineQuantity,
    quantity: req.body.quantity,
  });

  newItem.save().then(items => {
    res.json(items);
  });
});

module.exports = router
