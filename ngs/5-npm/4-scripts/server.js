const express = require('express');

const server = express();

server.get('/', (req, res) => {  // this route path will match requests to the root route
  res.send('Hello Express!');
});

server.listen(8000, () => {
  console.log('Server is running...');
});
