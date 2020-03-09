const { Form } = require('brazil-mocker');

let nome = Form.names.fullName.generate();

let http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello, '+ nome);
}).listen(8080);

console.log('Server running at http://localhost:8080/');