import { v4 as uuid4 } from "uuid";
import axios from "axios";
import petro from "fs"
import { log } from "console";


const path = "files/roommate.txt";
const pathjson = "files/roommate.json";

// const petro = require("fs");


let usuarios = [];
// console.log("hola")
//creamos la llamada a la api

// function nuevoRoommate(){
    const registerUser = async () =>{
        const response = await axios.get('https://randomuser.me/api/');
        const user = response.data.results[0];
        console.log(user);
        
        //la forma de llamar los datos que se necesitan de los usuarios
        let newUser = {
            firstName: user.name.first,
            lastName: user.name.last,
            id: uuid4().slice(0, 6), //esto va a limita el numero de 6 digitos del id
        };
        console.log(newUser)
        usuarios.push(newUser);
        console.log(usuarios)
        
        petro.appendFileSync(path, newUser.toString())
        petro.writeFileSync(pathjson, JSON.stringify(usuarios));
    
        let result = petro.readFileSync(path, { enconding:"utf-8"});
    
        const fromFile= JSON.parse(result);
    
    
        console.log(fromFile);
    
     
    };
// };
export {registerUser}; 
