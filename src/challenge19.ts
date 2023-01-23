export default function sortToys(toys: string[], positions: number[]) {
  const minPosition = Math.min(...positions);
  positions = positions.map((position) => position - minPosition);
  const sortedToys: string[] = Array(positions.length).fill("");
  positions.forEach((position, index) => (sortedToys[position] = toys[index]));

  return sortedToys;
}
