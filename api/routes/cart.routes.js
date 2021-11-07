module.exports = (app) => {
    const cart = require("../controllers/cart.controller.js");

    // Create a new Cart
    app.post("/cart", cart.create);

    // Get cart
    app.get("/cart/:username", cart.findByUsername);

    // Add To cart
    app.post("/cart/add", cart.addToCart);

    // Delete from cart
    app.delete("/cart/delete", cart.deleteProductFromCart);

    // Delete all products from cart
    app.delete("/cart/delete/all/:id", cart.deleteAll);
};
