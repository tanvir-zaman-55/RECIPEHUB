const { models: { User } } = require('../models');

// Modify the create method to use the correct property names
module.exports = {
    create: async (req, res) => {
    

        if (req.body.username && req.body.password && req.body.birthdate && req.body.location && req.body.email && req.body.gender) {
            try {
                //res.send('I AM IsNNNNN!!!');
                //Use the correct properties when creating a new User
                const { username, password, birthdate, location, email, gender } = req.body;
                await User.create({
                    username,
                    password,
                    birthdate,
                    location,
                    email,
                    gender
                });
                res.cookie("username", username, {
                    maxAge: 7 * 24 * 60 * 60 * 1000,
                    httpOnly: true,
                  });
                res.render('UserProfile.ejs', { username, birthdate, location, email, gender }); // Pass the entire user object to the view
            } catch (err) {
                console.error(err);
                res.send('Error creating the user.');
            }
        } else {
            res.send('Please fill in all required fields.');
        }
    },
    retrieve: async (req, res) => {
        try {
          const username = req.body.username;
          const user = await User.findOne({ where: { username } });
          if (user) {
            res.json(user);
          } else {
            res.send("User not found.");
          }
        } catch (err) {
          console.error(err);
          res.send("Error retrieving the user.");
        }
      },
      edit: async (req, res) => {
        const { username } = req.body;
        try {
          const user = await User.findOne({ where: { username } });
    
          if (user) {
            await User.update(
              {...req.body},
              { where: { username } }
            );
            res.send("User updated successfully.");
          } else {
            res.send("User not found.");
          }
        } catch (err) {
          console.error(err);
          res.send("Error updating the user.");
        }
      },
      login: async (req, res) => {
        try {
           console.log(req) 
          const { username, password } = req.body;
            console.log(username, password);
          // Find the user by username
          const user = await User.findOne({ where: { username } });
          if (user) {
            // Check if the submitted password matches the one in the database
            if (password === user.password) {
              // Login success
              res.cookie("username", username, {
                maxAge: 7 * 24 * 60 * 60 * 1000,
                
              });
              res.redirect('/Home.html');
            } else {
              // Password does not match
              res.send("Invalid password.");
            }
          } else {
            // No user found with the provided username
            res.send("User not found.");
          }
        } catch (err) {
          console.error(err);
          res.send("Error logging in.");
        }
      },
};
