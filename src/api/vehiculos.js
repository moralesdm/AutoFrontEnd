const API_URL = import.meta.env.VITE_API_GATEWAY || 'http://localhost';

const API_BASE = `${API_URL}/api/vehiculos`;

export const getVehiculos = async () => {
  const res = await fetch(`${API_BASE}`);
  if (!res.ok) throw new Error('Error al obtener vehículos');
  return res.json();
};

export const getVehiculoById = async (id) => {
  const res = await fetch(`${API_BASE}/${id}`);
  if (!res.ok) throw new Error('Error al obtener vehículo');
  return res.json();
};

export const createVehiculo = async (vehiculoData) => {
  const res = await fetch(`${API_BASE}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(vehiculoData),
  });
  if (!res.ok) throw new Error('Error al crear vehículo');
  return res.json();
};

export const updateVehiculo = async (id, vehiculoData) => {
  const res = await fetch(`${API_BASE}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(vehiculoData),
  });
  if (!res.ok) throw new Error('Error al actualizar vehículo');
  return res.json();
};

export const deleteVehiculo = async (id) => {
  const res = await fetch(`${API_BASE}/${id}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error('Error al eliminar vehículo');
  return res.json();
};

export const getCategoriasVehiculos = async () => {
  const res = await fetch(`${API_BASE}/categorias`);
  if (!res.ok) throw new Error('Error al obtener categorías');
  return res.json();
};

