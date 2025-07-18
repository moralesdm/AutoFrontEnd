import { useEffect, useState } from 'react';
import { getPagos } from '../../api/pagos';
import { Link, useNavigate } from 'react-router-dom';

export default function PagoList() {
  const [pagos, setPagos] = useState([]);
  const [reservaId, setReservaId] = useState('');
  const [usuarioId, setUsuarioId] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    getPagos().then(setPagos).catch(err => {
      console.error('Error al obtener pagos:', err);
    });
  }, []);

  const irAPagar = () => {
    if (!reservaId || !usuarioId) {
      alert('Debes ingresar el ID de reserva y el ID de usuario');
      return;
    }
    navigate(`/reservas/${reservaId}/pagar?usuarioId=${usuarioId}`);
  };

  return (
    <div>
      <h2>Pagos</h2>

      {/* Formulario para crear un nuevo pago desde reserva */}
      <div style={{ marginBottom: '1rem' }}>
        <label>ID Reserva:</label>{' '}
        <input
          type="number"
          value={reservaId}
          onChange={(e) => setReservaId(e.target.value)}
          style={{ marginRight: '1rem' }}
        />
        <label>ID Usuario:</label>{' '}
        <input
          type="number"
          value={usuarioId}
          onChange={(e) => setUsuarioId(e.target.value)}
          style={{ marginRight: '1rem' }}
        />
        <button onClick={irAPagar}>Realizar Pago</button>
      </div>

      {/* Lista de pagos existentes */}
      <ul>
        {pagos.length === 0 ? (
          <p>No hay pagos registrados.</p>
        ) : (
          pagos.map((p) => (
            <li key={p.id}>
              Pago #{p.id} - Monto: ${p.monto} - Método: {p.metodoPago}
              {' '}
              <Link to={`/pagos/${p.id}`}>Detalle</Link>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
