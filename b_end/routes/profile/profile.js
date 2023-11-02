const express = require("express");
const router = express.Router();
const { user } = require("../../controllers");

// const { profileController } = require('../controllers/app.js');

// Route to create a new user

router.get("/:username", (req, res) => {
  res.render("UserProfile.html");
});

// router.post('/', profileController.create);

router.post("/getUserProfile", user.retrieve);
router.post("/updateUserProfile", user.edit);

module.exports = router;