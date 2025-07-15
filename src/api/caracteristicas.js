const API_URL = import.meta.env.VITE_API_GATEWAY || 'http://localhost';

API_BASE = `${API_URL}/api/vehiculos/caracteristicas`;

export const getCaracteristicas = async () => {
  const res = await fetch(`${API_BASE}`);
  if (!res.ok) throw new Error('Error al obtener características');
  return res.json();
};

export const getCaracteristicaById = async (id) => {
  const res = await fetch(`${API_BASE}/${id}`);
  if (!res.ok) throw new Error('Error al obtener característica');
  return res.json();
};

export const createCaracteristica = async (caracteristicaData) => {
  const res = await fetch(`${API_BASE}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(caracteristicaData),
  });
  if (!res.ok) throw new Error('Error al crear característica');
  return res.json();
};

export const updateCaracteristica = async (id, caracteristicaData) => {
  const res = await fetch(`${API_BASE}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(caracteristicaData),
  });
  if (!res.ok) throw new Error('Error al actualizar característica');
  return res.json();
};

export const deleteCaracteristica = async (id) => {
  const res = await fetch(`${API_BASE}/${id}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error('Error al eliminar característica');
  return res.json();
};
