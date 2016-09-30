
  console.log('sanity check!');
//
// var sentiment = require('sentiment');
//
// var deerok = sentiment('hate hate high');
// var krist = sentiment('love high hate');
// var ryan = sentiment('high high high');
//
//
// let inputString = "hate hate hate";
// let sentInput = sentiment(inputString);
// let len = inputString.split(" ");
// let numOfWords = len.length;
// const adjScore = sentInput.score/numOfWords + 5;


$('#speechSubmit').on('click', function (e) {
  e.preventDefault();
  console.log("analyze is clicked");
  const $textResults = $('#final_span').text();
  $.ajax({
    type: 'GET',
    url: `/string/${$textResults}/`,
    success: function(result) {
      console.log(result.rows[0].youtube_id);
      const youtube_id = result.rows[0].youtube_id;

      console.log('uid',youtube_id);
      $('.carousel-inner').html(`<iframe id="existing-iframe-example" width="640" height="360" src="//www.youtube.com/embed/${youtube_id}?enablejsapi=1" frameborder="0" style="border: solid 4px #37474F" data-id="{{song_id}}"></iframe>`);

    },
    error: function(error) {
      console.log(':(');
    }
  });
});


// module.exports = {
//   sentiment
// };
