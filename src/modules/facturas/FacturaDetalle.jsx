import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFacturaById } from '../../api/facturas';

export default function FacturaDetalle() {
  const { id } = useParams();
  const [factura, setFactura] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFacturaById(id)
      .then(setFactura)
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div>Cargando factura...</div>;
  if (!factura) return <div>Factura no encontrada</div>;

  return (
    <div>
      <h2>Factura #{factura.numero}</h2>
      <p>Fecha de emisión: {new Date(factura.fechaEmision).toLocaleString()}</p>
      <p>Monto total: ${factura.montoTotal.toFixed(2)}</p>
      <p>Usuario ID: {factura.usuarioId}</p>
      <p>Reserva ID: {factura.reservaId}</p>
    </div>
  );
}
