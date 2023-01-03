import checkJump from '../src/challenge10';

describe("Challenge #10:The Santa Claus sleigh jump",() => {
  it("should return boolean type", () => {
    const heights = [1, 3, 8, 5, 2]
    expect(checkJump(heights)).toEqual(expect.any(Boolean));
  });

  it("should return true when jump goes up down", () => {
    const heights = [1, 3, 8, 5, 2]
    expect(checkJump(heights)).toBe(true);
  })

  it("should return false when jump goes through same height", () => {
    const heights = [2, 2, 2, 2]
    expect(checkJump(heights)).toBe(false);
  })

  it("should return false when jump goes only up", () => {
    const heights = [1, 2, 3]
    expect(checkJump(heights)).toBe(false);
  })

  it("should return false when jump goes only up", () => {
    const heights = [1, 7, 3, 5]
    expect(checkJump(heights)).toBe(false);
  })
});