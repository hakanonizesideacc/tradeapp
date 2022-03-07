'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        username: 'Jason',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Emily',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'John',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Andrew',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Derrick',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
