'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Banner extends Model {
    static associate(models) {
    }
  }
  Banner.init({
    url: DataTypes.STRING,
    image: DataTypes.STRING,
    sort: DataTypes.INTEGER,
    is_active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Banner',
  });
  return Banner;
};