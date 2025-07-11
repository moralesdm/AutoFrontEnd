const API_BASE = 'http://localhost:3004/api/pagos';

export const getPagos = async () => {
  const res = await fetch(`${API_BASE}`);
  if (!res.ok) throw new Error('Error al obtener pagos');
  return res.json();
};

export const getPagoById = async (id) => {
  const res = await fetch(`${API_BASE}/${id}`);
  if (!res.ok) throw new Error('Error al obtener pago');
  return res.json();
};

export const createPago = async (pagoData) => {
  const res = await fetch(`${API_BASE}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(pagoData),
  });
  if (!res.ok) throw new Error('Error al crear pago');
  return res.json();
};

export const updatePago = async (id, pagoData) => {
  const res = await fetch(`${API_BASE}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(pagoData),
  });
  if (!res.ok) throw new Error('Error al actualizar pago');
  return res.json();
};

export const deletePago = async (id) => {
  const res = await fetch(`${API_BASE}/${id}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error('Error al eliminar pago');
  return res.json();
};

export const getPagosPorReserva = async (reservaId) => {
  const res = await fetch(`${API_BASE}/reserva/${reservaId}`);
  if (!res.ok) throw new Error('Error al obtener pagos por reserva');
  return res.json();
};

export const getPagosPorUsuario = async (usuarioId) => {
  const res = await fetch(`${API_BASE}/usuario/${usuarioId}`);
  if (!res.ok) throw new Error('Error al obtener pagos por usuario');
  return res.json();
};
