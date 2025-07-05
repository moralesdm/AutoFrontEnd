// src/api/vehiculos.js
const API_URL = 'http://localhost:3001/api/vehiculos'; // cambia la URL si es diferente

export const getVehiculos = async () => {
  const res = await fetch(API_URL);
  return await res.json();
};

export const getVehiculoById = async (id) => {
  const res = await fetch(`${API_URL}/${id}`);
  return await res.json();
};

export const createVehiculo = async (data) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return await res.json();
};

export const updateVehiculo = async (data, id) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return await res.json();
};
