var faker = require('faker');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      var fakeUsersArray = []
      for (var i = 0; i <= 10; i++) {
        fakeUsersArray.push(knex('users').insert({
          user_name: faker.internet.userName(),
          password: faker.internet.password(8,1),
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          email: faker.internet.email(),
          admin: false
        }))
      }
      fakeUsersArray.push(knex('users').insert({
        user_name: 'admin',
        password: '$2a$10$FAUzH4FoZTlW.hQVPA87NOAgB3NjDGGRf.rRaSlkyVJrCA9WCG4JG',
        first_name: 'Kristjan',
        last_name: 'Gannon',
        email: 'gannonk08@gmail.com',
        admin: true
      }))

      return Promise.all(fakeUsersArray);
    });
};
