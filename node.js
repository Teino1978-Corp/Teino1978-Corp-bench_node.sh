var http   = require('http');
var server = http.createServer(function(request, response)
{
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello world');
});

server.listen(9393, '0.0.0.0');