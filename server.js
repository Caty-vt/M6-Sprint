import express from "express";
import { registerUser, getAllUsers } from "./roommate.js"

const app = express();

app.use(express.static("public"));

app.get("/", (req, res)=>{
    res.send("Hola Mundo")
});

// get del registro
app.get("/registro",async(req, res)=>{
    await registerUser();
    res.redirect("/");
    // res.send(`Usuario registrado`);
});

// get del usuario
//app.get("/user", (req, res) => {
//    const user = getAllUsers();
//    res.json(user);
//});

app.get("/roommates", async(req, res)=>{
    await nuevoRoommate();
    res.redirect("/");

})




//llamado servidor
app.listen(3000, ()=>{
    console.log("Servidor corriendo puerto 3000")
});