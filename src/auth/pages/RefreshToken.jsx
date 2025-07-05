// src/auth/pages/RefreshToken.jsx
import { useEffect, useState } from 'react';
import { refreshToken } from '../../api/auth';

export default function RefreshToken() {
  const [msg, setMsg] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setMsg('No hay token actual');
      return;
    }
    refreshToken(token)
      .then(({ token: newToken }) => {
        localStorage.setItem('token', newToken);
        setMsg('Token actualizado');
      })
      .catch(err => setMsg(err.message));
  }, []);

  return <p>{msg}</p>;
}