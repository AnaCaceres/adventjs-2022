type Sleigh = {
  name: string;
  consumption: number;
};

export default function selectSleigh(distance: number, sleighs: Sleigh[]) {
  const totalBattery = 20;
  let bestSleigh = null;

  sleighs.reverse().find((sleigh) => {
    const isSleighCapable = sleigh.consumption * distance <= totalBattery;
    if (isSleighCapable) bestSleigh = sleigh.name;

    return isSleighCapable;
  });

  return bestSleigh;
}
