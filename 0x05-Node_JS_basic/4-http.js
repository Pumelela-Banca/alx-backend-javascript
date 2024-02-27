const http = require('http');

const port = 1245;

const app = http.createServer((_, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!\n')
});


app.listen(port);

module.exports = app;
