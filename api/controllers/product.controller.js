const Product = require("../models/product.model.js");

// Create and save new product
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).json({ message: "content can not be empty" });
  }

  // Create a product

  const product = new Product({
    title: req.body.title,
    id_category: req.body.categoryId,
    description: req.body.description,
    img: req.body.img,
    price: req.body.price,
    createdat: new Date(),
  });

  // Save product in the db
  Product.create(product, (err, data) => {
    if (err) {
      res.status(500).json({
        message:
          err.message || "some error occurred whime creating the product",
      });
    } else {
      res.json(data);
    }
  });
};

// Get all Products
exports.findAll = (req, res) => {
  Product.getAll((err, data) => {
    if (err)
      res.status(500).json({
        message:
          err.message || "some error occurred whime creating the product",
      });
    else res.json(data);
  });
};

// Get one product with id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Product.findById(Number(id), (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).json({
          message: `Not found product with id ${id}`,
        });
      } else
        res.status(500).json({
          message: "Error retrieving product with id " + id,
        });
    } else res.json(data);
  });
};

// Get products by category
exports.findAllByCategory = (req, res) => {
  const categoryId = req.params.id;
  Product.findAllByCategory(Number(categoryId), (err, data) => {
    if (err) {
      if (err.kind === "nod_found") {
        res.status(404).json({
          message: `not found product with category id${categoryId}`,
        });
      } else {
        res.status(500).json({
          message: "Error retrieving products with category id " + categoryId,
        });
      }
    } else res.json(data);
  });
};

// Update a product by id
exports.update = (req, res) => {
  if (!req.body) {
    res.status(400).json({
      message: "Content can not be empty",
    });
  }

  const productId = req.params.id;
  const newProduct = req.body;
  Product.updateById(Number(productId), newProduct, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).json({
          message: `Not found Product with id  ${productId}`,
        });
      } else {
        res.status(500).json({
          message: "Error updating Product with id " + productId,
        });
      }
    } else {
      res.json(data);
    }
  });
};

// Delete a Product by id
exports.delete = (req, res) => {
  const productId = req.params.id;
  Product.remove(Number(productId), (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(400).json({
          message: `Not found product with id ${productId}`,
        });
      } else {
        res.status(500).json({
          message: "Could not delete product with id " + productId,
        });
      }
    } else {
      res.json({
        message: `Product was deleted successfully`,
      });
    }
  });
};

// delete all products
exports.deleteAll = (req, res) => {
  Product.removeAll((err, data) => {
    if (err)
      res.status(500).json({
        message:
          err.message || "some error occured while removing all products",
      });
    else
      res.json({
        message: `all products were deleted successfully`,
      });
  });
};
