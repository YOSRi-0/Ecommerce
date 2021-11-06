module.exports = (app) => {
    const products = require("../controllers/product.controller.js");

    // Create a new Product
    app.post("/products", products.create);

    // Get one product
    app.get("/products/:id", products.findOne);

    // Get one product by category
    app.get("/products/category/:id", products.findAllByCategory);

    // Get all products
    app.get("/products", products.findAll);

    // Update a product with id
    app.put("/products/:id", products.update);

    // Delete a product with id
    app.delete("/products/:id", products.delete);

    // Delete all products
    app.delete("/products", products.deleteAll);
};
