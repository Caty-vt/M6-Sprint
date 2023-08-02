import express from "express";
import { eliminarGasto, registerGasto, registerUser } from "./roommate.js";
import fs from "fs"
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res)=>{
    res.send("index");
});
app.get('/roommates', (req, res) => {

        const roommates = JSON.parse(fs.readFileSync('files/roommate.json', { enconding:"utf-8"}));
        return res.json({ roommates });
});
app.get('/gastos', (req, res) => {

        const gastos = JSON.parse(fs.readFileSync('files/gasto.json', { enconding:"utf-8"}));
        return res.json({ gastos });
});
app.post("/roommate", async (req, res) => {
    await registerUser();
    
});
app.post("/gasto" , async(req,res)=>{
     let gastonew = req.body;
    await registerGasto(gastonew);
    res.send('Datos recibidos correctamente.');
});    
app.delete("/gasto",(req,res)=>{
    let gastoid = req.query;
    eliminarGasto(gastoid);
    res.status(200).json({ mensaje: "Gasto eliminado exitosamente." });
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