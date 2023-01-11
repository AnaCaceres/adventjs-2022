export default function fixLetter(letter: string) {
  const letterWithCorrectedSpaces = letter
    .split("")
    .reduce((correctedLetter: string, character: string) => {
      if (correctedLetter.slice(-1) === " " && character === " ") {
        return correctedLetter;
      }
      return (correctedLetter += character);
    }, "");

  return letterWithCorrectedSpaces.trim();
}
