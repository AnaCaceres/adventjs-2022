export default function countTime(leds: number[]) {
  let time = 0;

  while (!leds.every(led => led)) {
    leds = leds.map((led, index) => {
      let leftLed = index || leds.length;
      return +(leds[leftLed - 1] && !led) || led;
    });
    time += 7;
  }

  return time;
}