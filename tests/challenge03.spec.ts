import distributeGifts from '../src/challenge03';

describe("Challenge #3: How many packs of gifts can Santa carry?", () => {
  it("should return number type", () => {
    const packOfGifts: string[] = ["book", "doll", "ball"];
    const reindeers: string[] = ["dasher", "dancer"];
    const maximumPacksToDeliver: number = distributeGifts(packOfGifts, reindeers);

    expect(maximumPacksToDeliver).toEqual(expect.any(Number));
  });

  it("should return 2 maximum packs can be delivered", () => {
    const packOfGifts: string[] = ["book", "doll", "ball"];
    const reindeers: string[] = ["dasher", "dancer"];
    const distributedGifts: number = distributeGifts(packOfGifts, reindeers);

    expect(distributedGifts).toBe(2);
  });

  it("should return 1 maximum packs can be delivered", () => {
    const packOfGifts: string[] = ["book", "doll", "ball", "computer"];
    const reindeers: string[] = ["dasher", "dancer"];
    const distributedGifts: number = distributeGifts(packOfGifts, reindeers);

    expect(distributedGifts).toBe(1);
  });
});