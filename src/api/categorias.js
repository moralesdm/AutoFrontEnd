const API_URL = import.meta.env.VITE_API_GATEWAY || 'http://localhost';

API_BASE = `${API_URL}/api/vehiculos/categorias`;

export const getCategorias = async () => {
  const res = await fetch(`${API_BASE}`);
  if (!res.ok) throw new Error('Error al obtener categorías');
  return res.json();
};

export const getCategoriaById = async (id) => {
  const res = await fetch(`${API_BASE}/${id}`);
  if (!res.ok) throw new Error('Error al obtener categoría');
  return res.json();
};

export const createCategoria = async (categoriaData) => {
  const res = await fetch(`${API_BASE}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(categoriaData),
  });
  if (!res.ok) throw new Error('Error al crear categoría');
  return res.json();
};

export const updateCategoria = async (id, categoriaData) => {
  const res = await fetch(`${API_BASE}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(categoriaData),
  });
  if (!res.ok) throw new Error('Error al actualizar categoría');
  return res.json();
};

export const deleteCategoria = async (id) => {
  const res = await fetch(`${API_BASE}/${id}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error('Error al eliminar categoría');
  return res.json();
};
