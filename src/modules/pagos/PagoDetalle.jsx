import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPagoById } from '../../api/pagos';

export default function PagoDetalle() {
  const { id } = useParams();
  const [pago, setPago] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPagoById(id)
      .then(setPago)
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div>Cargando pago...</div>;
  if (!pago) return <div>Pago no encontrado</div>;

  return (
    <div>
      <h2>Detalle Pago #{pago.id}</h2>
      <p>Usuario ID: {pago.usuarioId}</p>
      <p>Reserva ID: {pago.reservaId}</p>
      <p>Monto: ${pago.monto}</p>
      <p>Método de pago: {pago.metodoPago}</p>
      <p>Fecha: {new Date(pago.fecha).toLocaleString()}</p>
      <p>Estado: {pago.estado}</p>
    </div>
  );
}
