module.exports = (app) => {
	const cart = require("../controllers/cart.controller.js");
	const { verifyTokenAndAuthorization } = require("./verifyToken");

	// Create a new Cart
	app.post("/cart", cart.create);

	// Get cart
	app.get("/cart/:id", verifyTokenAndAuthorization, cart.findByUserId);

	// Add To cart
	app.post("/cart/add", verifyTokenAndAuthorization, cart.addToCart);

	// Delete from cart
	app.delete(
		"/cart/delete",
		verifyTokenAndAuthorization,
		cart.deleteProductFromCart
	);

	// Delete all products from cart
	app.delete(
		"/cart/delete/all/:id",
		verifyTokenAndAuthorization,
		cart.deleteAll
	);
};
