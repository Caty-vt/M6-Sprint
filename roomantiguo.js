import { v4 as uuid4 } from "uuid";
import axios from "axios";
//import archivo from "fs"

//const path = "./files/roommate.txt";
//const petro = require("fs");

let usuarios = [];

//creamos la llamada a la api
const registerUser = async () =>{
    const response = await axios.get('https://randomuser.me/api/');
    const user = response.data.results[0];
    console.log(user);

    //la forma de llamar los datos que se necesitan de los usuarios
    const newUser = {
        firstName: user.name.first,
        lastName: user.name.last,
        id: uuidv4().slice(0, 6), //esto va a limita el numero de 6 digitos del id
    };
    petro.appendFileSync(path, newUser)
    console.log(petro.readFileSync(path).toString());
    // aqui empujamos o creamos al nuevo usuario
    usuarios.push(newUser);
};
//hacemos el registro de los usuarios al server
const getAllUsers = () => {
    //imprime los usuarios con un fmrato legible
    usuarios.forEach(user => {
        console.log(chalk.blue.bgWhite(`Nombre: ${user.firstName} - Apellido: ${user.lastName} - ID: ${user.id} - Timestamp: ${user.timestamp}`));
    });

    //par que se copie y que no se afecte la copia original
    return _.cloneDeep(usuarios);
};

//se exportan estas dos funciones 
export { registerUser, getAllUsers};

// crear funcion: nuevoRoommate() pegar roonmate en el index

//json con fs.writefileSync