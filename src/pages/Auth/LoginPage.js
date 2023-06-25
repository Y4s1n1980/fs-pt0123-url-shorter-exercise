import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const LoginPage = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Lógica para enviar los datos de inicio de sesión al backend
    const userData = {
      email,
      password,
    };

    // Aquí puedes hacer la solicitud al backend enviando los datos de inicio de sesión
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
        // Aquí puedes manejar la respuesta del backend después de iniciar sesión
        console.log(data);
        // Por ejemplo, puedes redirigir al panel si el inicio de sesión es exitoso
        if (data.success) {
          history.push('/panel');
        }
      })
      .catch((error) => {
        // manejar los errores que puedan ocurrir durante la solicitud al backend
        console.error(error);
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleLogin}>Iniciar sesión</button>
      </form>
    </div>
  );
};

export default LoginPage;
