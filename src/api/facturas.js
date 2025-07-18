const API_URL = import.meta.env.VITE_API_GATEWAY || 'http://localhost';

const API_BASE = `${API_URL}/api/facturas`;

export const getFacturas = async () => {
  const res = await fetch(`${API_BASE}`);
  if (!res.ok) throw new Error('Error al obtener facturas');
  return res.json();
};

export const getFacturaById = async (id) => {
  const res = await fetch(`${API_BASE}/${id}`);
  if (!res.ok) throw new Error('Error al obtener factura');
  return res.json();
};

export const generarFactura = async (reservaId) => {
  const res = await fetch(`${API_BASE}/generar/${reservaId}`, {
    method: 'POST',
  });
  if (!res.ok) throw new Error('Error al generar factura');
  return res.json();
};
