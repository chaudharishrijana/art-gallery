const db = require('../config/db'); // Assuming the MySQL connection is established in app.js

const Order = function (order) {
  this.order_id = order.order_id;
  this.address = order.address;
  this.user_id = order.user_id;
  this.order_date = order.orde_date;
  this.artwork_id = order.artwork_id;
};

Order.create = (newOrder, result) => {
  db.query('INSERT INTO orders SET ?', newOrder, (err, res) => {
    if (err) {
      console.error('Error creating order:', err);
      result(err, null);
      return;
    }

    console.log('Created order:', { id: res.insertId, ...newOrder });
    result(null, { id: res.insertId, ...newOrder });
  });
};

Order.findById = (id, result) => {
  db.query('SELECT * FROM orders WHERE order_id = ?', [id], (err, res) => {
    if (err) {
      console.error('Error finding order by id:', err);
      result(err, null);
      return;
    }

    // Order not found
    result(null, null);
  });
};

module.exports = Order;
