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

// Define the ContactInfo model
const ContactInfo = sequelize.define('contactinfo', {
  contactid: {
    type: Sequelize.DataTypes.INTEGER,
    allownull: false,
    primaryKey: true,
    autoincrement: true
  },
  socialmedia: {
    type: Sequelize.DataTypes.STRING,
  },
  phone_no: {
    type: Sequelize.DataTypes.STRING,
  },
  home_no: {
    type: Sequelize.DataTypes.STRING,
  },
});

// Synchronize the model with the database
ContactInfo.sync({alter: true}).then (()=>{
    console.log("Table synced")
}).catch((err) => {
    console.log("No sync")
})

