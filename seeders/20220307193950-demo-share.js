'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Shares', [
      {
        symbol: 'BNB',
        rate: 44.11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        symbol: 'SOL',
        rate: 5.31,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        symbol: 'CNB',
        rate: 15.68,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        symbol: 'DSD',
        rate: 21.24,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        symbol: 'ASD',
        rate: 13.554,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        symbol: 'DFJ',
        rate: 21.33,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Shares', null, {});
  },
};
