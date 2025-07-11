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
      <ul>
        {caracteristicas.map(c => (
          <li key={c.id}>
            {c.nombre} {' '}
            <Link to={`/caracteristicas/${c.id}/editar`}>Editar</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
