import { useEffect, useState } from 'react';
import { getUsuarios } from '../../api/auth';
import { Link } from 'react-router-dom';

export default function UsuarioList() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    getUsuarios().then(setUsuarios);
  }, []);

  return (
    <div>
      <h2>Usuarios</h2>
      <Link to="/usuarios/nuevo" className="btn">+ Nuevo Usuario</Link>
      <ul>
        {usuarios.map(u => (
          <li key={u.id}>
            {u.nombre} ({u.email})
            {' '}
            <Link to={`/usuarios/${u.id}`}>Detalle</Link>{' '}
            <Link to={`/usuarios/${u.id}/editar`}>Editar</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
