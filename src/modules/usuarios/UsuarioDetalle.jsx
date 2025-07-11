import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUsuarioById } from '../../api/auth';
export default function UsuarioDetalle() {
  const { id } = useParams();
  const [usuario, setUsuario] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUsuarioById(id)
      .then(setUsuario)
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div>Cargando usuario...</div>;
  if (!usuario) return <div>Usuario no encontrado</div>;

  return (
    <div>
      <h2>Detalle Usuario #{usuario.id}</h2>
      <p>Nombre: {usuario.nombre}</p>
      <p>Email: {usuario.email}</p>
      <p>Rol: {usuario.rol}</p>
    </div>
  );
}
