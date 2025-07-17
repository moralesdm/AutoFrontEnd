const API_URL = import.meta.env.VITE_API_GATEWAY || 'http://localhost';

const API_BASE= `${API_URL}/auth/`;

export const loginUser = async (email, password) => {
  const res = await fetch(`${API_BASE}login/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  if (!res.ok) throw new Error((await res.json()).message || 'Error en inicio de sesión');
  return res.json(); // { token: '...' }
};

export const registerUser = async (userData) => {
  const res = await fetch(`${API_BASE}register/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  });
  if (!res.ok) throw new Error((await res.json()).message || 'Error al registrar usuario');
  return res.json();
};

export const forgotPassword = async (email) => {
  const res = await fetch(`${API_BASE}forgot-password/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  });
  if (!res.ok) throw new Error((await res.json()).message || 'Error al enviar correo');
  return res.json();
};

export const resetPassword = async (token, newPassword) => {
  const res = await fetch(`${API_BASE}reset-password/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ token, newPassword }),
  });
  if (!res.ok) throw new Error((await res.json()).message || 'Error al resetear contraseña');
  return res.json();
};

export const refreshToken = async (token) => {
  const res = await fetch(`${API_BASE}refresh-token/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ token }),
  });
  if (!res.ok) throw new Error((await res.json()).message || 'Error al refrescar token');
  return res.json(); // { token }
};

export const logout = async (token) => {
  const res = await fetch(`${API_BASE}logout/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ token }),
  });
  if (!res.ok) throw new Error((await res.json()).message || 'Error al cerrar sesión');
  return res.json();
};

export const getProfile = async (token) => {
  const res = await fetch(`${API_BASE}me/`, {
    method: 'GET',
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error((await res.json()).message || 'Error al obtener perfil');
  return res.json();
};

export const getUsuarios = async (token) => {
  const res = await fetch(`${API_BASE}usuarios`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error((await res.json()).message || 'Error al obtener usuarios');
  return res.json();
};

export const getUsuarioById = async (id, token) => {
  const res = await fetch(`${API_BASE}/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error((await res.json()).message || 'Error al obtener usuario');
  return res.json();
};

export const updateUsuario = async (id, data, token) => {
  const res = await fetch(`${API_BASE}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error((await res.json()).message || 'Error al actualizar usuario');
  return res.json();
};

export const deleteUsuario = async (id, token) => {
  const res = await fetch(`${API_BASE}/${id}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error((await res.json()).message || 'Error al eliminar usuario');
  return res.json();
};

export const activarUsuario = async (id, token) => {
  const res = await fetch(`${API_BASE}/activar/${id}`, {
    method: 'PUT',
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error((await res.json()).message || 'Error al activar usuario');
  return res.json();
};
