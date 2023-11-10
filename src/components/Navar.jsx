import React, { useState } from 'react';
import '../estilos/Navbar.css';
import logo from '../img/Lucifer feliz :D.png';

const Navbar = () => {
  const [mostrarCampos, setMostrarCampos] = useState(false);

  const handleAñadirCartaClick = () => {
    setMostrarCampos(!mostrarCampos);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="/" className="nav-link">Inicio</a>
        </li>
        <li className="nav-item">
          <a href="/" className="nav-link">formulario</a>
        </li>
        <li className="nav-item">
          <a href="https://www.google.com/maps/dir/-31.4240132,-64.1688823/Escuela+ProA,+Agust%C3%ADn+Garz%C3%B3n+1221,+X5000+C%C3%B3rdoba/@-31.4240926,-64.170715,17z/data=!3m1!4b1!4m18!1m8!3m7!1s0x9432bd2de6d4a183:0x21ac09d735dea18c!2sEscuela+ProA!8m2!3d-31.424361!4d-64.168803!15sCg1Fc2N1ZWxhcyBwcm9hkgEGc2Nob29s4AEA!16s%2Fg%2F11ggj69bf4!4m8!1m1!4e1!1m5!1m1!1s0x9432bd2de6d4a183:0x21ac09d735dea18c!2m2!1d-64.168803!2d-31.424361?entry=ttu" className="nav-link">Contacto</a>
        </li>
        <li className="nav-item">
          <a onClick={handleAñadirCartaClick} className="nav-link">Añadir Carta</a>
        </li>
      </ul>

      {mostrarCampos && (
        <div className="campos-de-entrada">
          <input type="text" placeholder="ID" />
          <input type="text" placeholder="Nombre" />
          <input type="file" accept="image/*" />
          <button>Guardar</button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

