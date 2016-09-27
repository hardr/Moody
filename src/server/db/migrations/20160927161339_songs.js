
exports.up = function(knex, Promise) {
  return knex.schema.createTable('songs', (t) => {
    t.increments();
    t.string('song_name').notNullable();
    t.integer('sentiment_rating').notNullable();
    t.string('youtube_id').notNullable();
    t.integer('user_id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('songs');
};
