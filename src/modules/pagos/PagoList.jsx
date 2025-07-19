import { useEffect, useState } from 'react';
import { getPagos } from '../../api/pagos';
import { Link } from 'react-router-dom';

export default function PagoList() {
  const [pagos, setPagos] = useState([]);

  useEffect(() => {
    getPagos().then(setPagos);
  }, []);

  return (
    <div>
      <h2>Pagos</h2>
      <ul>
        {pagos.map(p => (
          <li key={p.id}>
            Pago #{p.id} - Monto: ${p.monto} - Estado: {p.estado}
            {' '}
            <Link to={`/pagos/${p.id}`}>Detalle</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
