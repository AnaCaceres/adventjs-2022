export default function decorateTree(base: string) {
  const decorationP = ["P P", "B R", "R B"];
  const decorationB = ["B B", "P R", "R P"];
  const decorationR = ["R R", "B P", "P B"];
  let baseDecorations = base.split(" ");
  let decoratedTree: string[] = new Array(baseDecorations.length).fill("");
  decoratedTree[0] = base;

  decoratedTree.forEach((level, levelIndex) => {
    if (levelIndex !== decoratedTree.length - 1) {
      const decorations = level.split(" ");
      let nextLevel: string[] = [];
      decorations.forEach((decoration, decorationIndex) => {
        if (decorationIndex !== decorations.length - 1) {
          let decorationBase =
            decoration + " " + decorations[decorationIndex + 1];
          if (decorationP.includes(decorationBase)) {
            nextLevel.push("P");
          } else if (decorationB.includes(decorationBase)) {
            nextLevel.push("B");
          } else if (decorationR.includes(decorationBase)) {
            nextLevel.push("R");
          }
        }
      });
      decoratedTree[levelIndex + 1] = nextLevel.join(" ");
    }
  });

  return decoratedTree.reverse();
}
