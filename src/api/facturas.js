// src/api/facturas.js
const API_URL = 'http://localhost:3001/api/facturas'; // ajusta si cambia

export const getFacturas = async () => {
  const res = await fetch(API_URL);
  return await res.json();
};

export const getFacturaById = async (id) => {
  const res = await fetch(`${API_URL}/${id}`);
  return await res.json();
};
