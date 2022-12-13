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

  it("should return false for boxes with incorrect size", () => {
    const boxes = [
      { l: 1, w: 1, h: 1 },
      { l: 2, w: 2, h: 2 },
      { l: 3, w: 1, h: 3 }
    ]

    expect(fitsInOneBox(boxes)).toBe(false);
  });

  it("should return true for boxes with correct size in different order", () => {
    const boxes = [
      { l: 1, w: 1, h: 1 },
      { l: 3, w: 3, h: 3 },
      { l: 2, w: 2, h: 2 }
    ]

    expect(fitsInOneBox(boxes)).toBe(true);
  });

  it("should return false for boxes with incorrect size in different order", () => {
    const boxes = [
      { l: 1, w: 1, h: 3 },
      { l: 1, w: 2, h: 1 },
      { l: 2, w: 2, h: 2 }
    ]

    expect(fitsInOneBox(boxes)).toBe(false);
  });
});