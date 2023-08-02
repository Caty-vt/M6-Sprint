import { v4 as uuid4 } from "uuid";
import axios from "axios";
import petro from "fs"
// recuperar JSON agregarlo a un array
let pathRoomate = "files/roommate.json";
let pathGasto = "files/gasto.json";

// let usuarios =[]
let usuarios = JSON.parse(petro.readFileSync(pathRoomate));
let arregloGastos = JSON.parse(petro.readFileSync(pathGasto));
console.log(arregloGastos);
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
            recibe :0
        };
        // Agregar Usuarios al arreglo
        usuarios.push(newUser);
        // Agregar arreglo al archivo JSON
        petro.writeFileSync(pathRoomate, JSON.stringify(usuarios,null,2));
    };

    const registerGasto = async (gasto) =>{
        let objetoGasto = {
            id: uuid4().slice(0, 6),
            roommate: gasto.roommate,
            descripcion: gasto.descripcion,
            monto: gasto.monto,
        };
        arregloGastos.push(objetoGasto);
        petro.writeFileSync("files/gasto.json", JSON.stringify(arregloGastos, null, 2));
        repartirCuentas();
    };
    const repartirCuentas = async()=>{
     usuarios.forEach(romate => {
        romate.recibe =0;
        romate.debe =0;
     });
     arregloGastos.forEach(gasto => {
        let cuota = gasto.monto / usuarios.length;
        
        usuarios.forEach(romatepagar => {
           romatepagar.debe += cuota;
           if (romatepagar.firstName == gasto.roommate) {
               romatepagar.recibe = romatepagar.recibe +(gasto.monto - cuota);
           };
         });
    });
    petro.writeFileSync(pathRoomate, JSON.stringify(usuarios,null,2));
    };
    const eliminarGasto = async(gastoid)=>{
        let gastos = arregloGastos;
        console.log(gastos);
        let gastoindice = gastos.findIndex((gasto) => gasto.id === gastoid);
        gastos.splice(gastoindice,1);
        petro.writeFileSync(pathGasto, JSON.stringify(gastos,null,2));
        registerGasto();
    }
export {registerUser, registerGasto,eliminarGasto}; 
