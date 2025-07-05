// src/modules/reservas/ReservaDetalle.jsx
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getReservaById } from '../../api/reservas';

export default function ReservaDetalle() {
  const { id } = useParams();
  const [reserva, setReserva] = useState(null);

  useEffect(() => {
    getReservaById(id).then(setReserva);
  }, [id]);

  if (!reserva) return <p>Cargando...</p>;

  return (
    <div>
      <h2>Detalle de Reserva #{reserva.id}</h2>
      <p><strong>Usuario:</strong> {reserva.usuario?.nombre}</p>
      <p><strong>Vehículo:</strong> {reserva.vehiculo?.marca} {reserva.vehiculo?.modelo}</p>
      <p><strong>Fecha Inicio:</strong> {reserva.fechaInicio}</p>
      <p><strong>Fecha Fin:</strong> {reserva.fechaFin}</p>
      <p><strong>Estado:</strong> {reserva.estado}</p>

      <Link to="/reservas">Volver</Link>
    </div>
  );
}
