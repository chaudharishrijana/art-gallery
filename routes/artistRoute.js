// routes/authRoutes.js
const express = require('express');
const artistController = require('../Controllers/artistController');

const router = express.Router();

// Registration route
router.post('/register', artistController.register);
router.get('/', artistController.registerPage);
// Login route
router.post('/login', artistController.login);

module.exports = router;
