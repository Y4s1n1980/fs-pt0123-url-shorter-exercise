import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const RegisterPage = () => {
  const history = useHistory();
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

    // Aquí puedes hacer la solicitud al backend enviando los datos de registro
    // Ejemplo con fetch:
    fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Aquí puedes manejar la respuesta del backend después de registrar al usuario
        console.log(data);
        // Por ejemplo, puedes redirigir al panel si el registro es exitoso
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
      <h2>Registro</h2>
      <form>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="text" placeholder="Nombre de usuario" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleRegister}>Registrarse</button>
      </form>
    </div>
  );
};

export default RegisterPage;

