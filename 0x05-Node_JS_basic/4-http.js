const http = require('http');

const hostname = 'localhost';
const port = 1245;

const app = http.createServer();


app.on('request', (_, res) => {
  const responseText = 'Hello Holberton School!';
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write(Buffer.from(responseText));
});


app.listen(port, hostname, () => {
  process.stdout.write(`Server listening at -> http://${hostname}:${port}\n`);
});

module.exports = app;
