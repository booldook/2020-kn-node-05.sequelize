'use strict';
module.exports = (sequelize, DataTypes) => {
  const User2 = sequelize.define('User2', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  User2.associate = function(models) {
    // associations can be defined here
  };
  return User2;
};