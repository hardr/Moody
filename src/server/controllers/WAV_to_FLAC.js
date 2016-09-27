var sox = require('sox-stream');
var fs  = require('fs');

function wavToFlac(filePath) {
  fs.createReadStream(filePath)
  .pipe( sox({type: 'flac'}) )
  .pipe( fs.createWriteStream('song.flac') )
  .on("end", function(end) {
    console.log("recording converted");
  })
}

exports.main = wavToFlac;
