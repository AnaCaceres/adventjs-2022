export default function dryNumber(dry: number, numbers: number) {
  const regex = new RegExp(`\w*${dry}\w*`);
  const dryNumbers = [...Array(numbers).keys()]
    .map((key) => key + 1)
    .filter((number) => regex.test(number.toString()));

  return dryNumbers;
}
