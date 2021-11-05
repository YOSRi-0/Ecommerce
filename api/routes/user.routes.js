module.exports = (app) => {
	const users = require("../controllers/user.controller.js");

	// Create a new user
	app.post("/users", users.create);

	// Get one user
	app.get("/users/:username", users.findOne);

	// Get all users
	app.get("/users", users.findAll);

	// Update a user with username
	app.put("/users/:username", users.update);

	// Delete a user with username
	app.delete("/users/:username", users.delete);

	// Delete all users
	app.delete("/users/", users.deleteAll);
};
