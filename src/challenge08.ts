export default function checkPart(part: string) {
  let isValidPart = part.toLowerCase() === part.split('').reverse().join('').toLowerCase();
  let splittedPart = part.split('');
  splittedPart.forEach( characterToRemove => {
    let modifiedPart = splittedPart.filter(character => character !== characterToRemove);
    isValidPart = modifiedPart.join('').toLowerCase() === modifiedPart.reverse().join('').toLowerCase() ? true : isValidPart;
  });
  return isValidPart;
}