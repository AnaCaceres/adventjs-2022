import getCompleted from '../src/challenge11';

describe('Challenge #11: Santa Claus is Scrum Master', () => {
  it('should return string type', () => {
    let totalTaskTime = '03:00:00';
    let workedTime = '01:00:00';
    expect(getCompleted(workedTime, totalTaskTime)).toEqual(expect.any(String));
  });

  it('should return  1/3 for 1h work and 3h task', () => {
    let totalTaskTime = '03:00:00';
    let workedTime = '01:00:00';
    expect(getCompleted(workedTime, totalTaskTime)).toBe('1/3');
  });

  it('should return 1/2 for 2h work and 4h task', () => {
    let totalTaskTime = '04:00:00';
    let workedTime = '02:00:00';
    expect(getCompleted(workedTime, totalTaskTime)).toBe('1/2');
  });

  it('should return 1/1 for 1h work and 1h task', () => {
    let totalTaskTime = '01:00:00';
    let workedTime = '01:00:00';
    expect(getCompleted(workedTime, totalTaskTime)).toBe('1/1');
  });
});