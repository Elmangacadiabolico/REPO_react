import React from 'react';

function Buscador ()  {

    const [NombreDate, setBuscar] = useState("")
const handleNombre =(e) => {
    setBuscar(e.target.valvue)
}
/*
const validarNombre =() =>{
    return/[a-zA-zA]+$/.test(nombre):
}
*/
    return (
        <div>
            <label > Insegrar nombre del pokemon</label>
            <input type="text" valvue={NombreDate} onChange={handleNombre}/>
        </div>
    );
}

export default Buscador;
