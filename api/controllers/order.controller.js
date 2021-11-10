const Order = require("../models/order.model");

// Create and save new order
exports.create = (req, res) => {
	// Validate request
	if (!req.body) {
		res.status(400).json({ message: "content can not be empty" });
	}

	// Create a order
	const order = new Order({
		username: req.body.username,
		address: req.body.address,
		products: req.body.products,
		totalPrice: Number(req.body.totalPrice),
		amount: Number(req.body.amount),
		status: req.body.status,
	});

	// Save order to db
	Order.create(order, (err, data) => {
		if (err) {
			res.status(500).json({
				message:
					err.message ||
					"Error occured while creating a new order",
			});
		} else {
			res.json(data);
		}
	});
};

const getOrdersByUsername = (username, res) => {
	// get orders from db
	Order.findByUsername(username, (err, data) => {
		if (err) {
			if (err.kind === "not_found") {
				res.status(404).json({
					message: `not found orders of user ${username}`,
				});
			} else {
				res.status(500).json({
					message:
						err.message ||
						`Error retrieving orders of user ${username}`,
				});
			}
		} else {
			res.json(data);
		}
	});
};

const getAllOrders = (res) => {
	// get orders from db
	Order.findAll((err, data) => {
		if (err) {
			if (err.kind === "not_found") {
				res.status(404).json({
					message: `not found orders `,
				});
			} else {
				res.status(500).json({
					message:
						err.message ||
						`Error retrieving orders `,
				});
			}
		} else {
			res.json(data);
		}
	});
};

exports.getOrders = (req, res) => {
	if (req.query.username) {
		getOrdersByUsername(req.query.username, res);
	} else {
		// get orders
		getAllOrders(res);
	}
};
