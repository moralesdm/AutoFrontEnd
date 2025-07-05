// src/api/auth.js

export const loginUser = async (email, password) => {
  const response = await fetch('http://13.223.20.3/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Error en inicio de sesión');
  }

  return await response.json(); // { token: '...' }
};

// src/api/auth.js

export const registerUser = async (userData) => {
  const response = await fetch('http://13.223.20.3/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Error al registrar usuario');
  }

  return await response.json(); // por si quieres mostrar algo
};

// src/api/auth.js
const API_BASE = 'http://13.223.20.3/auth';


export const forgotPassword = async (email) => {
  const res = await fetch(`${API_BASE}/forgot-password`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  });

  if (!res.ok) throw new Error((await res.json()).message || 'Error al enviar correo');
  return res.json();
};

export const resetPassword = async (token, newPassword) => {
  const res = await fetch(`${API_BASE}/reset-password`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ token, newPassword }),
  });

  if (!res.ok) throw new Error((await res.json()).message || 'Error al resetear');
  return res.json();
};

export const refreshToken = async (token) => {
  const res = await fetch(`${API_BASE}/refresh-token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ token }),
  });

  if (!res.ok) throw new Error((await res.json()).message || 'Error al refrescar token');
  return res.json(); // { token }
};

export const logout = async (token) => {
  const res = await fetch(`${API_BASE}/logout`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ token }),
  });

  if (!res.ok) throw new Error((await res.json()).message || 'Error al cerrar sesión');
  return res.json();
};

export const getProfile = async (token) => {
  const res = await fetch(`${API_BASE}/profile`, {
    method: 'GET',
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!res.ok) throw new Error((await res.json()).message || 'Error al obtener perfil');
  return res.json(); // { nombre, email, etc. }
};


