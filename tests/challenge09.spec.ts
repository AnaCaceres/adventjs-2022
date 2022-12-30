import countTime from '../src/challenge09';

describe("Challenge #9: Crazy Xmas lights",() => {
  it("should return number type", () => {
    const leds = [0, 1, 1, 0, 1];
    expect(countTime(leds)).toEqual(expect.any(Number));
  });

  it("should return 7 seconds", () => {
    const leds = [0, 1, 1, 0, 1];
    expect(countTime(leds)).toBe(7);
  });

  it("should return 21 seconds", () => {
    const leds = [0, 0, 0, 1];
    expect(countTime(leds)).toBe(21);
  });

  it("should return 21 seconds", () => {
    const leds = [0, 0, 1, 0, 0];
    expect(countTime(leds)).toBe(28);
  });

  it("should return 0 seconds", () => {
    const leds = [1, 1, 1];
    expect(countTime(leds)).toBe(0);
  });
});