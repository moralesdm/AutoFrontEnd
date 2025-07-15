// src/layout/Sidebar.jsx
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/authContext'; // importa el hook de auth

const links = [
  { to: '/usuarios', label: 'Usuarios' },
  { to: '/vehiculos', label: 'Vehículos' },
  { to: '/categorias', label: 'Categorías' },
  { to: '/sucursales', label: 'Sucursales' },
  { to: '/caracteristicas', label: 'Características' },
  { to: '/reservas', label: 'Reservas' },
  { to: '/pagos', label: 'Pagos' },
  { to: '/facturas', label: 'Facturas' },
];

export default function Sidebar() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');  // redirige a la página de inicio/login
  };

  return (
    <nav style={{
      width: '200px',
      backgroundColor: '#073763',
      color: 'white',
      paddingTop: '1rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem'
    }}>
      {links.map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          style={({ isActive }) => ({
            padding: '0.75rem 1rem',
            color: isActive ? '#ffd700' : 'white',
            textDecoration: 'none',
            fontWeight: isActive ? 'bold' : 'normal',
            backgroundColor: isActive ? '#032b63' : 'transparent',
          })}
        >
          {label}
        </NavLink>
      ))}

      {/* Botón cerrar sesión */}
      <button
        onClick={handleLogout}
        style={{
          marginTop: 'auto',
          padding: '0.75rem 1rem',
          backgroundColor: 'transparent',
          border: 'none',
          color: 'white',
          textAlign: 'left',
          cursor: 'pointer',
          fontWeight: 'normal',
          fontSize: '1rem'
        }}
        onMouseEnter={e => e.currentTarget.style.color = '#ffd700'}
        onMouseLeave={e => e.currentTarget.style.color = 'white'}
      >
        Cerrar sesión
      </button>
    </nav>
  );
}
