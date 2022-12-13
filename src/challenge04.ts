type Box = {
  l: number;
  w: number;
  h: number;
};

export default function fitsInOneBox(boxes: Box[]) {
  let doesBoxesFitInOneBox = true;
  let boxMeasurementDefinition = (Object.keys(boxes[0]) as (keyof typeof boxes[0])[]);
  boxes.sort((box1, box2) => (box1.l < box2.l ? -1 : 1));
  let firstBox = boxes.shift() || boxes[0];
  boxes.reduce((previousBox, box) => {
    boxMeasurementDefinition.forEach((measurement) => {
      if (doesBoxesFitInOneBox) {
        doesBoxesFitInOneBox = previousBox[measurement] < box[measurement];
      }
    });
    return box; 
  }, firstBox);

  return doesBoxesFitInOneBox;
}