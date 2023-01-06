import getFilesToBackup from "../src/challenge13";

describe("Challenge #13: Backups for Santa Claus files", () => {
  it("should return array type", () => {
    const lastBackup = 1546300800;
    const changes = [
      [3, 1546301100],
      [2, 1546300800],
      [1, 1546300800],
      [1, 1546300900],
      [1, 1546301000],
    ];

    expect(getFilesToBackup(lastBackup, changes)).toBeInstanceOf(Array);
  });
});
