// routes/authRoutes.js
const express = require('express');
const userController = require('../Controllers/userController');

const router = express.Router();

// Registration route
router.post('/register', userController.register);
// router.get('registerPage', userController.registerPage);
// Login route
router.post('/login', userController.login);

module.exports = router;
