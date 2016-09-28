var sentiment = require('sentiment');

var deerok = sentiment('hate hate high');
var krist = sentiment('love high hate');
var ryan = sentiment('high high high');

console.log(deerok);
console.log(ryan);
console.log(krist);

module.exports = {
  sentiment
};
