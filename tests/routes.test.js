const request = require("supertest")
var app = require("../server")
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
      }, done)
  })
})