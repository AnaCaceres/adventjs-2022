import dryNumber from "../src/challenge18";

describe("Challenge #18: We ran out of ink!", () => {
  it("should return array type", () => {
    expect(dryNumber(1, 15)).toBeInstanceOf(Array);
  });

  it("should return array type", () => {
    expect(dryNumber(1, 15)).toBeInstanceOf(Array);
  });

  it("should return 7 numbers that can't be printed", () => {
    expect(dryNumber(1, 15)).toEqual([1, 10, 11, 12, 13, 14, 15]);
  });

  it("should return 3 numbers that can't be printed", () => {
    expect(dryNumber(2, 20)).toEqual([2, 12, 20]);
  });
});
