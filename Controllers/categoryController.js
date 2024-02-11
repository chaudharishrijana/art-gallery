const Category = require('../models/category');

const categoryController = {};

// Create a new category
categoryController.createCategory = (req, res) => {
  const newCategory = new Category({
    name: req.body.name
    // Assuming that category_id is an auto-incremented primary key and is not explicitly set in the request body
  });

  Category.create(newCategory, (err, category) => {
    if (err) {
      return res.status(500).json({ success: false, error: 'Error creating category' });
    }
    return res.status(201).json({ success: true, category });
  });
};

// Get category by ID
categoryController.getCategoryById = (req, res) => {
  const categoryId = req.params.id;

  Category.findById(categoryId, (err, category) => {
    if (err) {
      return res.status(500).json({ success: false, error: 'Error finding category by ID' });
    }

    if (!category) {
      return res.status(404).json({ success: false, error: 'Category not found' });
    }

    return res.status(200).json({ success: true, category });
  });
};

module.exports = categoryController;
