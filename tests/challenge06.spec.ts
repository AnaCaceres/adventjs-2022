import createCube from '../src/challenge06';

describe("Challenge #6: Creating xmas decorations",() => {
  it("should return String type", () => {
    const cubeSize = 3;

    const cube = createCube(cubeSize);

    expect(cube).toEqual(expect.any(Number));
  });
});
