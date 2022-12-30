import checkPart from '../src/challenge08';

describe("Challenge #8: We need a mechanic!",() => {
  it("should return Boolean type", () => {
    expect(checkPart("")).toEqual(expect.any(Boolean));
  });

  it("should return true for 'uwu'", () => {
    expect(checkPart("uwu")).toBe(true);
  });

  it("should return true for 'miidim'", () => {
    expect(checkPart("miidim")).toBe(true);
  });

  it("should return false for 'midu'", () => {
    expect(checkPart("midu")).toBe(false);
  });

  it("should return true for 'Mam'", () => {
    expect(checkPart("Mam")).toBe(true);
  });
});