const http = require('http');

const server = http.createServer((req, res) => {  // "Declare a `constant` named `server`.  Assign it to `http` method `createServer` which receives `req` as the incoming message and `res` as the server response"
  res.end('Hello World\n');
});

server.listen(4242, () => {
  console.log('Server is running...');
});
