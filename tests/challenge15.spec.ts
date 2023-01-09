import decorateTree from "../src/challenge15";

describe("Challenge #15: Decorating the Christmas tree", () => {
  it("should return array type", () => {
    let base = "B P R P";
    expect(decorateTree(base)).toBeInstanceOf(Array);
  });

  it("should R at the top", () => {
    let base = "B P R P";
    expect(decorateTree(base)).toEqual(["R", "P B", "R B B", "B P R P"]);
  });

  it("should return B at the top", () => {
    let base = "B B";
    expect(decorateTree(base)).toEqual(["B", "B B"]);
  });
});
