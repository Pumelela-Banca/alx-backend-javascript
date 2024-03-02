const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n');
    const students = lines.slice(1).filter((line) => line !== '');
    console.log(`Number of students: ${students.length}`);
    const fields = {};
    for (const student of students) {
      const field = student.split(',')[3];
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(student.split(',')[0]);
    }
    if (fields) {
      for (const field in fields) {
        if (fields.hasOwnProperty(field).call(fields, field)) {
          console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
        }
      }
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
