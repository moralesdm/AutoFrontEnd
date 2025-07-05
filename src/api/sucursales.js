// src/api/sucursales.js
const API_URL = 'http://localhost:3001/api/sucursales'; // ajusta si es necesario

export const getSucursales = async () => {
  const res = await fetch(API_URL);
  return await res.json();
};

export const getSucursalById = async (id) => {
  const res = await fetch(`${API_URL}/${id}`);
  return await res.json();
};

export const createSucursal = async (data) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return await res.json();
};

export const updateSucursal = async (data, id) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return await res.json();
};
