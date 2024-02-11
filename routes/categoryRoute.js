const express = require('express');
const router = express.Router();
const categoryController = require('../Controllers/categoryController');

// Route to create a new category
router.post('/categories', categoryController.createCategory);

// Route to get category by ID
router.get('/categories/:id', categoryController.getCategoryById);

// Add more routes as needed for updating, deleting, or listing categories

module.exports = router;
