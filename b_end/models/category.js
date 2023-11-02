import Sequelize from 'sequelize';

// Database configuration
const sequelize = new Sequelize('recipehub', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    freezeTableName: true,
    timestamps: false
}
});

// Define the Category model
export const Category = sequelize.define('category', {
  categoryid: {
    type: Sequelize.DataTypes.INTEGER,
    allownull: false,
    primaryKey: true,
    autoincrement: true
  },
  recipeid: {
    type: Sequelize.DataTypes.INTEGER,
  },
  categoryname: {
    type: Sequelize.DataTypes.STRING,
  },
});

// Synchronize the model with the database
Category.sync({alter: true}).then (()=>{
    console.log("Table synced")
}).catch((err) => {
    console.log("No sync")
})

