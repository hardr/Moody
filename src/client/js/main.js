
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


$('#stop-btn').on('click', function (e) {
  e.preventDefault();
  let testString = 'how bad will this string register';
  console.log('testing hit it');
  $.ajax({
    type: 'GET',
    url: `/string/${testString}/`,
    success: function(result) {
      console.log(result);
      console.log('hit it');
    },
    error: function(error) {
      console.log(error);
    }
  });
});


// module.exports = {
//   sentiment
// };
