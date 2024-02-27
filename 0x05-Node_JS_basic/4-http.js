const http = require('node:http');

const hostname = 'localhost';
const port = '1245';

const app = http.createServer((_, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write(Buffer.from('Hello Holberton School!'));
});

app.listen(port, hostname, () => {
  process.stdout.write(`Server listening at -> http://${hostname}:${port}\n`);
});

module.exports = app;
