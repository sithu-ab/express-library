'use strict';
module.exports = (sequelize, DataTypes) => {
  var Author = sequelize.define('Author', {
    name: DataTypes.STRING,
    url: DataTypes.STRING
  }, {});
  Author.associate = function(models) {
    // associations can be defined here
  };
  return Author;
};