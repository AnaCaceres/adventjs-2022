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

  it("should remove multiple spaces and leave only one", () => {
    const letter = "Hello,  how are you?";
    expect(fixLetter(letter)).toBe("Hello, how are you?");
  });

  it("should leave a space after each comma", () => {
    const letter = "Hello,how are you?";
    expect(fixLetter(letter)).toBe("Hello, how are you?");
  });

  it("should leave a space after each point", () => {
    const letter = "Hello Santa.I've been good this year.";
    expect(fixLetter(letter)).toBe("Hello Santa. I've been good this year.");
  });

  it("should remove spaces before comma or point", () => {
    const letter = "I'm a girl from Barcelona , Spain .";
    expect(fixLetter(letter)).toBe("I'm a girl from Barcelona, Spain.");
  });

  it("should remove multiple question marks", () => {
    const letter = "Hello, how are you??";
    expect(fixLetter(letter)).toBe("Hello, how are you?");
  });
});
