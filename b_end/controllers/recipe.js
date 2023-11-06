const { Op } = require('sequelize');
const { models: { Recipe, User } } = require('../models');

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
            const { username, tag } = req.body;
            const user = await User.findOne({ where: { username } });
      
            // Check if the user is found and user's premium status
            const isUserPremium = user && user.isPremium;
          const recipesWithTag = await Recipe.findAll({
            where: {
              recipestags: {
                [Op.like]: `%${tag}%`,
              },
              ...(isUserPremium ? {} : { isPremium: false }),
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
            const { username, name } = req.body;
            const user = await User.findOne({ where: { username } });
      
            // Check if the user is found and user's premium status
            const isUserPremium = user && user.isPremium;
      
       
          const recipesByName = await Recipe.findAll({
            where: {
              recipename: {
                [Op.like]: `%${name}%`,
              },
              ...(isUserPremium ? {} : { isPremium: false }),
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
      viewRecipe: async (req, res) => {
        console.log('VIEWRECIPE');
        console.log(req.body.recipename);
        try {
          res.cookie('recipename', req.body.recipename, {maxAge: 7*24*60*60*1000})
          res.redirect('/RecipeView.html')
        } catch (err) {
          //console.error(err);
          res.send("Error retrieving the recipe.");
        }
        
      },
      getRecipeByName: async (req, res) => {
        try {
          const { recipename } = req.body;
          const recipe = await Recipe.findOne({ where: { recipename } });
            console.log(recipe)
          if (recipe) {
            res.json(recipe);
          } else {
            res.send("No recipe found.");
          }
        } catch (err) {
            console.log(err);
          res.send("No recipe found.");
        }
      },
      submitRating: async (req, res) => {
        const { recipename, reciperating } = req.body;
        console.log(req.body);
        console.log(!recipename);
        console.log(!parseInt(reciperating));

    
        if (!recipename || !parseInt(reciperating)) {
          return res.status(400).send("Recipe name and rating are required.");
        }
    
        try {
          // Find the recipe by ID
          let recipe = await Recipe.findOne({ where: {recipename} });
          if (!recipe) {
            return res.status(404).send("Recipe not found.");
          }
    
          // Update rating counts
          recipe.usersWhoRatedCount += 1;
          recipe.totalRatingCount += parseInt(reciperating);
    
          recipe.reciperating =
            recipe.usersWhoRatedCount > 0
              ? recipe.totalRatingCount / recipe.usersWhoRatedCount
              : 0;
    
          // Save the updated recipe
          await recipe.save();
    
          res.send("Rating submitted successfully.");
        } catch (err) {
          console.error(err);
          res.status(500).send("Error submitting rating.");
        }
      },
      getRecipes: async (req, res) => {
        try {
          const { username } = req.body;
          const user = await User.findOne({ where: { username } });
    
          // Check if the user is found and user's premium status
          const isUserPremium = user && user.isPremium;
    
          const recipesByName = await Recipe.findAll({
            where: {
              ...(isUserPremium ? {} : { isPremium: false }),
            },
          });
    
          if (recipesByName.length > 0) {
            res.json(recipesByName);
          } else {
            res.send("No recipes found.");
          }
        } catch (err) {
          console.error(err);
          res.send("Error retrieving recipes.");
        }
      },
};
