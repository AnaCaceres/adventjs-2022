export default function checkPart(part: string) {
  let isValidPart = part.toLowerCase() === part.split('').reverse().join('').toLowerCase();
  let splittedPart = part.split('');
  splittedPart.forEach((_, indexToRemove) => {
    let modifiedPart = splittedPart.filter((_, index) => index !== indexToRemove );
    isValidPart = modifiedPart.join('').toLowerCase() === modifiedPart.reverse().join('').toLowerCase() ? true : isValidPart;
  });
  return isValidPart;
}