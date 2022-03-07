'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('PortfolioShares', [
      {
        portfolio_id: 1,
        share_id: '1',
        amounth: 0.2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        portfolio_id: 1,
        share_id: '2',
        amounth: 0.7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        portfolio_id: 1,
        share_id: '3',
        amounth: 0.9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        portfolio_id: 2,
        share_id: '1',
        amounth: 1.5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        portfolio_id: 2,
        share_id: '6',
        amounth: 2.2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        portfolio_id: 3,
        share_id: '5',
        amounth: 2.7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        portfolio_id: 4,
        share_id: '3',
        amounth: 2.2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        portfolio_id: 4,
        share_id: '4',
        amounth: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        portfolio_id: 5,
        share_id: '1',
        amounth: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('PortfolioShares', null, {});
  },
};
