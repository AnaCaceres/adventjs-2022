export default function getCompleted(part: string, total: string) {
  let partTime = part.split(":");
  let totalTime = total.split(":")

  let partHours = Number(partTime[0]);
  let totalHours = Number(totalTime[0]);
  let partMinutes = Number(partTime[1]);
  let totalMinutes = Number(totalTime[1]);
  let partSeconds = Number(partTime[2]);
  let totalSeconds = Number(totalTime[2]);
  let result = '1/1';

  for (var i = Math.max(partHours, totalHours); i > 1; i--) {
    if ((partHours % i == 0) && (totalHours % i == 0)) {
      partHours /= i;
      totalHours /= i;
    }
  }
  result = partHours.toString() + '/' + totalHours.toString();

  return result;
}