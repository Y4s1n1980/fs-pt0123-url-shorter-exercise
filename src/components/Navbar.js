import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navStyle = {
    background: '#f1f1f1',
    padding: '16px',
  };

  const ulStyle = {
    listStyleType: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const liStyle = {
    margin: '0 8px',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#333',
    fontWeight: 'bold',
    fontSize: '14px',
  };

  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
        <li style={liStyle}><Link to="/" style={linkStyle}>Inicio</Link></li>
        <li style={liStyle}><Link to="/panel" style={linkStyle}>Panel</Link></li>
        <li style={liStyle}><Link to="/login" style={linkStyle}>Iniciar sesión</Link></li>
        <li style={liStyle}><Link to="/register" style={linkStyle}>Registrarse</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

