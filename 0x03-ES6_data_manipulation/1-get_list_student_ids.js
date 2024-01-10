export default function getListStudentIds(arr) {
  if (arr.isArray() === false) {
    return [];
  } else {
    return arr.map((student) => student.id);
  }
}
