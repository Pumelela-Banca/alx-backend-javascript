export default function getListStudentIds(arr) {
  if (arr.isArray() === true) {
    return arr.map((student) => student.id);
  }
  return [];
}
