import { useEffect, useState } from 'react';
import { getFacturas } from '../../api/facturas';
import { Link } from 'react-router-dom';

export default function FacturaList() {
  const [facturas, setFacturas] = useState([]);

  useEffect(() => {
    getFacturas().then(setFacturas);
  }, []);

  return (
    <div>
      <h2>Facturas</h2>
      <ul>
        {facturas.map(f => (
          <li key={f.id}>
            {f.numero} - {new Date(f.fechaEmision).toLocaleDateString()} - ${f.montoTotal.toFixed(2)}
            {' '}
            <Link to={`/facturas/${f.id}`}>Detalle</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
