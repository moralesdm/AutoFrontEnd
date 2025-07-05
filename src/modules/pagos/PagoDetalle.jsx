// src/modules/pagos/PagoDetalle.jsx
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPagoById } from '../../api/pagos';

export default function PagoDetalle() {
  const { id } = useParams();
  const [pago, setPago] = useState(null);

  useEffect(() => {
    getPagoById(id).then(setPago);
  }, [id]);

  if (!pago) return <p>Cargando...</p>;

  return (
    <div>
      <h2>Detalle del Pago #{pago.id}</h2>
      <p><strong>Fecha:</strong> {new Date(pago.fecha).toLocaleString()}</p>
      <p><strong>Monto:</strong> ${pago.monto.toFixed(2)}</p>
      <p><strong>Método de pago:</strong> {pago.metodoPago}</p>
      <p><strong>Usuario:</strong> {pago.usuario?.nombre} {pago.usuario?.apellido}</p>
      <p><strong>Reserva:</strong> #{pago.reserva?.id}</p>
      <Link to="/pagos">Volver</Link>
    </div>
  );
}
