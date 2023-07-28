import express from "express";
import { registerUser } from "./roommate.js";
import fs from "fs"
const app = express();

app.use(express.static("public"));

app.get("/", (req, res)=>{
    res.send("index");
});
app.get('/roommates', (req, res) => {

        const roommates = JSON.parse(fs.readFileSync('files/roommate.json', { enconding:"utf-8"}));
        return res.json({ roommates });
});
      
app.get("/registro",async(req, res)=>{
    await registerUser();
    res.redirect("/");
    // res.send(`Usuario registrado`);
});
//llamado servidor
app.listen(3000, ()=>{
    console.log("Servidor corriendo puerto 3000")
});