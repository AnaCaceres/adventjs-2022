import dryNumber from "../src/challenge18";

describe("Challenge #18: We ran out of ink!", () => {
  it("should return array type", () => {
    expect(dryNumber(1, 15)).toBeInstanceOf(Array);
  });
});
