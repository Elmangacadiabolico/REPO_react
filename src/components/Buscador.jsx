import React, { useContext, useState } from 'react';
import { MisDatos } from '../Context/Myprovaider';

function Buscador() {
    const [NombreDatos, setBuscarNombresDatos] = useState("");
    const { Datos } = useContext(MisDatos);

    const handleNombre = (e) => {
        setBuscarNombresDatos(e.target.value);
        const shared = NombreDatos.fill
    }

    const validarNombre = () => {
        return /^[a-zA-Z]+$/.test(NombreDatos);
    }

    return (
        <div>
            <label>Insertar nombre del pokemon</label>
            <input type="text" value={NombreDatos} onChange={handleNombre} />
        </div>
    );
}

export default Buscador;
