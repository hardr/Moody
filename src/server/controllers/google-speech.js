const google_speech = require('google-speech');
const googleKey = "AIzaSyBGkND1QDR4Lb2sOuj4sPAaJfhlv5yylBA";

function googleAudioToText(filepath) {
  google_speech.ASR({
    developer_key: googleKey,
    file: filepath,
  }, function(err, httpResponse, xml){
    if(err){
        console.log(err);
      }else{
        console.log(httpResponse.statusCode, xml)
        return xml
      }
    }
  );
};

module.exports = {
  googleAudioToText
};
