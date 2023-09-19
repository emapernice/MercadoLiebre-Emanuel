const express = require('express');
const path = require("path");
const app = express();
const port = process.env.PORT || 3030;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/home.html"));
});

app.get("/register", (req, res) => {
    res.sendFile(__dirname + "/views/register.html");
});

app.get("/login", (req, res) => {
    res.sendFile(__dirname + "/views/login.html");
});

app.get("/productos", (req, res) => {
    res.send("Productos");
});

app.get("/acerca_de", (req, res) => {
    res.send("Acerca de..");
});

app.get("/contactos", (req, res) => {
    res.send("Contactos");
});

app.listen(port, () => {
console.log(`Escuchando el puerto http://localhost:${port}`);
});