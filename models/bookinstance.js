'use strict';
module.exports = (sequelize, DataTypes) => {
  var BookInstance = sequelize.define('BookInstance', {
    imprint: DataTypes.STRING,
    status: DataTypes.STRING,
    due_date: DataTypes.DATE
  }, {});
  BookInstance.associate = function(models) {
    // associations can be defined here
  };
  return BookInstance;
};