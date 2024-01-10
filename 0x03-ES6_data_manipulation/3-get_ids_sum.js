export default function getStudentIdsSum(getListStudents) {
  if (Array.isArray(getListStudents) !== true) {
    return [];
  }
  return getListStudents.reduce((acc, curr) => acc + curr.id);
}
