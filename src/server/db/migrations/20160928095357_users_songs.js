
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users_songs', function(t) {
    t.increments('uuid');
    t.integer('user_id');
    t.integer('song_id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users_songs');
};
