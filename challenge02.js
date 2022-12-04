function countHours(year, holidays) {
    var uniqueHolidayDates = removeDuplicates(holidays);
    var formattedDates = uniqueHolidayDates.filter(function (date) {
        var day = parseInt(date.split("/")[1]);
        return new Date("".concat(year, "-").concat(date.replace("/", "-"))).getDate() === day;
    }).map(function (date) { return new Date("".concat(year, "-").concat(date.replace("/", "-"))); });
    var extraHours = formattedDates.reduce(function (hours, date) {
        var extraHoursPerBankHoliday = 2;
        return isDateWeekend(date) || isDateNewYearsEve(date) ? hours : hours + extraHoursPerBankHoliday;
    }, 0);
    return extraHours;
}
function removeDuplicates(dates) {
    return dates.filter(function (date, index, self) { return index === self.indexOf(date); });
}
function isDateWeekend(date) {
    var weekDay = date.getDay();
    var saturday = 6;
    var sunday = 0;
    return weekDay == saturday || weekDay == sunday;
}
function isDateNewYearsEve(date) {
    var newYearsEve = new Date("".concat(date.getFullYear(), "-12-31"));
    return date == newYearsEve;
}
console.log(countHours(2021, ['01/06', '04/01', '12/25', '12/31', '02/29', '12/05']));
