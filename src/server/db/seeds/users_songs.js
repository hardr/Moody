
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users_songs').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
      ]);
    });
};
