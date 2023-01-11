export default function fixLetter(letter: string) {
  const correctedLetter = letter
    .split("")
    .reduce((formattedLetter: string, character: string) => {
      if (formattedLetter.slice(-1) === " " && character === " ") {
        return formattedLetter;
      } else if (
        [",", "."].includes(formattedLetter.slice(-1)) &&
        character !== " "
      ) {
        return (formattedLetter += ` ${character}`);
      }
      return (formattedLetter += character);
    }, "");

  return correctedLetter.trim();
}
