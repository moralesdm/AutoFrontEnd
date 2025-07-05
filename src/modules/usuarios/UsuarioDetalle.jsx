// src/modules/usuarios/UsuarioDetalle.jsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUsuarioById } from '../../api/usuarios';

export default function UsuarioDetalle() {
  const { id } = useParams();
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    getUsuarioById(id).then(setUsuario);
  }, [id]);

  if (!usuario) return <p>Cargando...</p>;

  return (
    <div>
      <h2>Detalle de Usuario</h2>
      <p><strong>ID:</strong> {usuario.id}</p>
      <p><strong>Nombre:</strong> {usuario.nombre} {usuario.apellido}</p>
      <p><strong>Email:</strong> {usuario.email}</p>
      <p><strong>Teléfono:</strong> {usuario.telefono}</p>
      <p><strong>Dirección:</strong> {usuario.direccion}</p>
      <p><strong>Ciudad:</strong> {usuario.ciudad}</p>
      <p><strong>País:</strong> {usuario.pais}</p>
      <p><strong>Rol:</strong> {usuario.rol}</p>
      <p><strong>Activo:</strong> {usuario.estado ? 'Sí' : 'No'}</p>
      <p><strong>Fecha Registro:</strong> {new Date(usuario.fecha_registro).toLocaleString()}</p>
    </div>
  );
}
