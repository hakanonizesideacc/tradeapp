'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Shares', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      symbol: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'Must provide a valid symbol' },
          notEmpty: { msg: 'Symbol can not be empty' },
          is: /(.*[A-Z]){3}/i,
        },
      },
      rate: {
        type: Sequelize.DECIMAL,
        allowNull: false,
        validate: {
          notNull: { msg: 'Share must have a rate' },
          notEmpty: { msg: 'Share Rate can not be empty' },
          is: /^[0-9][0-9]\.[0-9][0-9]$/,
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Shares');
  },
};
