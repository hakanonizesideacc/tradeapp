'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Transactions', [
      {
        type: 'buy',
        portfolio_id: 1,
        share_id: '1',
        amounth: 0.2,
        price: 32.19,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: 'buy',
        portfolio_id: 1,
        share_id: '2',
        amounth: 0.7,
        price: 44.78,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: 'sell',
        portfolio_id: 1,
        share_id: '3',
        amounth: 0.9,
        price: 24.99,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: 'sell',
        portfolio_id: 2,
        share_id: '1',
        amounth: 19.25,
        price: 99.99,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: 'sell',
        portfolio_id: 2,
        share_id: '6',
        amounth: 2.2,
        price: 22.19,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: 'sell',
        portfolio_id: 3,
        share_id: '5',
        amounth: 2.7,
        price: 23.95,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: 'buy',
        portfolio_id: 4,
        share_id: '3',
        amounth: 2.2,
        price: 33.55,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: 'buy',
        portfolio_id: 4,
        share_id: '4',
        amounth: 5,
        price: 11.92,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: 'sell',
        portfolio_id: 5,
        share_id: '1',
        amounth: 6,
        price: 31.94,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Transactions', null, {});
  },
};
