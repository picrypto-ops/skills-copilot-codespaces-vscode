// Create web server
// Load the http module to create an HTTP server.
const http = require('http');

// Configure the HTTP server to respond with "Hello, World!" to all requests.
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!\n');
});

// Listen on port 8000 and IP address 127.0.0.1 (localhost).
server.listen(8000, '127.0.0.1', () => {
  console.log('Server is running at http://127.0.0.1:8000/');
});
