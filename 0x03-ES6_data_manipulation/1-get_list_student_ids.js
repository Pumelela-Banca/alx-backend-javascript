export default function getListStudentIds(arr) {
  if (Array.isArray(arr) === true) {
    return arr.map((student) => student.id);
  }
  return [];
}
