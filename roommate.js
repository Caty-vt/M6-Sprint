import { v4 as uuid4 } from "uuid";
import axios from "axios";

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

    // aqui empujamos o creamos al nuevo usuario
    usuarios.push(newUser);
};
