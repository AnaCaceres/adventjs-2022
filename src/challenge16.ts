export default function fixLetter(letter: string) {
  const correctedLetter = letter
    .split("")
    .reduce((formattedLetter: string, character: string) => {
      if (
        formattedLetter.slice(-2) === ". " &&
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
      if ([",", "."].includes(formattedLetter.slice(-1)) && character !== " ") {
        return (formattedLetter += ` ${character}`);
      }
      if (formattedLetter.slice(-1) === " " && [",", "."].includes(character)) {
        return formattedLetter.slice(0, -1) + character;
      }
      return (formattedLetter += character);
    }, "");

  return correctedLetter.trim();
}
