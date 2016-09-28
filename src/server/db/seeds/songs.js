var faker = require('faker');
var catsArray = [];
for (var i = 0; i < 10; i++) {
  catsArray.push(faker.image.avatar())
}

exports.seed = function(knex, Promise) {
  return knex('songs').del()
  .then(function () {
    return Promise.all([
      knex('songs').insert({
      song_name: '99 red balloons',
      song_artist: 'Nena',
      sentiment_rating: 10,
      youtube_id: 'La4Dcd1aUcE',
      song_img: catsArray[0]
      }),
      knex('songs').insert({
      song_name: 'Feel good',
      song_artist: 'Chip Tha Rip',
      sentiment_rating: 9,
      youtube_id: 'epYcWImmpJU',
      song_img: catsArray[1]
      }),
      knex('songs').insert({
      song_name: 'Feel Right',
      song_artist: 'Mark Ronson',
      sentiment_rating: 8,
      youtube_id: 'ognnZ3r2qyQ',
      song_img: catsArray[2]
      }),
      knex('songs').insert({
      song_name: 'lost you',
      song_artist: 'Twin Shadow',
      sentiment_rating: 7,
      youtube_id: 'VJm7IPrBmLY',
      song_img: catsArray[3]
      }),
      knex('songs').insert({
      song_name: 'king kunta',
      song_artist: 'Kendrick Lamar',
      sentiment_rating: 6,
      youtube_id: 'hRK7PVJFbS8',
      song_img: catsArray[4]
      }),
      knex('songs').insert({
      song_name: 'i saw the sign',
      song_artist: 'Ace of Base',
      sentiment_rating: 5,
      youtube_id: 'iqu132vTl5Y',
      song_img: catsArray[5]
      }),
      knex('songs').insert({
      song_name: 'family traditions',
      song_artist: 'Hank Williams Jr',
      sentiment_rating: 4,
      youtube_id: 'xd0TGfZSACI',
      song_img: catsArray[6]
      }),
      knex('songs').insert({
      song_name: 'fuck apologies',
      song_artist: 'JoJo',
      sentiment_rating: 3,
      youtube_id: 'pScpXs7Ysdg',
      song_img: catsArray[7]
      }),
      knex('songs').insert({
      song_name: 'jumper',
      song_artist: 'Third Eye Blind',
      sentiment_rating: 2,
      youtube_id: 'lObgLdtXYpU',
      song_img: catsArray[8]
      }),
      knex('songs').insert({
      song_name: 'hello',
      song_artist: 'Adele',
      sentiment_rating: 1,
      youtube_id: 'YQHsXMglC9A',
      song_img: catsArray[9]
      })
    ]);
  });
};
