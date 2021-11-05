const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

const connection = mysql.createConnection({
	host: dbConfig.host,
	user: dbConfig.user,
	password: dbConfig.password,
	database: dbConfig.db,
});

connection.connect((error) => {
	if (error) throw erro;
	console.log("Successfully connected to the database");
});

module.exports = connection;
