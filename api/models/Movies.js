var db = require('./db');
var S = require('sequelize');

class Movies extends S.Model {}

Movies.init({
    title: {
        type: S.STRING
    },
    genre: { 
    type: S.STRING
    },
    summary: {
        type: S.STRING
    },
}, { sequelize: db, modelName: 'movie' });


module.exports = Movies;