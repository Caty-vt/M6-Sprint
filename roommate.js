import { v4 as uuid4 } from "uuid";
import axios from "axios";
import petro from "fs"
import { log } from "console";
// recuperar JSON agregarlo a un array
let pathjson = "files/roommate.json";

// let usuarios =[]
let usuarios = JSON.parse(petro.readFileSync(pathjson));
//creamos la llamada a la api

// function nuevoRoommate(){
    const registerUser = async () =>{
        const response = await axios.get('https://randomuser.me/api/');
        const user = response.data.results[0];
        // console.log(user);
        
        //la forma de llamar los datos que se necesitan de los usuarios
        let newUser = {
            firstName: user.name.first,
            lastName: user.name.last,
            id: uuid4().slice(0, 6), //esto va a limita el numero de 6 digitos del id
            debe: 0,
            recibe: 0,
        };
        // Agregar Usuarios al arreglo
        usuarios.push(newUser);
        // Agregar arreglo al archivo JSON
        petro.writeFileSync(pathjson, JSON.stringify(usuarios));
    
    // // leer archivo Json por consola
    //     let result = petro.readFileSync(path, { enconding:"utf-8"});
    //     console.log(result.toString());
     
    };
// };
export {registerUser}; 
