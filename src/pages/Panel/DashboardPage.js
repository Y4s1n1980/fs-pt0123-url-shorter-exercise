import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const DashboardPage = () => {
  const history = useHistory();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Lógica para obtener los datos del usuario desde el backend
    fetch('/api/userData')
      .then((response) => response.json())
      .then((data) => {
        //  manejar la respuesta del backend y guardar los datos del usuario en el estado
        setUserData(data);
      })
      .catch((error) => {
        //  manejar los errores que puedan ocurrir durante la solicitud al backend
        console.error(error);
      });
  }, []);

  const handleLogout = () => {
    // Lógica para cerrar sesión en el backend
    fetch('/api/logout')
      .then((response) => {
        //  manejar la respuesta del backend después de cerrar sesión
        console.log('Logged out successfully');
        // Redirigir al inicio de sesión después de cerrar sesión
        history.push('/login');
      })
      .catch((error) => {
        //  manejar los errores que puedan ocurrir durante la solicitud al backend
        console.error(error);
      });
  };

  return (
    <div>
      <h2>Panel de control</h2>
      {userData && (
        <div>
          <p>Nombre: {userData.name}</p>
          <p>Email: {userData.email}</p>
          <p>Rol: {userData.role}</p>
        </div>
      )}
      <button onClick={handleLogout}>Cerrar sesión</button>
    </div>
  );
};

export default DashboardPage;
