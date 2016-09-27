
exports.up = function(knex, Promise) {
  return knex.schema.createTable('songs', (t) => {
    t.increments();
    t.string('song_name');
    t.string('artist_name');
    t.string('user_id');
    t.integer('score');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('songs');
};
