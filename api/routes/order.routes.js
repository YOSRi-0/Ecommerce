module.exports = (app) => {
	const order = require("../controllers/order.controller");
	const {
		verifyTokenAndAuthorization,
		verifyTokenAndAdmin,
	} = require("./verifyToken");

	app.post("/orders", verifyTokenAndAuthorization, order.create);

	app.get("/orders", verifyTokenAndAdmin, order.getOrders);

	app.get("/orders/all", verifyTokenAndAdmin, order.getOrders);
};
