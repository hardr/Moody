
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (t) => {
      t.increments();
      t.string('user_name').notNullable();
      t.string('password').notNullable();
      t.string('first_name').notNullable();
      t.string('last_name').notNullable();
      t.string('email').notNullable();
      t.boolean('admin').defaultTo('false');
      t.timestamp('acct_incept').defaultTo(knex.fn.now());

    });

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');

};
