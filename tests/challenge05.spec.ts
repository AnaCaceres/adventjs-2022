import getMaxGifts from '../src/challenge05';

describe("Challenge #5: Optimizing Santa's trips", () => {
  it("should return Number type", () => {
    const giftsCities: number[] = [12, 3, 11, 5, 7];
    const maxGifts: number = 20;
    const maxCities: number = 3;
    const maxDistributedGifts: number = getMaxGifts(giftsCities, maxGifts, maxCities);

    expect(maxDistributedGifts).toEqual(expect.any(Number));
  });
});