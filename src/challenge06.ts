export default function createCube(size: number) {
  const slash = '\/';
  const underscore = '\_';
  const invertedSlash = '\\';

  const front = '\_\\'.repeat(size);
  const down = '\_\/'.repeat(size);

  let result = ''

  for (let i = 0; i < size; i ++) {
    const numberOfSpaces = size - i - 1;
    result += ' '.repeat(numberOfSpaces) + '\/\\'.repeat(i + 1) + front + '\n';
  }

  for (let i = size; i > 0; i --) {
    const numberOfSpaces = size - i;
    result += ' '.repeat(numberOfSpaces) + '\\\/'.repeat(i) + down;
    if (i != 1) {
      result += '\n';
    }
  }

  console.log(result);

  return result;
}