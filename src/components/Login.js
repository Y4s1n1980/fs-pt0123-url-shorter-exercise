import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Lógica para enviar los datos de inicio de sesión al backend
    //  puedes utilizar una función de autenticación del backend o hacer una solicitud HTTP utilizando fetch o axios
    const userData = {
      email,
      password,
    };

    //  hacer la solicitud al backend enviando los datos de inicio de sesión
    // Ejemplo con fetch:
    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        //  manejar la respuesta del backend después de iniciar sesión
        console.log(data);
        // puedes guardar el token de acceso en el estado o en el almacenamiento local del navegador
      })
      .catch((error) => {
        //  manejar los errores que puedan ocurrir durante la solicitud al backend
        console.error(error);
      });
  };

  const inputStyle = {
    marginBottom: '10px',
    padding: '8px',
    fontSize: '14px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    width: '100%',
  };

  const buttonStyle = {
    padding: '8px 16px',
    fontSize: '14px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#4caf50',
    color: '#fff',
    cursor: 'pointer',
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />
        <button onClick={handleLogin} style={buttonStyle}>
          Iniciar sesión
        </button>
      </form>
    </div>
  );
};

export default Login;

