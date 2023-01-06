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

  it("should return Madeval as best sleigh", () => {
    const distance = 30;
    const sleighs = [
      { name: "Gorusuke", consumption: 0.3 },
      { name: "Madeval", consumption: 0.5 },
      { name: "Lolivier", consumption: 0.7 },
      { name: "Hyuuh", consumption: 1 },
    ];

    expect(selectSleigh(distance, sleighs)).toBe("Madeval");
  });

  it("should return Pedrosillano as best sleigh", () => {
    const distance = 10;
    const sleighs = [
      { name: "Pedrosillano", consumption: 1 },
      { name: "SamarJaffal", consumption: 5 },
    ];

    expect(selectSleigh(distance, sleighs)).toBe("Pedrosillano");
  });
});
