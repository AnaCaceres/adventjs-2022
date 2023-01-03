export default function checkJump(heights: number[]) {
  let jumpGoesUpDown = true;
  let maxHeight = Math.max(...heights);

  if ([0, heights.length - 1].includes(heights.indexOf(maxHeight))) {
    return false;
  }

  let previousJumps = heights.slice(0, heights.indexOf(maxHeight));
  let nextJumps = heights.slice(heights.indexOf(maxHeight) + 1, heights.length);

  previousJumps.reduce((previousHeight, height) => {
    if (previousHeight > height){
      jumpGoesUpDown = false
    }
    return height;
  }, previousJumps[0])

  nextJumps.reduce((previousHeight, height) => {
    if (previousHeight < height){
      jumpGoesUpDown = false
    }
    return height;
  }, nextJumps[0]);

  return jumpGoesUpDown;
}