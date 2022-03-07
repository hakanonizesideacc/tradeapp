'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Share extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}
  }
  Share.init(
    {
      symbol: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'Must provide a valid symbol' },
          notEmpty: { msg: 'Symbol can not be empty' },
          is: /^[a-zA-Z]{3}$/,
        },
      },
      rate: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        validate: {
          notNull: { msg: 'Share must have a rate' },
          notEmpty: { msg: 'Share Rate can not be empty' },
          is: /^[0-9][0-9]\.[0-9][0-9]$/,
        },
      },
    },
    {
      sequelize,
      modelName: 'Share',
    }
  );
  return Share;
};
