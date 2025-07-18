const API_URL = import.meta.env.VITE_API_GATEWAY || 'http://localhost';

const API_BASE = `${API_URL}/api/reservas/reservas`;

export const getReservas = async () => {
  const res = await fetch(`${API_BASE}`);
  if (!res.ok) throw new Error('Error al obtener reservas');
  return res.json();
};

export const getReservaById = async (id) => {
  const res = await fetch(`${API_BASE}/${id}`);
  if (!res.ok) throw new Error('Error al obtener reserva');
  return res.json();
};

export const createReserva = async (reservaData) => {
  const res = await fetch(`${API_BASE}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(reservaData),
  });
  if (!res.ok) throw new Error('Error al crear reserva');
  return res.json();
};

export const updateReserva = async (id, reservaData) => {
  const res = await fetch(`${API_BASE}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(reservaData),
  });
  if (!res.ok) throw new Error('Error al actualizar reserva');
  return res.json();
};

export const deleteReserva = async (id) => {
  const res = await fetch(`${API_BASE}/${id}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error('Error al eliminar reserva');
  return res.json();
};
