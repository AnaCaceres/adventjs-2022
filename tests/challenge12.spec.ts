import selectSleigh from "../src/challenge12";

describe("Challenge #12: Electric, sleighs, wow!", () => {
  it("should return string type", () => {
    const distance = 30;
    const sleighs = [
      { name: "Gorusuke", consumption: 0.3 },
      { name: "Madeval", consumption: 0.5 },
      { name: "Lolivier", consumption: 0.7 },
      { name: "Hyuuh", consumption: 1 },
    ];

    expect(selectSleigh(distance, sleighs)).toEqual(expect.any(String));
  });
});
