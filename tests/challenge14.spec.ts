import getOptimalPath from "../src/challenge14";

describe("Challenge #14: The best path", () => {
  it("should return number type", () => {
    const pyramid: number[][] = [[0], [2, 3]];

    expect(getOptimalPath(pyramid)).toEqual(expect.any(Number));
  });

  it("should return 2 as best path", () => {
    const pyramid: number[][] = [[0], [2, 3]];

    expect(getOptimalPath(pyramid)).toBe(2);
  });

  it("should return 5 as best path", () => {
    const pyramid: number[][] = [[0], [3, 4], [9, 8, 1]];

    expect(getOptimalPath(pyramid)).toBe(5);
  });

  it("should return 8 as best path", () => {
    const pyramid: number[][] = [[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]];

    expect(getOptimalPath(pyramid)).toBe(8);
  });
});
