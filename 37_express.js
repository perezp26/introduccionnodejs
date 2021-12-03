var express = require("express");
var app = express();

app.use(express.static(__dirname+"/public"));

app.get("/",(req,res)=>{
  res.send("index.html");
});

app.listen(3000,()=>{
  console.log("Servidor en el puerto 3000");
});