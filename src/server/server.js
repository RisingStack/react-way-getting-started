var http  = require('http');
var path = require('path');
var nodeStatic = require('node-static');
var fileServer = new nodeStatic.Server(path.resolve(__dirname, '../client'));

var PORT = process.env.PORT || 8080;

http.createServer(function (request, response) {
  request.addListener('end', function () {
    fileServer.serve(request, response);
  }).resume();
})
.listen(PORT, function () {
  console.log('server is listennin on: ' + PORT);
});
