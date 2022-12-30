import checkPart from '../src/challenge08';

describe("Challenge #8: We need a mechanic!",() => {
  it("should return Boolean type", () => {
    expect(checkPart("")).toEqual(expect.any(Boolean));
  });
});