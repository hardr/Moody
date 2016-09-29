var sentiment = require('sentiment');

var deerok = sentiment('hate hate high');
var krist = sentiment('love high hate');
var ryan = sentiment('high high high');


let inputString = "hate hate hate";
let sentInput = sentiment(inputString);
let len = inputString.split(" ");
let numOfWords = len.length;
const adjScore = sentInput.score/numOfWords + 5;
// console.log(ryan);
// console.log(krist);

module.exports = {
  sentiment
};
