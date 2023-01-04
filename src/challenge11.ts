export default function getCompleted(part: string, total: string) {
  const [partHours, partMinutes, partSeconds] = part.split(":");
  const [totalHours, totalMinutes, totalSeconds] = total.split(":");

  let totalHoursInSeconds =
    +totalSeconds + (+totalMinutes + +totalHours * 60) * 60;
  let totalPartInSeconds = +partSeconds + (+partMinutes + +partHours * 60) * 60;

  const calculateGreatestCommonDivisor = (a: number, b: number): number => {
    return b ? calculateGreatestCommonDivisor(b, a % b) : a;
  };

  const greatestCommonDivisor = calculateGreatestCommonDivisor(
    totalPartInSeconds,
    totalHoursInSeconds
  );

  const numerator = totalPartInSeconds / greatestCommonDivisor;
  const denominator = totalHoursInSeconds / greatestCommonDivisor;

  return `${numerator}/${denominator}`;
}
