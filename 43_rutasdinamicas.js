const express = require("express");
const app = express();

const pug = require("pug");

app.use(express.static(__dirname + "/public"));

const perros_array = [
    { raza: "Doberman", texto: "Perro de ataque", imagen: "doberman.jpg" },
    { raza: "Dachshund", texto: "Perro de caza", imagen: "dachshund.jpg" },
    { raza: "Pastor Alemán", texto: "Perro pastoreo", imagen: "pastorAleman.jpg" },
    { raza: "Pug", texto: "Perro compañia", imagen: "pug.jpg" },
    { raza: "San Bernardo", texto: "Perro de rescate", imagen: "sanBernardo.jpg" }
]

app.get("/", (req, res) => {
    //res.send("index.html");
    res.render("index.pug", {
        titulo: "Dachshund_Canela",
        texto: "El dachshund también es conocido como perro salchicha",
        imagen: "perros.jpg",
        perros: perros_array
    })
});

app.get("/perro/:raza", (req, res) => {
    const datosPerro = perros_array.find((perro) => {
        if (req.params.raza == perro.raza) {
            return perro;
        }
    });
    res.render("perro.pug", {
        raza: req.params.raza,
        data: datosPerro
    })
});

app.use((req, res) => {
    res.status(400);
    let error = req.originalUrl;
    res.render("404.pug", { texto: error });
})

app.listen(3000, () => {
    console.log("Servidor en el puerto 3000");
});