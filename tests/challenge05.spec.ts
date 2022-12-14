import getMaxGifts from '../src/challenge05';

describe("Challenge #5: Optimizing Santa's trips", () => {
  it("should return Number type", () => {
    const giftsCities: number[] = [12, 3, 11, 5, 7];
    const maxGifts: number = 20;
    const maxCities: number = 3;

    const maxDistributedGifts: number = getMaxGifts(giftsCities, maxGifts, maxCities);

    expect(maxDistributedGifts).toEqual(expect.any(Number));
  });

  it("should return 1 for one gift and maxGifts 1 and one city", () => {
    const giftsCities = [1];
    const maxGifts = 1;
    const maxCities = 1;

    const maxDistributedGifts: number = getMaxGifts(giftsCities, maxGifts, maxCities);

    expect(maxDistributedGifts).toBe(1);
  });

  it("should return 0 for maxGifts 15 and giftCity 50", () => {
    const giftsCities = [50];
    const maxGifts = 15;
    const maxCities = 1;

    const maxDistributedGifts: number = getMaxGifts(giftsCities, maxGifts, maxCities);

    expect(maxDistributedGifts).toBe(0);
  });

  it("should return 19 for maxGifts 19", () => {
    const giftsCities = [10, 8, 9];
    const maxGifts = 19;
    const maxCities = 2;

    const maxDistributedGifts: number = getMaxGifts(giftsCities, maxGifts, maxCities);

    expect(maxDistributedGifts).toBe(19);
  });

  it("should return 23 for maxGifts 23", () => {
    const giftsCities = [10, 9, 8, 7, 6];
    const maxGifts = 23;
    const maxCities = 2;

    const maxDistributedGifts: number = getMaxGifts(giftsCities, maxGifts, maxCities);

    expect(maxDistributedGifts).toBe(19);
  });

  it("should return 20 for maxGifts 20", () => {
    const giftsCities = [12, 3, 11, 5, 7];
    const maxGifts = 20;
    const maxCities = 3;

    const maxDistributedGifts: number = getMaxGifts(giftsCities, maxGifts, maxCities);

    expect(maxDistributedGifts).toBe(20);
  });

  it("should return 100 for maxGifts 100", () => {
    const giftsCities = [50, 70, 30];
    const maxGifts = 100;
    const maxCities = 4;

    const maxDistributedGifts: number = getMaxGifts(giftsCities, maxGifts, maxCities);

    expect(maxDistributedGifts).toBe(100);
  });

  it("should return 100 for maxGifts 100", () => {
    const giftsCities = [50, 70];
    const maxGifts = 100;
    const maxCities = 1;

    const maxDistributedGifts: number = getMaxGifts(giftsCities, maxGifts, maxCities);

    expect(maxDistributedGifts).toBe(70);
  });
});