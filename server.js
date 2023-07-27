import express from "express";
import { registerUser } from "./roommate.js";
const app = express();

app.use(express.static("public"));

app.get("/", (req, res)=>{
    res.send("index");
});

app.get("/registro",async(req, res)=>{
    await registerUser();
    res.send(`Usuario registrado`);
});
//llamado servidor
app.listen(3000, ()=>{
    console.log("Servidor corriendo puerto 3000")
});