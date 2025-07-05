// src/api/pagos.js
const API_URL = 'http://localhost:3001/api/pagos'; // Ajusta si tu ruta es diferente

export const getPagos = async () => {
  const res = await fetch(API_URL);
  return await res.json();
};

export const getPagoById = async (id) => {
  const res = await fetch(`${API_URL}/${id}`);
  return await res.json();
};
