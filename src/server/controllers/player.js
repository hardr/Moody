var axios = require('axios');

function searchYoutube(searchTerm){
  return axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyAPs3iCpnQcI6vMxCWR2JdZa1mcSTkemfU&q=' + searchTerm)
  .then(function(response){
    console.log(response.data.items[0]);
    return response.data.items[0].id.videoId;
  })
  .catch(function(err){
    console.log('ERROR',err);
  });
}

module.exports = {
  searchYoutube
};
