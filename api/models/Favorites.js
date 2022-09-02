var db = require('./db');
var S = require('sequelize');

class Favorites extends S.Model { }

Favorites.init({
    movie_id: {
        type: S.STRING,
        allowNull: false,
    },
    movie_media: {
        type: S.STRING,
        allowNull: false,
    }
}, { sequelize: db, modelName: 'favorites' });


module.exports = Favorites;