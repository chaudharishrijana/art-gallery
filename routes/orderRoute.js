const express = require('express');
const router = express.Router();
const orderController = require('../Controllers/orderController');

// Route to create a new order
router.post('/orders', orderController.createOrder);

// Route to get order by ID
router.get('/orders/:id', orderController.getOrderById);

// Add more routes as needed for updating, deleting, or listing orders

module.exports = router;
