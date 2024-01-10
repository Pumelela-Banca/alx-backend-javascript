export default function getStudentsByLocation(getListStudents, city) {
  return getListStudents.filter((place) => place.location === city);
}
