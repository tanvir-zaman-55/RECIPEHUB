
module.exports = ( sequelize,DataTypes) => {

    const User = sequelize.define('profile', {
        userid: {
          type: DataTypes.INTEGER,
          allownull: false,
          primaryKey: true,
          autoIncrement: true
        },
        username: {
          type: DataTypes.STRING,
          allowNull: false
        },
        fname: {
          type: DataTypes.STRING,
          default: null
        },
        lname: {
          type: DataTypes.STRING,
          default: null
        },
        birthdate: {
          type: DataTypes.DATE,
          allowNull: false
        },
        gender: {
          type: DataTypes.STRING,
          allowNull: false
        },
        profilepic: {
          type: DataTypes.STRING, // You can store the path to the profile picture file here.
        },
        contactid: {
          type: DataTypes.INTEGER
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false
        },
        isPremium: {
          type: DataTypes.BOOLEAN,
          default: null
          
        },
        location: {
          type: DataTypes.STRING
        },
        aboutMe: {
          type: DataTypes.STRING
        }
      }, 
      {
            freezeTableName: true,
            timestamps: false
      });


      return User;

};

