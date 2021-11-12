const Category = require("../models/category.model.js");

// Create and save new category
exports.create = (req, res) => {
  // Validate input
  if (!req.body) {
    return res.status(400).json({ message: "Content cannot be empty" });
  }

  // Create a category
  const category = new Category({
    mainCategory: req.body.mainCategory,
    subCategory: req.body.subCategory,
    image: req.body.image || null,
  });

  // Save category in the db
  Category.create(category, (err, data) => {
    if (err) {
      return res.status(500).json({
        message:
          err.message || "some error occurred whime creating the product",
      });
    } else {
      return res.json(data);
    }
  });
};

//  Update Category
exports.update = (req, res) => {
  // Validate input
  if (!req.body) {
    return res.status(400).json({ message: "Body cannot be empty" });
  }

  const category = new Category({
    mainCategory: req.body.mainCategory,
    subCategory: req.body.subCategory,
    image: req.body.image || null,
  });

  const id = req.params.id;
  // update in the db
  Category.update(id, category, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        return res
          .status(404)
          .json({ message: `category with id ${id} was not found` });
      } else {
        return res.status(500).json({
          message:
            err.message ||
            "an error occurred while updating the category with id " + id,
        });
      }
    } else {
      return res.json(data);
    }
  });
};

// Delete Category
exports.delete = (req, res) => {
  const id = req.params.id;

  Category.remove(id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        return res
          .status(404)
          .json({ message: `Category with id ${id} was not found` });
      } else {
        return res.status(500).json({
          message:
            err.message || "an error occurred while removing category " + id,
        });
      }
    } else {
      return res.json({ message: `Category ${id} was deleted successfully` });
    }
  });
};

exports.getAll = (req, res) => {
  // get categories
  Category.findAll((err, data) => {
    if (err) {
      return res.status(500).json({
        message: err.message || "Error occurred while getting all categories",
      });
    } else {
      return res.json(data);
    }
  });
};
