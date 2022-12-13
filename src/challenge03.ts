export default function distributeGifts(packOfGifts: string[], reindeers: string[]) {
  const reindeersLoad: number = reindeers.reduce((load: number, reindeer: string) => {
    return load += 2 * reindeer.length;
  }, 0);
  const packOfGiftsLoad: number = packOfGifts.reduce((load: number, gift: string) => {
    return load += gift.length;
  }, 0);

  return Math.floor(reindeersLoad / packOfGiftsLoad);
}
