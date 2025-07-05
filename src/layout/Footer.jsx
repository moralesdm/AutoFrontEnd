// src/layout/Footer.jsx
import React from 'react';

export default function Footer() {
  return (
    <footer style={{
      height: '40px',
      backgroundColor: '#004aad',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '0.9rem'
    }}>
      &copy; {new Date().getFullYear()} Proyecto Alquiler de Vehículos
    </footer>
  );
}
