// src/api/reservas.js
const API_URL = 'http://localhost:3001/api/reservas'; // Ajustar si es necesario

export const getReservas = async () => {
  const res = await fetch(API_URL);
  return await res.json();
};

export const getReservaById = async (id) => {
  const res = await fetch(`${API_URL}/${id}`);
  return await res.json();
};

export const createReserva = async (data) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return await res.json();
};

export const updateReserva = async (data, id) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return await res.json();
};
