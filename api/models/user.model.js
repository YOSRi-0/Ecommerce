const sql = require("./db.js");

const User = function (user) {
	this.username = user.username;
	this.email = user.email;
	this.password = user.password;
	this.isadmin = user.isadmin;
	this.createdat = user.createdat;
};

User.create = (newUser, result) => {
	sql.query("INSERT INTO users SET ?", newUser, (err, res) => {
		if (err) {
			console.log("error: ", err);
			result(err, null);
			return;
		}

		console.log("created user", { ...newUser });
		result(null, { ...newUser });
	});
};

User.findByUsername = (username, result) => {
	sql.query(
		"SELECT * FROM users WHERE username = ? ",
		username,
		(err, res) => {
			if (err) {
				console.log("error", err);
				result(err, null);
				return;
			}

			if (res.length) {
				console.log("found user", res[0]);
				result(null, res[0]);
				return;
			}

			result({ kind: "not_found" }, null);
		}
	);
};

User.getAll = (result) => {
	sql.query("SELECT * FROM users", (err, res) => {
		if (err) {
			console.log("error: ", err);
			result(err, null);
			return;
		}

		console.log("users: ", res);
		result(null, res);
	});
};

User.updateByUsername = (username, user, result) => {
	sql.query(
		"UPDATE users SET email = ? , password = ? WHERE username = ?",
		[user.email, user.password, username],
		(err, res) => {
			if (err) {
				console.log("error: ", err);
				result(null, err);
				return;
			}

			if (res.affectedRows == 0) {
				result({ kind: "not_found" }, null);
				return;
			}

			console.log("updated user: ", { username, ...user });
			result(null, { username, ...user });
		}
	);
};

User.remove = (username, result) => {
	sql.query(
		"DELETE FROM users WHERE username = ? ",
		username,
		(err, res) => {
			if (err) {
				console.log("error: ", err);
				result(err, null);
				return;
			}

			if (res.affectedRows == 0) {
				result({ kind: "not_found" }, null);
				return;
			}

			console.log("deleted user with username", username);
			result(null, res);
		}
	);
};

User.removeAll = (result) => {
	sql.query("DELETE FROM users", (err, res) => {
		if (err) {
			console.log("error: ", err);
			result(err, null);
			return;
		}

		console.log(`deleted ${res.affectedRows} users`);
		return null, res;
	});
};

module.exports = User;
