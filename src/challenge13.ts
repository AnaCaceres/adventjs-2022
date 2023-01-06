export default function getFilesToBackup(
  lastBackup: number,
  changes: number[][]
) {
  const changedFiles = changes.filter((change) => change[1] > lastBackup);
  const changedFilesIds = [...new Set(changedFiles.map((file) => file[0]))];

  return changedFilesIds.sort((a, b) => a - b);
}
