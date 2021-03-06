'use strict';

module.exports = (sequelize, DataTypes) => {
  var Genre = sequelize.define('Genre', {
    name: DataTypes.STRING,
    url: DataTypes.STRING
  }, {});

  Genre.associate = function (models) {
    // associations can be defined here
    Genre.belongsTo(models.Book, {
      through: 'BookGenres',
      onDelete: 'CASCADE'
    });
  };

  return Genre;
};
