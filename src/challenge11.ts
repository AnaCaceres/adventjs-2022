export default function getCompleted(part: string, total: string) {
  let partTime = part.split(":");
  let totalTime = total.split(":")

  let partHours = parseInt(partTime[0]);
  let totalHours = parseInt(totalTime[0]);

  return `${partHours}/${totalHours}`;
}