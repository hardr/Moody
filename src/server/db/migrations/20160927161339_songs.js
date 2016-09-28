
exports.up = function(knex, Promise) {
  return knex.schema.createTable('songs', (t) => {
    t.increments();
    t.string('song_name').notNullable();
    t.string('song_artist').notNullable();
    t.float('sentiment_rating').notNullable();
    t.text('youtube_id').notNullable();
    t.text('song_img');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('songs');
};
