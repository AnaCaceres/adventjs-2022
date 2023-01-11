export default function fixLetter(letter: string) {
  letter = letter.trim();
  letter = letter.charAt(0).toUpperCase() + letter.slice(1);
  let correctedLetter = letter
    .split("")
    .reduce((formattedLetter: string, character: string) => {
      if (
        [". ", "? ", "! "].includes(formattedLetter.slice(-2)) &&
        character !== character.toUpperCase()
      ) {
        return (formattedLetter += character.toUpperCase());
      }
      if (
        formattedLetter.slice(-1) === character &&
        [" ", "?"].includes(character)
      ) {
        return formattedLetter;
      }
      if (
        [",", ".", "?", "!"].includes(formattedLetter.slice(-1)) &&
        character !== " "
      ) {
        return (formattedLetter += ` ${character}`);
      }
      if (
        formattedLetter.slice(-1) === " " &&
        [",", ".", "?", "!"].includes(character)
      ) {
        return formattedLetter.slice(0, -1) + character;
      }
      return (formattedLetter += character);
    }, "");

  correctedLetter = correctedLetter.replace(
    /[sS]anta [cC]laus/g,
    "Santa Claus"
  );

  correctedLetter += [".", "?", "!"].includes(correctedLetter.slice(-1))
    ? ""
    : ".";

  return correctedLetter;
}
