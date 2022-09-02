const User = require('./User')
const Favorites = require('./Favorites')


Favorites.belongsTo(User, {as: 'usuario'})

module.exports = {User, Favorites}