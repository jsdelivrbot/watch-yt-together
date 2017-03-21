var express = require('express');
var path = require('path');

var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

var rootDir = path.join(__dirname, '../..');

app.use('/public', express.static(path.join(rootDir, 'public')));

app.get('/', function (req, res) {
  res.sendFile(path.join(rootDir, "index.html"));
});


server.listen(3000);
