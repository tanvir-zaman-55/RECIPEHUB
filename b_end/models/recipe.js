


module.exports = ( sequelize, DataTypes) => {

    const Recipe = sequelize.define('recipe', {
        recipeid:{
            type: DataTypes.INTEGER,
            allownull: false,
            primaryKey: true,
            autoincrement: true
        },
        recipename:{
            type: DataTypes.STRING,
            allownull: false
        },
        userid:{
            type: DataTypes.STRING,
            default: null,
            allownull: true,
            foreginKey: true
        },
        recipedescription:{
            type: DataTypes.STRING,
            allownull: false
        },
        recipepic:{
            type: DataTypes.BLOB,
            allownull: true
        },
        recipenutrients:{
            type: DataTypes.STRING,
            allownull: true
        },
        recipeingrediants:{
            type: DataTypes.STRING,
            allownull: true
        },
        recipesteps:{
            type: DataTypes.STRING,
            allownull: true
        },
        recipestags:{
            type: DataTypes.STRING,
            allownull: true
        },
        recipelink1:{
            type: DataTypes.STRING,
            allownull: true
        },
        recipelink2:{
            type: DataTypes.STRING,
            allownull: true
        },
        recipelink3:{
            type: DataTypes.STRING,
            allownull: true
        },
        isPremium:{
            type: DataTypes.BOOLEAN,
            default: null,
            allownull: true
        },
        reciperating: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allownull: true,
          },
          usersWhoRatedCount: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 0,
          },
          totalRatingCount: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 0,
          },
        
    },
    {
        freezeTableName: true,
        timestamps: false
    });
    
        return Recipe;
    

};