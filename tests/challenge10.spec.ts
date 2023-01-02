import checkJump from '../src/challenge10';

describe("Challenge #10:The Santa Claus sleigh jump",() => {
  it("should return boolean type", () => {
    const heights = [1, 3, 8, 5, 2]
    expect(checkJump(heights)).toEqual(expect.any(Boolean));
  });
});