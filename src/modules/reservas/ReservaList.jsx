import { useEffect, useState } from 'react';
import { getReservas } from '../../api/reservas';
import { Link } from 'react-router-dom';

export default function ReservaList() {
  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    getReservas().then(setReservas);
  }, []);

  return (
    <div>
      <h2>Reservas</h2>
      <Link to="/reservas/nueva" className="btn">+ Nueva Reserva</Link>
      <ul>
        {reservas.map(r => (
          <li key={r.id}>
            Reserva #{r.id} - Usuario: {r.usuarioNombre || r.usuarioId} - Vehículo: {r.vehiculoModelo || r.vehiculoId}
            {' '}
            <Link to={`/reservas/${r.id}`}>Detalle</Link>{' '}
            <Link to={`/reservas/${r.id}/editar`}>Editar</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
