
const Sequelize = require("sequelize");
const db = new Sequelize("checkpoint_TMDB", null, null, {
    dialect: "postgres",
    host: "localhost",
    logging: false
  });

module.exports = db
