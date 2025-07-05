// src/api/usuarios.js
const API_URL = 'http://localhost:3001/api/usuarios'; // ajusta la ruta si es necesario

export const getUsuarios = async () => {
  const res = await fetch(API_URL);
  return await res.json();
};

export const getUsuarioById = async (id) => {
  const res = await fetch(`${API_URL}/${id}`);
  return await res.json();
};

export const createUsuario = async (data) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return await res.json();
};

export const updateUsuario = async (data, id) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return await res.json();
};
