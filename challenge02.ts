function countHours(year: number, holidays: string[]) {
  let uniqueHolidayDates: string[] = removeDuplicates(holidays);
  let formattedDates: Date[] = uniqueHolidayDates.filter(date => {
    let day: number = parseInt(date.split("/")[1]);
    return new Date(`${year}-${date.replace("/", "-")}`).getDate() === day;
  }).map(date => new Date(`${year}-${date.replace("/", "-")}`));

  let extraHours = formattedDates.reduce((hours: number, date: Date) => {
    let extraHoursPerBankHoliday = 2;

    return isDateWeekend(date) || isDateNewYearsEve(date) ? hours : hours + extraHoursPerBankHoliday;
  }, 0);

  return extraHours;
}

function removeDuplicates(dates: string[]) {
  return dates.filter((date, index, self)=> index === self.indexOf(date));
}

function isDateWeekend(date: Date) {
  const weekDay: number = date.getDay();
  const saturday: number = 6;
  const sunday: number = 0;

  return weekDay == saturday || weekDay == sunday;
}

function isDateNewYearsEve(date: Date) {
  const newYearsEve: Date = new Date(`${date.getFullYear()}-12-31`);

  return date == newYearsEve;
}

console.log(countHours(2021, ['01/06', '04/01', '12/25', '12/31', '02/29', '12/05']))