const dotenv = require("dotenv");
dotenv.config();

module.exports = {
	host: "localhost",
	user: process.env.DBUSER,
	password: process.env.DBPASSWORD,
	db: "store",
};
