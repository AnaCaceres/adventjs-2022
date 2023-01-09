export default function decorateTree(base: string) {
  const nextDecorations = {
    PP: "P",
    BR: "P",
    RB: "P",
    BB: "B",
    PR: "B",
    RP: "B",
    RR: "R",
    BP: "R",
    PB: "R",
  };

  const addDecoration = (
    allDecorations: string[],
    currentDecoration: string,
    currentIndex: number,
    originalDecorations: string[]
  ) => {
    const nextDecoration = originalDecorations[currentIndex + 1];
    if (nextDecoration !== undefined) {
      const baseDecorations = (currentDecoration +
        nextDecoration) as keyof typeof nextDecorations;
      allDecorations.push(nextDecorations[baseDecorations]);
    }

    return allDecorations;
  };

  const createTree = (
    tree: string[],
    _currentDecorations: string,
    currentLevel: number
  ) => {
    const nextLevel = tree[currentLevel].split(" ").reduce(addDecoration, []);
    tree.push(nextLevel.join(" "));

    return tree;
  };

  return [...Array(base.split(" ").length - 1)]
    .reduce(createTree, [base])
    .reverse();
}
