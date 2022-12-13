import distributeGifts from '../src/challenge03';

describe("Challenge #3: How many packs of gifts can Santa carry?", () => {
  it("should return number type", () => {
    const packOfGifts: string[] = ["book", "doll", "ball"];
    const reindeers: string[] = ["dasher", "dancer"];
    const distributedGifts: number = distributeGifts(packOfGifts, reindeers);

    expect(distributedGifts).toEqual(expect.any(Number));
  });
});