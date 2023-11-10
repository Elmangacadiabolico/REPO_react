import React, { useState } from 'react';

function Boton() {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>Usas</button>
      <p>Lo usaste  {clickCount} veces</p>
    </div>
  );
}

export default Boton;
