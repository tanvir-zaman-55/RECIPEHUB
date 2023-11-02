const express = require('express');
const router = express.Router();
const { recipe } = require('../../controllers');
const path = require('path'); // Import the path module

router.get('/', (req, res) => {
    // Define the file path to your HTML file
    const filePath = path.join(__dirname, '../../../views', 'RecipeUp.html');

    // Send the HTML file as a response
    res.sendFile(filePath);
});

router.post('/recipeup', recipe.create);
router.post("/getUserRecipes", recipe.getRecipesByUser);
router.post("/getRecipesByTag", recipe.getRecipesByTag);
router.post("/getRecipesByName", recipe.getRecipesByName);
module.exports = router;
