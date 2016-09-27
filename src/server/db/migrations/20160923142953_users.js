
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (t) => {
      t.increments();
      t.string('userName').notNullable();
      t.string('first_name');
      t.string('last_name');
      t.string('email').notNullable();
      t.string('song_played');
      t.timestamp('created');
      t.string('song_img');
    });

};

exports.down = function(knex, Promise) {

};
