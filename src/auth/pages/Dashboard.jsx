// src/auth/pages/Dashboard.jsx
import { useEffect, useState } from 'react';
import { getProfile } from '../../api/auth';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return;

    getProfile(token)
      .then(data => setUser(data))
      .catch(err => setMensaje('Error al cargar perfil'));
  }, []);

  return (
    <div>
      <h1>Bienvenido al Dashboard</h1>
      {mensaje && <p>{mensaje}</p>}

      {user ? (
        <div style={{ marginTop: '1rem' }}>
          <p><strong>Nombre:</strong> {user.nombre} {user.apellido}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Ciudad:</strong> {user.ciudad}</p>
          <p><strong>País:</strong> {user.pais}</p>
        </div>
      ) : (
        <p>Cargando usuario...</p>
      )}
    </div>
  );
}
