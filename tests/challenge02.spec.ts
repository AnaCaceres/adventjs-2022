import countHours from '../src/challenge02';

describe("Challenge #2: Nobody wants to do extra hours at work", () => {
  it("should return number type", () => {
    const year: number = 2022;
    const holidays: string[] = ['01/06', '04/01', '12/25'];
    const extraHours: number = countHours(year, holidays);

    expect(extraHours).toEqual(expect.any(Number));
  });

  it("should return 4 extra hours for 2022", () => {
    const year: number = 2022;
    const holidays: string[] = ['01/06', '04/01', '12/25'];

    expect(countHours(year, holidays)).toBe(4);
  });

  it("should return 4 extra hours for 2023", () => {
    const year: number = 2023;
    const holidays: string[] = ['01/06', '04/01', '12/25'];

    expect(countHours(year, holidays)).toBe(4);
  });

  it("should return 10 extra hours for 1985", () => {
    const year: number = 1985;
    const holidays: string[] = ['01/01', '01/06', '02/02', '02/17', '02/28', '06/03', '12/06', '12/25'];

    expect(countHours(year, holidays)).toBe(10);
  });

  it("should return 0 extra hours for 2000", () => {
    const year: number = 2000;
    const holidays: string[] = ['01/01'];

    expect(countHours(year, holidays)).toBe(0);
  });

  it("should not count duplicate dates", () => {
    const year: number = 2023;
    const holidays: string[] = ['01/06', '04/01', '01/06', '12/25'];

    expect(countHours(year, holidays)).toBe(4);
  });
});