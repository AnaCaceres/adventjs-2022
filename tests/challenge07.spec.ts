import getGiftsToRefill from '../src/challenge07';

describe("Challenge #7: Doing gifts inventories",() => {
  it("should return array type", () => {
    let giftsToRefill: string[] = getGiftsToRefill([], [], []);
    expect(giftsToRefill).toBeInstanceOf(Array);
  });

  it("should return two gifts to refill", () => {
    const store1 = ['bike', 'car', 'bike', 'bike']
    const store2 = ['car', 'bike', 'doll', 'car']
    const store3 = ['bike', 'pc', 'pc']
    let giftsToRefill: string[] = getGiftsToRefill(store1, store2, store3);
    expect(giftsToRefill).toStrictEqual(['doll', 'pc']);
  });
});