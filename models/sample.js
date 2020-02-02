'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sample = sequelize.define('Sample', {
    title: DataTypes.STRING,
    comment: DataTypes.STRING,
    writer: DataTypes.STRING,
    rnum: DataTypes.INTEGER
  }, {});
  Sample.associate = function(models) {
    // associations can be defined here
  };
  return Sample;
};