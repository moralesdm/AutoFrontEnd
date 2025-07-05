// src/layout/Header.jsx
import React from 'react';

export default function Header() {
  return (
    <header style={{
      height: '60px',
      backgroundColor: '#004aad',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      padding: '0 1rem',
      fontWeight: 'bold',
      fontSize: '1.5rem',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      Alquiler Vehículos - Dashboard
    </header>
  );
}
