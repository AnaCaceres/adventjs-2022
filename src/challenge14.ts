export default function getOptimalPath(path: number[][]) {
  const findBestPathFrom = (level: number, position: number): number => {
    if (level === path.length - 1) {
      return path[level][position];
    }

    const slideLeft = findBestPathFrom(level + 1, position);
    const slideRight = findBestPathFrom(level + 1, position + 1);

    return path[level][position] + Math.min(slideLeft, slideRight);
  };

  let optimalPath = findBestPathFrom(0, 0);

  return optimalPath;
}
