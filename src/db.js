const mysql = require("mysql2");
const connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	database: "2.steam",
	password: "FUI-6144"
});

connection.connect((err) => {
	if(err) {
		console.log("DEU ERRO! " + err.stack);
		return;
	}
	console.log("CONECTOU! " + connection.threadId);
});

module.exports = { connection };