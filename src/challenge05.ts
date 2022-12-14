export default function getMaxGifts(giftsCities: number[], maxGifts: number, maxCities: number) {
  const combinationSums: number[] = [];
  let maxCombinations = 1 << giftsCities.length;
  [...Array(maxCombinations).keys()].forEach((combinationIndex) => {
    let selectedCombination: number[] = giftsCities.filter((_, cityIndex) => combinationIndex & 1 << cityIndex);
    if(selectedCombination.length <= maxCities) {
      let selectedCombinationSum = 
        selectedCombination.reduce((previous, actual) => previous + actual, 0);
      combinationSums.push(selectedCombinationSum);
    };
  })
  let allowedSums = combinationSums.filter(sumGiftsCities => sumGiftsCities <= maxGifts);

  return Math.max(...allowedSums);
}
