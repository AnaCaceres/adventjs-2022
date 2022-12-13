type Box = {
  l: number;
  w: number;
  h: number;
};
 
export default function fitsInOneBox(boxes: Box[]) {
  let doesBoxesFitInOneBox: boolean = true;
  let boxMeasurementDefinition: (keyof typeof boxes[0])[] = (Object.keys(boxes[0]) as (keyof typeof boxes[0])[]);
  let firstBox: Box = boxes.shift() || boxes[0];
  boxes.reduce((previousBox, box) => {
    boxMeasurementDefinition.forEach((measurement) => {
      if (doesBoxesFitInOneBox) doesBoxesFitInOneBox = previousBox[measurement] < box[measurement];
    });
    return box; 
  }, firstBox);

  return doesBoxesFitInOneBox;
}