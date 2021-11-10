module.exports = (app) => {
	const cart = require("../controllers/cart.controller.js");
	const { verifyTokenAndAuthorization } = require("./verifyToken");

	// Add To cart
	app.post("/cart/add", verifyTokenAndAuthorization, cart.addToCart);

	// Create a new Cart
	app.post("/cart/:id", verifyTokenAndAuthorization, cart.create);

	// Get cart
	app.get("/cart/:id", verifyTokenAndAuthorization, cart.findByUserId);

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
