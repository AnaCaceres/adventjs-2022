type Sleigh = {
  name: string;
  consumption: number;
};

export default function selectSleigh(distance: number, sleighs: Sleigh[]) {
  const totalBattery = 20;

  let bestSleigh = sleighs.reverse().find((sleigh) => {
    return sleigh.consumption * distance <= totalBattery;
  });

  return bestSleigh?.name || null;
}
