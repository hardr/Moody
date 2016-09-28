
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({
          userName: 'gannaconda',
          password: 'password',
          first_name: 'Kristjan',
          last_name: 'Gannon',
          email: 'gannonk08@gmail.com',
          song_played: 'Forgot About Dre',
          created: "02-12-2014",
          song_img: 'http://www.iconsplace.com/icons/preview/orange/duck-256.png',
        })
      ]);
    });
};
