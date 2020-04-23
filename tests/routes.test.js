const request = require("supertest")
var app = require("../server")
<<<<<<< HEAD

describe("Items api route", () => {
    it("GET items ", function(done) {
      request(app)
        .get("/api/items")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200, done)
    })

    it("should send data to the db", () => {
        request(app)
          .post("/api/items")
          .send({
            inDiningList: ["Milk", "Oats"],
            inDineSelectedState: [true, false],
            outDiningList: ["Burger"],
            outDineSelectedState: [true],
            milkGroup: ["Milk"],
            vegGroup: [],
            grainGroup: ["Oats"],
            meatGroup: [],
            milkGroupUnit: ["Cup"],
            grainGroupUnit: ["Gms"],
            meatGroupUnit: [],
            vegGroupUnit: [],
            milkGroupQuantity: ["1"],
            vegGroupQuantity: [],
            grainGroupQuantity: ["20"],
            meatGroupQuantity: [],
            milkSum: 200,
            vegSum: 0,
            grainSum: 0,
            meatSum: 0,
          })
          .expect(200, {
            msg: "updated",
          })
      })
    })
=======
describe("Items api route", () => {
  it("GET items ", function(done) {
    request(app)
      .get("/api/items")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done)
  })
  it("should send data to the db", (done) => {
    request(app)
      .post("/api/items")
      .send({
        inDiningList: ["Rice"],
        inDineSelectedState: [true],
        outDiningList: [],
        outDineSelectedState: [true],
        milkGroup: [],
        vegGroup: [],
        grainGroup: ["Rice"],
        meatGroup: [],
        milkGroupUnit: [],
        grainGroupUnit: ["Bowl"],
        meatGroupUnit: [],
        vegGroupUnit: [],
        milkGroupQuantity: ["1"],
        vegGroupQuantity: [],
        grainGroupQuantity: ["20"],
        meatGroupQuantity: [],
        milkSum: 0,
        vegSum: 0,
        grainSum: 0,
        meatSum: 0,
        inDineNameTimeStamp: ["12-3-2020, 20:20"],
        outDineNameTimeStamp: [],
        currentDate: "12-3-2020, 20:20",
        inDineUnit: ["Bowl"],
        outDineUnit: [],
        inDineQuantity: ["1"],
        outDineQuantity: [],
        quantity: 1,
      })
      .expect(200, {
        msg: "updated ",
      }, done)
  })
})
>>>>>>> 25f50448582f35e1e05cdda91758f3937adb0244
