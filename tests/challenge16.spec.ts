import fixLetter from "../src/challenge16";

describe("Challenge #16: Fixing Santa Claus' letters", () => {
  it("should return string type", () => {
    const letter =
      " hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  ";
    expect(fixLetter(letter)).toEqual(expect.any(String));
  });

  it("should remove spaces at the beginning and at the end", () => {
    const letter = " Hello ";
    expect(fixLetter(letter)).toBe("Hello");
  });
});
