type Sleigh = {
  name: string;
  consumption: number;
};

export default function selectSleigh(distance: number, sleighs: Sleigh[]) {
  const totalBattery = 20;
  let bestSleigh = null;
  sleighs.reverse();

  for (let i = 0; i < sleighs.length; i++) {
    if (sleighs[i].consumption * distance <= totalBattery) {
      bestSleigh = sleighs[i].name;
      break;
    }
  }

  return bestSleigh;
}
