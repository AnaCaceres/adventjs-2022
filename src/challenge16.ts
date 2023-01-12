export default function fixLetter(letter: string) {
  return letter
    .trim()
    .replace(/([.,?!\s])(?=\1)/g, "")
    .replace(/([.,!?])([a-z])/gi, "$1 $2")
    .replace(/(\s)([.,!?])/g, "$2")
    .replace(/[.?!]\s[a-z]|^[a-z]/g, (match) => match.toUpperCase())
    .replace(/santa claus/gi, "Santa Claus")
    .replace(/([a-z])$/, "$1.");
}
