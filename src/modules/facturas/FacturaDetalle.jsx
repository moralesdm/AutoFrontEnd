// src/modules/facturas/FacturaDetalle.jsx
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getFacturaById } from '../../api/facturas';

export default function FacturaDetalle() {
  const { id } = useParams();
  const [factura, setFactura] = useState(null);

  useEffect(() => {
    getFacturaById(id).then(setFactura);
  }, [id]);

  if (!factura) return <p>Cargando...</p>;

  return (
    <div>
      <h2>Detalle de Factura #{factura.id}</h2>
      <p><strong>Número:</strong> {factura.numero}</p>
      <p><strong>Fecha de Emisión:</strong> {new Date(factura.fechaEmision).toLocaleString()}</p>
      <p><strong>Monto Total:</strong> ${factura.montoTotal.toFixed(2)}</p>
      <p><strong>Usuario:</strong> {factura.usuario?.nombre} {factura.usuario?.apellido}</p>
      <p><strong>Reserva:</strong> #{factura.reserva?.id}</p>
      <Link to="/facturas">Volver</Link>
    </div>
  );
}
