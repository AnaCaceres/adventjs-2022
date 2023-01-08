export default function getOptimalPath(path: number[][]) {
  let optimalPath = 0;
  let lastIndex = 0;

  path.forEach((level) => {
    if (level.length === 1) {
      optimalPath += level[lastIndex];
    } else {
      const isLeftBest = level[lastIndex] < level[lastIndex + 1];
      optimalPath += isLeftBest ? level[lastIndex] : level[lastIndex + 1];
      lastIndex = isLeftBest ? lastIndex : lastIndex + 1;
    }
  });

  return optimalPath;
}
