const http = require('http');
const { countStudents } = require('./3-read_file_async');

const app = http.createServer(async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.end('Hello Holberton School!\n');
  } else if (req.url === '/students') {
    const [, , databasePath] = req.url.split('/');

    let students;
    try {
      students = await countStudents(databasePath);
      res.write(`This is the list of our students\n`);
      res.write(students);
    } catch (error) {
      res.write(`This is the list of our students\n`);
      res.write(`${error.message}\n`);
      res.write(
        await countStudents('database.csv'),
      );
    }

    res.end();
  } else {
    res.end('Error 404: Not Found\n');
  }
});

app.listen(1245, () => {
  console.log('Server running on port 1245');
});

module.exports = app;
