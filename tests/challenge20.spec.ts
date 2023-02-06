import howManyReindeers from "../src/challenge20";

describe("Challenge #20: More challenging trips", () => {
  it("should return array type", () => {
    const reindeerTypes = [
      { type: "Nuclear", weightCapacity: 50 },
      { type: "Electric", weightCapacity: 10 },
      { type: "Gasoline", weightCapacity: 5 },
      { type: "Diesel", weightCapacity: 1 },
    ];
    const gifts = [
      { country: "Spain", weight: 30 },
      { country: "France", weight: 17 },
      { country: "Italy", weight: 50 },
    ];
    expect(howManyReindeers(reindeerTypes, gifts)).toBeInstanceOf(Array);
  });
});
