import sortToys from "../src/challenge19";

describe("Challenge #19: Sorting the toys!", () => {
  it("should return array type", () => {
    const toys = ["ball", "doll", "car", "puzzle"];
    const positions = [2, 3, 1, 0];
    expect(sortToys(toys, positions)).toBeInstanceOf(Array);
  });

  it("should return sorted toys starting from 0", () => {
    const toys = ["ball", "doll", "car", "puzzle"];
    const positions = [2, 3, 1, 0];
    expect(sortToys(toys, positions)).toEqual([
      "puzzle",
      "car",
      "ball",
      "doll",
    ]);
  });

  it("should return sorted toys starting from 5", () => {
    const toys = ["pc", "xbox", "ps4", "switch", "nintendo"];
    const positions = [8, 6, 5, 7, 9];
    expect(sortToys(toys, positions)).toEqual([
      "ps4",
      "xbox",
      "switch",
      "pc",
      "nintendo",
    ]);
  });
});
