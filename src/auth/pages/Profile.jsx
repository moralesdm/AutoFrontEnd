// src/auth/pages/Profile.jsx
import { useEffect, useState } from 'react';
import { getProfile } from '../../api/auth';

export default function Profile() {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    getProfile(token)
      .then(data => setProfile(data))
      .catch(err => setError(err.message));
  }, []);

  return (
    <div>
      <h2>Perfil</h2>
      {error && <p>{error}</p>}
      {profile ? (
        <pre>{JSON.stringify(profile, null, 2)}</pre>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}
