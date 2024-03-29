const fs = require('fs').promises;

function countStudents(path) {
  return fs.readFile(path, 'utf8')
    .then((data) => {
      const lines = data.split('\n');
      const students = lines.slice(1).filter(line => line !== '');
      console.log(`Number of students: ${students.length}`);
      const fields = {};
      for (const student of students) {
        const field = student.split(',')[3];
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(student.split(',')[0]);
      }
      for (const field in fields) {
        console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
      }
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

module.exports = countStudents;
