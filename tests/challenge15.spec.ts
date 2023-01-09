import decorateTree from "../src/challenge15";

describe("Challenge #15: Decorating the Christmas tree", () => {
  it("should return array type", () => {
    let base = "B P R P";
    expect(decorateTree(base)).toBeInstanceOf(Array);
  });
});
