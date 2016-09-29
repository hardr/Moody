var io = require('socket.io')()
var ss = require('socket.io-stream')


io.of('/blob-stream').on('connection', function(socket) {
  console.log("socket connected to server", socket);
  ss(socket).on('blob-submit', function(stream, data) {
    var filename = path.basename(data.name);
    stream.pipe(fs.createWriteStream(filename));
  });
});

module.exports = io;
