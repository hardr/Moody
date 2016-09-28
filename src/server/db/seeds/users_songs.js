
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users_songs').del()
    .then(function () {
      return Promise.all([
        knex('users_songs').insert({
          user_id: 84,
          song_id: 93
        }),
        knex('users_songs').insert({
          user_id: 84,
          song_id: 94
        }),
        knex('users_songs').insert({
          user_id: 84,
          song_id: 95
        }),
        knex('users_songs').insert({
          user_id: 86,
          song_id: 99
        }),
        knex('users_songs').insert({
          user_id: 86,
          song_id: 100
        }),
        knex('users_songs').insert({
          user_id: 88,
          song_id: 101
        }),
        knex('users_songs').insert({
          user_id: 88,
          song_id: 102
        }),
        knex('users_songs').insert({
          user_id: 88,
          song_id: 93
        })
      ]);
    });
};
