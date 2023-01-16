import carryGifts from "../src/challenge17";

describe("Challenge #17: Carrying gift bags", () => {
  it("should return array type", () => {
    let gifts: string[] = ["game", "bike", "book", "toy"];
    let maxWeight: number = 10;
    expect(carryGifts(gifts, maxWeight)).toBeInstanceOf(Array);
  });

  it("should return 2 bags", () => {
    let gifts: string[] = ["game", "bike", "book", "toy"];
    let maxWeight: number = 10;
    expect(carryGifts(gifts, maxWeight)).toEqual(["game bike", "book toy"]);
  });
});
