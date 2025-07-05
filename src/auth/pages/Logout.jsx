// src/auth/pages/Logout.jsx
import { useEffect } from 'react';
import { logout } from '../../api/auth';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      logout(token).finally(() => {
        localStorage.removeItem('token');
        navigate('/login');
      });
    } else {
      navigate('/login');
    }
  }, [navigate]);

  return <p>Cerrando sesión...</p>;
}
