import express from "express";

const PORT = 4400;

const app = express();

const home = (req, res) => res.send("Hello");

const login = (req, res) => res.send("Hi");

const about = (req, res) => res.send("About");

const contact = (req, res) => res.send("Contact");

app.get("/", home);
app.get("/login", login);
app.get("/about", about);
app.get("/contact", contact);

const handleListening = () => console.log("Server is Listening");

app.listen(PORT, handleListening);
