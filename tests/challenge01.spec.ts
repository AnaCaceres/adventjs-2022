import wrapping from '../src/challenge01';

describe("Challenge #1: Automating Christmas gift wrapping!", () => {
  it("should return array type", () => {
    let gifts: string[] = ['cat', 'game', 'socks'];
    let wrappedGifts: string[] = wrapping(gifts);
    expect(wrappedGifts).toBeInstanceOf(Array);
  });

  it("should return wrapped gifts", () => {
    let gifts: string[] = ['cat', 'game', 'socks'];
    let wrappedGifts: string[] = wrapping(gifts);
    expect(wrappedGifts).toStrictEqual(['*****\n*cat*\n*****', '******\n*game*\n******', '*******\n*socks*\n*******']);
  });

  it("should return an empty array when wrapping an empty array", () => {
    let gifts: string[] = [];
    let wrappedGifts: string[] = wrapping(gifts);
    expect(wrappedGifts).toStrictEqual([]);
  });
});