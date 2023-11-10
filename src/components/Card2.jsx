

import React, { useContext, useState } from 'react';
import '../estilos/Card2.css';
import { MisDatos } from '../Context/Myprovaider';


function Card2() {
  const{Datos, setDatos} =useContext(MisDatos);
  const [clickCount, setClickCount] = useState(0);

  

  const handleButtonClick = () => {
    setClickCount(clickCount + 1);
  };
const handleDelet = (pokemonId) => {
  /* Cosas*/
  const rAmiroWero = Datos.filter((pok) => pok.id!==pokemonId)
  setDatos(rAmiroWero)
  
}
  
  const Reccorido = Datos.map((ponekon) => (
    <div key={ponekon.id}>
      <h2>{ponekon.nombre}</h2>
      <img
        src={ponekon.img}
        alt={ponekon.description}
        width="300" 
        height="300"
      />
      <div>
       <button onClick={handleButtonClick}>Me gusta </button>
       <button onClick={()=>handleDelet(ponekon.id)} style={{marginLeft: "10px"}}>borrar</button>
       <p>Cuantas personas le gusto: {clickCount}</p>
       </div>
    </div>
  ));

  return (
    <div className="card">
     
     {Reccorido}
    </div>
  );
}

export default Card2;
