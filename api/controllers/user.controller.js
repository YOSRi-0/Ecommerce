const User = require("../models/user.model.js");

// Create and save new user
exports.create = (req, res) => {
	// Validate request
	if ((!req.body)) {
		res.status(400).send({
			message: "Content can not be empty",
		});
	}

	// Create a user
	const user = new User({
		username: req.body.username,
		email: req.body.email,
		password: req.body.password,
		isadmin: Number(req.body.isadmin) || 0,
		createdat: new Date(),
	});

	// Save user in the db
	User.create(user, (err, data) => {
		if (err) {
			res.status(500).send({
				message:
					err.message ||
					"some error occurred whime creating the user",
			});
		} else {
			res.send(data);
		}
	});
};

// Get all users
exports.findAll = (req, res) => {
	User.getAll((err, data) => {
		if (err)
			res.status(500).send({
				message:
					err.message ||
					"some error occurred whime creating the user",
			});
		else res.send(data);
	});
};

// Get one user with username
exports.findOne = (req, res) => {
	const username = req.params.username;
	User.findByUsername(String(username), (err, data) => {
		if (err) {
			if (err.kind === "not_found") {
				res.status(404).send({
					message: `Not found User with username ${username}`,
				});
			} else
				res.status(500).send({
					message:
						"Error retrieving user with username " +
						username,
				});
		} else res.send(data);
	});
};

// Update a user by username
exports.update = (req, res) => {
	if (!req.body) {
		res.status(400).send({
			message: "Content can not be empty",
		});
	}

	const username = req.params.username;
	const newUser = req.body;
	User.updateByUsername(username, newUser, (err, data) => {
		if (err) {
			if (err.kind === "not_found") {
				res.status(404).send({
					message: `Not found User with username ${username}`,
				});
			} else {
				res.status(500).send({
					message:
						"Error updating User with username " +
						username,
				});
			}
		} else {
			res.send(data);
		}
	});
};

// Delete a user by username
exports.delete = (req, res) => {
	const username = req.params.username;
	User.remove(username, (err, data) => {
		if (err) {
			if (err.kind === "not_found") {
				res.status(400).send({
					message: `Not found user with username ${username}`,
				});
			} else {
				res.status(500).send({
					message:
						"Could not delete user with username " +
						username,
				});
			}
		} else {
			res.send({ message: `User was deleted successfully` });
		}
	});
};

// Delete all users
exports.deleteAll = (req, res) => {
	User.removeAll((err, data) => {
		if (err)
			res.status(500).send({
				message:
					err.message ||
					"Some error occured while remove all users",
			});
		else
			res.send({
				message: `All users were deleted successfully`,
			});
	});
};
