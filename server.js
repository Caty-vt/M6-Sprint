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

// app.get("/gastos", async(req, res)=>{
//     await getGastos();
//     res.redirect("/");
// });

// app.put("/gasto", async(req, res)=>{
//     await editGasto();
//     res.redirect("/");
// });

// app.delete("/gasto", async(req, res)=>{
//     await deleteGasto();
//     res.redirect("/");
// });


//llamado servidor
app.listen(3000, ()=>{
    console.log("Servidor corriendo puerto 3000")
});