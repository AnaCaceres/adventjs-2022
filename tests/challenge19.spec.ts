import sortToys from "../src/challenge19";

describe("Challenge #19: Sorting the toys!", () => {
  it("should return array type", () => {
    const toys = ["ball", "doll", "car", "puzzle"];
    const positions = [2, 3, 1, 0];
    expect(sortToys(toys, positions)).toBeInstanceOf(Array);
  });
});
