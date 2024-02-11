const db = require('../config/db'); // Assuming the MySQL connection is established in app.js

const Category= function (category) {
  this.category_id = category.category_id;
  this.name = category.name;

};


Category.create = (newCategory, result) => {
    db.query('INSERT INTO category SET ?', newCategory, (err, res) => {
      if (err) {
        console.error('Error creating category:', err);
        result(err, null);
        return;
      }
  
      console.log('Created category:', { id: res.insertId, ...newCategory });
      result(null, { id: res.insertId, ...newCategory });
    });
  };
  
  Category.findById = (id, result) => {
    db.query('SELECT * FROM category WHERE id = ?', [id], (err, res) => {
      if (err) {
        console.error('Error finding user by id:', err);
        result(err, null);
        return;
      }

        
  
      // Category not found
      result(null, null);
    });
  };
  
  module.exports = Category;
  