const API_URL = import.meta.env.VITE_API_GATEWAY || 'http://localhost';

const API_BASE = `${API_URL}/api/vehiculos/sucursales`;

export const getSucursales = async () => {
  const res = await fetch(`${API_BASE}`);
  if (!res.ok) throw new Error('Error al obtener sucursales');
  return res.json();
};

export const getSucursalById = async (id) => {
  const res = await fetch(`${API_BASE}/${id}`);
  if (!res.ok) throw new Error('Error al obtener sucursal');
  return res.json();
};

export const createSucursal = async (sucursalData) => {
  const res = await fetch(`${API_BASE}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(sucursalData),
  });
  if (!res.ok) throw new Error('Error al crear sucursal');
  return res.json();
};

export const updateSucursal = async (id, sucursalData) => {
  const res = await fetch(`${API_BASE}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(sucursalData),
  });
  if (!res.ok) throw new Error('Error al actualizar sucursal');
  return res.json();
};

export const deleteSucursal = async (id) => {
  const res = await fetch(`${API_BASE}/${id}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error('Error al eliminar sucursal');
  return res.json();
};
