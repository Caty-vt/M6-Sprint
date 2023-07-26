import express from "express";

const app = express();

app.use(express.static("public"));

app.get("/", (req, res)=>{
    res.send("Hola Mundo")
});

//llamado servidor
app.listen(3000, ()=>{
    console.log("Servidor corriendo puerto 3000")
});