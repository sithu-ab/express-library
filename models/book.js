'use strict';

module.exports = (sequelize, DataTypes) => {
  var Book = sequelize.define('Book', {
    title: DataTypes.STRING,
    summary: DataTypes.STRING,
    isbn: DataTypes.STRING,
    url: DataTypes.STRING
  }, {});

  Book.associate = function(models) {
    // associations can be defined here
    Book.belongsTo(models.Author, {
      onDelete: 'CASCADE',
      foreignKey: {
        allowNull: false
      }
    });
    Book.hasMany(models.BookInstance);
    Book.belongsToMany(models.Genre, {
      through: 'BookGenres',
      onDelete: 'CASCADE'
    });
  };

  return Book;
};
