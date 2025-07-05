// src/modules/caracteristicas/CaracteristicaList.jsx
import { useEffect, useState } from 'react';
import { getCaracteristicas } from '../../api/caracteristicas';
import { Link } from 'react-router-dom';

export default function CaracteristicaList() {
  const [caracteristicas, setCaracteristicas] = useState([]);

  useEffect(() => {
    getCaracteristicas().then(setCaracteristicas);
  }, []);

  return (
    <div>
      <h2>Características</h2>
      <Link to="/caracteristicas/nueva" className="btn">+ Nueva Característica</Link>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {caracteristicas.map(c => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.nombre}</td>
              <td>
                <Link to={`/caracteristicas/${c.id}/editar`}>Editar</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
