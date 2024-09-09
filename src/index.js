const connection = require("./db.js")
const express = require("express") // importando biblioteca
const steam = express() // Instanciamos o objeto para usarmos a biblioteca

steam.use(express.json())

steam.get("/", (req, res) => {
    res.send("Pagina inicial")
})

steam.get("/jogos/:id", (req, res) => { // buscar jogo por id
    id = req.params.id
    res.send("Você buscou o jogo de id " + id)
})

app.get("/users", async (req, res) => {
	try {
		let result = await connection.query("SELECT * FROM users")
		res.status(200).send(result.json());
	} catch(err) {
		res.status(500).send(err.json())
	}
});

steam.listen(3000, () => {
	console.log("Steam 2.0 rodando na porta 3000.");
});