const sql = require("./db");

const Order = function (order) {
	this.userId = order.userId;
	this.address = order.address;
	this.productId = order.productId;
	this.totalPrice = order.totalPrice;
	this.amount = order.amount;
	this.status = order.status;
};

Order.create = (order, result) => {
	const userId = order.userId;
	const address = order.address;
	const status = order.status;
	const productId = order.productId;
	const totalPrice = order.totalPrice;
	const amount = order.amount;
	sql.query(
		"INSERT INTO orders SET id_user = ?, address = ?, status_order = ?, id_product = ?, amount = ?, total_price = ?",
		[userId, address, status, productId, amount, totalPrice],
		(err, res) => {
			if (err) {
				console.log("Error: ", err);
				result(err, null);
				return;
			}

			console.log("created order for user ", userId);
			result(err, {
				userId,
				address,
				productId,
				totalPrice,
				amount,
			});
		}
	);
};

Order.findByUsername = (username, result) => {
	sql.query(
		"SELECT * FROM orders WHERE username = ?",
		username,
		(err, res) => {
			if (err) {
				console.log("Error: ", err);
				result(err, null);
				return;
			}

			if (res.length) {
				console.log("found orders for user ", username);
				result(null, res);
				return;
			}

			result({ kind: "not_found" }, null);
		}
	);
};

Order.findAll = (result) => {
	sql.query("SELECT * FROM orders", (err, res) => {
		if (err) {
			console.log("Error: ", err);
			result(err, null);
			return;
		}

		if (res.length) {
			console.log("found orders ");
			result(null, res);
			return;
		}

		result({ kind: "not_found" }, null);
	});
};

module.exports = Order;
