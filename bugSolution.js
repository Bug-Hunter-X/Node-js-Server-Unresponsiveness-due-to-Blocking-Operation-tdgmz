const http = require('http');

const server = http.createServer(async (req, res) => {
  // Simulate a long-running operation using async/await
  await new Promise(resolve => {
    setTimeout(resolve, 2000); // Simulate 2-second delay
  });

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});