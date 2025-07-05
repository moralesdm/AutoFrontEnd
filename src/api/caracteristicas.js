// src/api/caracteristicas.js
const API_URL = 'http://localhost:3001/api/caracteristicas'; // ajusta según tu backend

export const getCaracteristicas = async () => {
  const res = await fetch(API_URL);
  return await res.json();
};

export const getCaracteristicaById = async (id) => {
  const res = await fetch(`${API_URL}/${id}`);
  return await res.json();
};

export const createCaracteristica = async (data) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return await res.json();
};

export const updateCaracteristica = async (data, id) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return await res.json();
};
