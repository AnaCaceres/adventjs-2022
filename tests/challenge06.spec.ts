import createCube from '../src/challenge06';

describe("Challenge #6: Creating xmas decorations",() => {
  it("should return String type", () => {
    const cubeSize = 3;

    const cube = createCube(cubeSize);

    expect(cube).toEqual(expect.any(String));
  });

  it("should return one dimension cube for size 1", () => {
    const cubeSize = 1;

    const cube = createCube(cubeSize);

    expect(cube).toBe('\/\\\_\\\n' + 
                      '\\\/\_\/');
  });

  it("should return two dimension cube for size 2", () => {
    const cubeSize = 2;

    const cube = createCube(cubeSize);

    expect(cube).toBe(' \/\\\_\\\_\\\n' + 
                      '\/\\\/\\\_\\\_\\\n' + 
                      '\\\/\\\/\_\/\_\/\n' + 
                      ' \\\/\_\/\_\/');
  });

  it("should return three dimension cube for size 3", () => {
    const cubeSize = 3;

    const cube = createCube(cubeSize);

    expect(cube).toBe('  \/\\\_\\\_\\\_\\\n' + 
                      ' \/\\\/\\\_\\\_\\\_\\\n' + 
                      '\/\\\/\\\/\\\_\\\_\\\_\\\n' +
                      '\\\/\\\/\\\/\_\/\_\/\_\/\n' +
                      ' \\\/\\\/\_\/\_\/\_\/\n' +
                      '  \\\/\_\/\_\/\_\/');
  });
});
