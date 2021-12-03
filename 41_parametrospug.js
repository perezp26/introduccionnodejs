const express = require("express");
const app = express();

const pug = require("pug");

app.use(express.static(__dirname + "/public"));

const perros_array = [
    { raza: "Domerman", texto: "Perro de ataque", imagen: "domerman.jpg" },
    { raza: "Dachshund", texto: "Perro de caza", imagen: "dachshund.jpg" },
    { raza: "Pastor Alemán", texto: "Perro pastoreo", imagen: "pastoraleman.jpg" },
    { raza: "Pug", texto: "Perro compañia", imagen: "pug.jpg" },
    { raza: "San Bernardo", texto: "Perro de rescate", imagen: "sanbernardo.jpg" }
]

app.get("/", (req, res) => {
    //res.send("index.html");
    res.render("index.pug", {
        titulo: "Dachshund_Canela",
        texto: "El dachshund también es conocido como perro salchicha",
        imagen: "dachshund.jpg",
        perros: perros_array
    })
});

app.listen(3000, () => {
    console.log("Servidor en el puerto 3000");
});