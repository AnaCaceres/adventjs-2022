export default function createCube(size: number) {
  const slash = '\/';
  const underscore = '\_';
  const invertedSlash = '\\';

  if (size === 1) {
    return '\/\\\_\\\n'+'\\\/\_\/'
  }

  if (size === 2) {
    return ' \/\\\_\\\_\\\n' + '\/\\\/\\\_\\\_\\\n' + '\\\/\\\/\_\/\_\/\n' + ' \\\/\_\/\_\/';
  }

  if (size === 3) {
    return '  \/\\\_\\\_\\\_\\\n' + 
            ' \/\\\/\\\_\\\_\\\_\\\n' + 
            '\/\\\/\\\/\\\_\\\_\\\_\\\n' +
            '\\\/\\\/\\\/\_\/\_\/\_\/\n' +
            ' \\\/\\\/\_\/\_\/\_\/\n' +
            '  \\\/\_\/\_\/\_\/'
  }
  return '';
}