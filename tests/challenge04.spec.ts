import fitsInOneBox from '../src/challenge04';

describe("Challenge #4: Box inside a box and another...", () => {
  it("should return Boolean type", () => {
    const boxes = [
      { l: 1, w: 1, h: 1 },
      { l: 2, w: 2, h: 2 }
    ];

    expect(fitsInOneBox(boxes)).toEqual(expect.any(Boolean));
  });

  it("should return true for boxes with correct size", () => {
    const boxes = [
      { l: 1, w: 1, h: 1 },
      { l: 2, w: 2, h: 2 }
    ];

    expect(fitsInOneBox(boxes)).toBe(true);
  });
});