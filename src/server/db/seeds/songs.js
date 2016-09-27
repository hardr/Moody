
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('songs').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('songs').insert
        ({ song_name: 'Hey Jude',
           artist_name: 'Beatles',
           user_id:3,
           score:9
         })
      ]);
    });
};
