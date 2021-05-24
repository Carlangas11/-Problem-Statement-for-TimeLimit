const { expect } = require("chai");
const { TimeLimit } = require("./index");

describe("TimeLimit", function () {
  it("should return 1899 if goodTimes array is [1200,1450] and badTimes array is [1900, 2100, 9875]", () => {
    var goodTimes = [1200, 1450];
    var badTimes = [1900, 2100, 9875];
    expect(TimeLimit(goodTimes, badTimes)).to.equal(1899);
  });
  it("should return -1 if goodTimes array is [1000, 3000] and badTimes array is [5000, 2000, 4000, 2976]", () => {
    var goodTimes = [1000, 3000];
    var badTimes = [5000, 2000, 4000, 2976];
    expect(TimeLimit(goodTimes, badTimes)).to.equal(-1);
  });
  it("should return 70 if goodTimes array is [30, 20, 50, 10, 70, 40, 60] and badTimes array is [91, 86, 71, 77, 71, 999, 314]", () => {
    var goodTimes = [30, 20, 50, 10, 70, 40, 60];
    var badTimes = [91, 86, 71, 77, 71, 999, 314];
    expect(TimeLimit(goodTimes, badTimes)).to.equal(70);
  });
});
