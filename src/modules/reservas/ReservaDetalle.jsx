import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReservaById } from '../../api/reservas';

export default function ReservaDetalle() {
  const { id } = useParams();
  const [reserva, setReserva] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getReservaById(id)
      .then(setReserva)
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div>Cargando reserva...</div>;
  if (!reserva) return <div>Reserva no encontrada</div>;

  return (
    <div>
      <h2>Detalle Reserva #{reserva.id}</h2>
      <p>Usuario ID: {reserva.usuarioId}</p>
      <p>Vehículo ID: {reserva.vehiculoId}</p>
      <p>Fecha Inicio: {new Date(reserva.fechaInicio).toLocaleString()}</p>
      <p>Fecha Fin: {new Date(reserva.fechaFin).toLocaleString()}</p>
      <p>Estado: {reserva.estado}</p>
    </div>
  );
}
