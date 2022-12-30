import countTime from '../src/challenge09';

describe("Challenge #9: Crazy Xmas lights",() => {
  it("should return number type", () => {
    const leds = [0, 1, 1, 0, 1];
    expect(countTime(leds)).toEqual(expect.any(Number));
  });
});