const express = require('express');
const router = express.Router();
const { user } = require('../../controllers');
const path = require('path'); // Import the path module

router.get('/', (req, res) => {
    // Define the file path to your HTML file
    const filePath = path.join(__dirname, '../../../views', 'Registration.html');

    // Send the HTML file as a response
    res.sendFile(filePath);
});

router.post('/register', user.create);

router.post('/login', user.login);

module.exports = router;
