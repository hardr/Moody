
exports.seed = function(knex, Promise) {
  return knex('songs').del()
  .then(function () {
    return Promise.all([
      knex('songs').insert({song_name: '99 red balloons', sentiment_rating: 10, youtube_id: 'La4Dcd1aUcE'}),
      knex('songs').insert({song_name: 'feel good', sentiment_rating: 9, youtube_id: 'epYcWImmpJU'}),
      knex('songs').insert({song_name: 'feel right', sentiment_rating: 8, youtube_id: 'ognnZ3r2qyQ'}),
      knex('songs').insert({song_name: 'lost you', sentiment_rating: 7, youtube_id: 'VJm7IPrBmLY'}),
      knex('songs').insert({song_name: 'king kunta', sentiment_rating: 6, youtube_id: 'hRK7PVJFbS8'}),
      knex('songs').insert({song_name: 'i saw the sign', sentiment_rating: 5, youtube_id: 'iqu132vTl5Y'}),
      knex('songs').insert({song_name: 'family traditions', sentiment_rating: 4, youtube_id: 'xd0TGfZSACI'}),
      knex('songs').insert({song_name: 'fuck apologies', sentiment_rating: 3, youtube_id: 'pScpXs7Ysdg'}),
      knex('songs').insert({song_name: 'jumper', sentiment_rating: 2, youtube_id: 'lObgLdtXYpU'}),
      knex('songs').insert({song_name: 'hello', sentiment_rating: 1, youtube_id: 'YQHsXMglC9A'})
    ]);
  });
};
