const http = require('http');

const server = http.createServer((req, res) => {
  console.dir(req, { depth: 0 });
  res.end('Hello Jay\n');
});

server.listen(4242, () => {
  console.log('Server is rowing...');
});
