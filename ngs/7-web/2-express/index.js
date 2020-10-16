const express = require('express');

const server = express();

server.get('/', (req, res) =>{
  res.send('Hello Jaybird')
});

server.get('/2', (req, res) =>{
  res.send('Hello Jaybird 2')
});

server.listen(4242, () => {
  console.log('Express Server is running...');
});
