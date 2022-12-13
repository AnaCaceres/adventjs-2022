export default function distributeGifts(packOfGifts: string[], reindeers: string[]) {
  const reindeersLoad: number = calculateMaxReindeersLoad(reindeers);
  const packOfGiftsLoad: number =calculatePackOfGiftsLoad(packOfGifts);

  return reindeersLoad / packOfGiftsLoad;
}

function calculateMaxReindeersLoad(reindeers: string[]) {
  return reindeers.reduce((load: number, reindeer: string) => {
    return load += 2 * reindeer.length;
  }, 0);
}

function calculatePackOfGiftsLoad(packOfGifts: string[]) {
  return packOfGifts.reduce((load: number, gift: string) => {
    return load += gift.length;
  }, 0);
}