import React, { useState } from 'react';

const Register = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Lógica para enviar los datos de registro al backend
  
    const userData = {
      email,
      username,
      password,
    };

    //  hacer la solicitud al backend enviando los datos de registro
  
    fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        //  manejar la respuesta del backend después de registrarse
        console.log(data);

      })
      .catch((error) => {
        // manejar los errores que puedan ocurrir durante la solicitud al backend
        console.error(error);
      });
  };

  const registerStyle = {
    margin: '16px',
    padding: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    maxWidth: '400px',
  };

  const inputStyle = {
    marginBottom: '8px',
    padding: '8px',
    width: '100%',
  };

  const buttonStyle = {
    marginBottom: '8px',
    padding: '8px 16px',
    background: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  return (
    <div style={registerStyle}>
      <h2>Registro</h2>
      <form>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
        <input type="text" placeholder="Nombre de usuario" value={username} onChange={(e) => setUsername(e.target.value)} style={inputStyle} />
        <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} style={inputStyle} />
        <button onClick={handleRegister} style={buttonStyle}>Registrarse</button>
      </form>
    </div>
  );
};

export default Register;

