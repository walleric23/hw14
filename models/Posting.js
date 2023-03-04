// requires
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Posting extends Model {}
// sets object structure for posting
Posting.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'posting',
  }
);

module.exports = Posting;
