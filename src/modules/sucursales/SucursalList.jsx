import { useEffect, useState } from 'react';
import { getSucursales } from '../../api/sucursales';
import { Link } from 'react-router-dom';

export default function SucursalList() {
  const [sucursales, setSucursales] = useState([]);

  useEffect(() => {
    getSucursales().then(setSucursales);
  }, []);

  return (
    <div>
      <h2>Sucursales</h2>
      <Link to="/sucursales/nueva" className="btn">+ Nueva Sucursal</Link>
      <ul>
        {sucursales.map(s => (
          <li key={s.id}>
            {s.nombre} - {s.direccion}
            {' '}
            <Link to={`/sucursales/${s.id}/editar`}>Editar</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
