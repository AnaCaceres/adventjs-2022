import getCompleted from '../src/challenge11';

describe('Challenge #11: Santa Claus is Scrum Master', () => {
  it('should return string type', () => {
    let totalTaskTime = '03:00:00';
    let workedTime = '01:00:00';
    expect(getCompleted(workedTime, totalTaskTime)).toEqual(expect.any(String));
  })
});