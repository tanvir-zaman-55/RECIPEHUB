const { Op } = require('sequelize');
const { models: { Recipe } } = require('../models');

// Modify the create method to use the correct property names
module.exports = {
    create: async (req, res) => {
    

        if (req.body.recipename, req.body.userid, req.body.recipenutrients, req.body.recipeingrediants, req.body.recipesteps, req.body.recipestags, req.body.recipelink1, req.body.recipelink2, req.body.recipelink3, req.body.isPremium) {
            try {
                //res.send('I AM IsNNNNN!!!');
                //Use the correct properties when creating a new User
                const { recipename, userid, recipenutrients, recipeingrediants, recipesteps, recipestags, recipelink1, recipelink2, recipelink3, isPremium } = req.body;
                await Recipe.create({
                    recipename,
                    userid,
                    recipenutrients,
                    recipeingrediants,
                    recipesteps,
                    recipestags,
                    recipelink1,
                    recipelink2,
                    recipelink3,
                    isPremium
                });
                res.redirect('/UserProfile.html');
            } catch (err) {
                console.error(err);
                res.send('Error creating Recipe. GO BACK!!!');
            }
        } else {
            res.send('Please fill in all required fields.');
        }
    },
    getRecipesByUser: async (req, res) => {
        const { username } = req.body;
        console.log(req.body);
        try {
          const userRecipes = await Recipe.findAll({
            where: { userid: username },
          });
          console.log(userRecipes);
          if (userRecipes) {
            res.json(userRecipes);
          } else {
            res.send("No recipes found for the specified user.");
          }
        } catch (err) {
          console.error(err);
          res.send("Error retrieving recipes.");
        }
      },
      getRecipesByTag: async (req, res) => {
        try {
          const { tag } = req.body;
          const recipesWithTag = await Recipe.findAll({
            where: {
              recipestags: {
                [Op.like]: `%${tag}%`,
              },
            },
          });
    console.log(recipesWithTag);
          if (recipesWithTag.length > 0) {
            res.json(recipesWithTag);
          } else {
            res.send("No recipes found with the specified tag.");
          }
        } catch (err) {
          console.error(err);
          res.send("Error retrieving recipes by tag.");
        }
      },
      getRecipesByName: async (req, res) => {
        try {
          const { name } = req.body;
          const recipesByName = await Recipe.findAll({
            where: {
              recipename: {
                [Op.like]: `%${name}%`,
              },
            },
          });
    
          if (recipesByName.length > 0) {
            res.json(recipesByName);
          } else {
            res.send("No recipes found with the specified name.");
          }
        } catch (err) {
          console.error(err);
          res.send("Error retrieving recipes by name.");
        }
      },
};
