const controllers = {};

controllers.user = require('./profile.js');
controllers.recipe = require('./recipe.js');

module.exports = controllers;