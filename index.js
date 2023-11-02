const express = require("express");
const app = express();
const db = require("./b_end/models");
const path = require("path");

const register = require("./b_end/routes/registration");
const recipeup = require("./b_end/routes/recipe");
const profile = require("./b_end/routes/profile/profile.js");

// Parse JSON and x-www-form-urlencoded data
app.use(express.json()); // Parse JSON data
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data

app.use("/register", register);
app.use("/recipeup", recipeup);
app.use("/profile", profile);

app.use(express.static(path.join(__dirname, "views"))); // Serve static files like your HTML and CSS from the 'public' directory

// Set the view engine and views directory
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

(async () => {
  await db.sequelize.sync({ alter: true });
})();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});