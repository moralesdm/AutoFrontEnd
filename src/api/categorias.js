// src/api/categorias.js
const API_URL = 'http://localhost:3001/api/categorias'; // ajusta la URL si es necesario

export const getCategorias = async () => {
  const res = await fetch(API_URL);
  return await res.json();
};

export const getCategoriaById = async (id) => {
  const res = await fetch(`${API_URL}/${id}`);
  return await res.json();
};

export const createCategoria = async (data) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return await res.json();
};

export const updateCategoria = async (data, id) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return await res.json();
};
