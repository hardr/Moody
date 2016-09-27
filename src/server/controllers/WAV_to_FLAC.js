var sox = require('sox-stream');
var fs  = require('fs');

function wavToFlac(filePath) {
  console.log("wavToFlac Called");
  fs.createReadStream(filePath)
  .pipe( sox({type: 'flac'}) )
  .pipe( fs.createWriteStream('song.flac') )
  
}
wavToFlac("src/server/test_audio/audio.wav")

exports.main = wavToFlac;
