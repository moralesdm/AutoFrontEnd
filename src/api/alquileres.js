const API_BASE = 'http://localhost:3003/api/alquileres';

export const iniciarAlquiler = async (alquilerData) => {
  const res = await fetch(`${API_BASE}/iniciar`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(alquilerData),
  });
  if (!res.ok) throw new Error('Error al iniciar alquiler');
  return res.json();
};

export const finalizarAlquiler = async (id, data) => {
  const res = await fetch(`${API_BASE}/finalizar/${id}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Error al finalizar alquiler');
  return res.json();
};

export const getAlquilerById = async (id) => {
  const res = await fetch(`${API_BASE}/${id}`);
  if (!res.ok) throw new Error('Error al obtener alquiler');
  return res.json();
};
