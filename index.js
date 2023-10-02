const express = require("express");
const cors = require("cors");
const {colores} = require("./db");

console.log(colores);

let puerto = process.env.PORT || 3000;

const servidor = express();

servidor.use(cors());

servidor.get("/", async (peticion,respuesta) => {
    let listaColores = await colores();
    respuesta.json(listaColores[Math.floor(Math.random() * listaColores.length)]);
});

servidor.use((peticon, respuesta) => {
    respuesta.status(404);
    respuesta.send("no found :( ");
});


servidor.listen(puerto);