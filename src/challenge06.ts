export default function createCube(size: number) {
  const frontSide = '\_\\'.repeat(size);
  const downSide = '\_\/'.repeat(size);
  const upperLeftSide = '\/\\';
  const downLeftSide = '\\\/';

  let result = '';

  for (let i = 0; i < size; i ++) {
    const numberOfSpaces = size - i - 1;
    result += ' '.repeat(numberOfSpaces);
    result += upperLeftSide.repeat(i + 1);
    result += frontSide + '\n';
  }

  for (let i = size; i > 0; i --) {
    const numberOfSpaces = size - i;
    result += ' '.repeat(numberOfSpaces);
    result += downLeftSide.repeat(i);
    result += downSide + (i != 1 ? '\n' : '');
  }

  return result;
}