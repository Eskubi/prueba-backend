const {MongoClient, ObjectId} = require("mongodb");

const urlConexion = process.env.MONGO_URL;

function conectar(){
    return MongoClient.connect(urlConexion);
}

function colores(){
    return new Promise (async callback => {
        let conexion = await conectar();
        let coleccion = conexion.db("colores").collection("colores");

        callback(await coleccion.find({}).toArray());
    })
}

module.exports = {colores};