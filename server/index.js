const express = require("express");
const app = express();
const mysql = require("mysql");

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "123456",
    database: "funcionarios_bd",
});

app.post("/create", (req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    const country = req.body.country;
    const position = req.body.position;
    const wage = req.body.wage;

    db.query(
        "INSERT INTO funcionarios (name, age, country, position, wage) VALUES (?, ?, ?, ?, ?)",
        [name, age, country, position, wage],
        (err, result) => {
            if (err) {
                console.log("Erro ao enviar valores para a tabela: ", err);
            } else {
                res.send("Valores inseridos na tabela");
            }
        }
    );
});

app.listen(3000, () => {
    console.log("Servidor rodando.");
});
