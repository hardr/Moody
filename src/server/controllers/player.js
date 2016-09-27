var axios = require('axios');

function searchYoutube(searchTerm){
  return axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyAPs3iCpnQcI6vMxCWR2JdZa1mcSTkemfU&q=' + searchTerm)
  .then(function(response){
    return response.data.items[0].id.videoId;
  })
  .catch(function(err){
    console.log('ERROR',err);
  });
}

function getSpotifyTrackId(trackName){
  return axios.get('https', {
    params: {
      ID: 12345 //change all
    }
  })
  .then(function(response){

  })
  .catch(function(err){
    console.log(err);
  })
}

module.exports = {
  searchYoutube,
  getSpotifyTrackId
};
