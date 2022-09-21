const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "123456",
    database: "funcionarios_bd",
});

//pega as informações do front end e envia para o bd
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

//pega as informações da tabela dentro do bd
app.get("/employees", (req, res) => {
    db.query("SELECT * FROM funcionarios", (err, result) => {
        if (err) {
            console.log("Erro ao puxar dados da tabela: ", err);
        } else {
            res.send(result);
        }
    });
});

app.listen(3000, () => {
    console.log("Servidor rodando.");
});
