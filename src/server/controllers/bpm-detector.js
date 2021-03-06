var bpmSink = require('bpm.js');
var spawn = require('child_process').spawn;
var sox = require('sox');

//functionalize the bpm detection
function detectBPM(filePath) {
  var bpmArray = [];
  createAudioStream(filePath)
  .pipe(bpmSink())
  .on("bpm", function(bpm){
    bpmArray.push(bpm);
  });
  return bpmArray;
}

// needed to convert mp3 to proper format
function createAudioStream(filePath) {
  console.log("create audio stream filepath:" + filePath);
  var args = "-t raw -r 44100 -e float -c 1 -".split(" ");
  args.unshift(filePath);
  var sox = spawn("sox", args);
  return sox.stdout;
}

module.exports = {
  detectBPM
};
