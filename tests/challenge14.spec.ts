import getOptimalPath from "../src/challenge14";

describe("Challenge #14: The best path", () => {
  it("should return number type", () => {
    const pyramid: number[][] = [[0], [2, 3]];

    expect(getOptimalPath(pyramid)).toEqual(expect.any(Number));
  });
});