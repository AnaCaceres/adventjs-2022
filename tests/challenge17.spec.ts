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

  it("should return 4 bags", () => {
    let gifts: string[] = ["game", "bike", "book", "toy"];
    let maxWeight: number = 4;
    expect(carryGifts(gifts, maxWeight)).toEqual([
      "game",
      "bike",
      "book",
      "toy",
    ]);
  });

  it("should return 4 bags", () => {
    let gifts: string[] = ["toy", "gamme", "toy", "bike"];
    let maxWeight: number = 6;
    expect(carryGifts(gifts, maxWeight)).toEqual([
      "toy",
      "gamme",
      "toy",
      "bike",
    ]);
  });
});
