const { verifyTokenAndAdmin } = require("./verifyToken.js");

module.exports = (app) => {
  const products = require("../controllers/product.controller.js");

  // Create a new Product
  app.post("/products", verifyTokenAndAdmin, products.create);

  // Get product categories
  app.get("/categories", products.findAllCategories);

  // Get product by category
  app.get("/category", products.findAllByCategory);

  // Get one product
  app.get("/products/:id", products.findOne);

  // Get all products
  app.get("/products", products.findAll);

  // Update a product with id
  app.put("/products/:id", verifyTokenAndAdmin, products.update);

  // Delete a product with id
  app.delete("/products/:id", verifyTokenAndAdmin, products.delete);

  // Delete all products
  app.delete("/products", verifyTokenAndAdmin, products.deleteAll);
};
