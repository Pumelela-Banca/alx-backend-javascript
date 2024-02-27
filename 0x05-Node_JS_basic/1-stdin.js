const rdln = require('readline');

const reader = rdln.createInterFace({
  input: process.stdin,
  output: process.stdout,
});

console.log('Welcome to Holberton School, what is your name?');

reader.on('line', (name) => {
  console.log(`Your name is: ${name}`);
  reader.close();
}).on('close', () => {
  console.log('This important software is now closing');
});
