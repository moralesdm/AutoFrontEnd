// src/modules/usuarios/UsuarioList.jsx
import { useEffect, useState } from 'react';
import { getUsuarios } from '../../api/usuarios';
import { Link } from 'react-router-dom';

export default function UsuarioList() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    getUsuarios().then(setUsuarios);
  }, []);

  return (
    <div>
      <h2>Usuarios</h2>
      <Link to="/usuarios/nuevo" className="btn">+ Crear nuevo usuario</Link>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Rol</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.nombre} {user.apellido}</td>
              <td>{user.email}</td>
              <td>{user.rol}</td>
              <td>
                <Link to={`/usuarios/${user.id}`}>Ver</Link> |{" "}
                <Link to={`/usuarios/${user.id}/editar`}>Editar</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
