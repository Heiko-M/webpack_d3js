const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<body><h1>Test Web App</h1></body>')
});

const port = process.env.PORT || 8080;
server.listen(port);

console.log('Server running at http:localhost:%d', port);