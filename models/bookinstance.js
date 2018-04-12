'use strict';

module.exports = (sequelize, DataTypes) => {
  var BookInstance = sequelize.define('BookInstance', {
    imprint: DataTypes.STRING,
    status: DataTypes.STRING,
    due_date: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.NOW
    }
  }, {});

  BookInstance.associate = function(models) {
    // associations can be defined here
    BookInstance.belongsTo(models.Book, {
      onDelete: 'CASCADE',
      foreignKey: {
        allowNull: false
      }
    });
  };

  return BookInstance;
};
