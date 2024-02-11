const Order = require('../models/order');

const orderController = {};

// Create a new order
orderController.createOrder = (req, res) => {
  const newOrder = new Order({
    address: req.body.address,
    user_id: req.body.user_id,
    order_date: req.body.order_date,
    artwork_id: req.body.artwork_id
  });

  Order.create(newOrder, (err, order) => {
    if (err) {
      return res.status(500).json({ success: false, error: 'Error creating order' });
    }
    return res.status(201).json({ success: true, order });
  });
};

// Get order by ID
orderController.getOrderById = (req, res) => {
  const orderId = req.params.id;

  Order.findById(orderId, (err, order) => {
    if (err) {
      return res.status(500).json({ success: false, error: 'Error finding order by ID' });
    }

    if (!order) {
      return res.status(404).json({ success: false, error: 'Order not found' });
    }

    return res.status(200).json({ success: true, order });
  });
};

module.exports = orderController;


