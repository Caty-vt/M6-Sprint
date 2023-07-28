import petro from "fs"
const jsonRoommates = async () =>{

    let registros = petro.writeFileSync(pathjson, JSON.stringify(usuarios));
    // console.log(registros);
    return registros
};
 
export {jsonRoommates};
