const Sequelize = require('sequelize');

const dbconfig =  require('./dbconfig.js');

const sequelize = new Sequelize(dbconfig.database, dbconfig.user, dbconfig.password, {
  host: dbconfig.host,
  prompt: 3306,
  dialect: 'mysql',
//   define: {
//     freezeTableName: true,
//     timestamps: false
// }
});

const db = {};
db.sequelize = sequelize;
db.models = {};
db.models.User = require('../b_end/models/profileModel.js')(sequelize, Sequelize.DataTypes);

module.exports = db;