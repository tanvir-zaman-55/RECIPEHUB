const dbconfig = require('../config/dbconfig');
const Sequelize = require('sequelize');

const sequelize = new Sequelize('recipehub', 'root', '', {
    host: 'localhost',
    prompt: 3306,
    dialect: 'mysql'
});

const db = {
    models: {} // Initialize models as an empty object
  };
db.sequelize = sequelize;
db.models.User = require('./profile.js')(sequelize, Sequelize.DataTypes);
db.models.Recipe = require('./recipe.js')(sequelize, Sequelize.DataTypes);

module.exports = db;