// src/modules/facturas/FacturaList.jsx
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
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Número</th>
            <th>Fecha Emisión</th>
            <th>Monto</th>
            <th>Usuario</th>
            <th>Reserva</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {facturas.map(f => (
            <tr key={f.id}>
              <td>{f.id}</td>
              <td>{f.numero}</td>
              <td>{new Date(f.fechaEmision).toLocaleString()}</td>
              <td>${f.montoTotal.toFixed(2)}</td>
              <td>{f.usuario?.nombre} {f.usuario?.apellido}</td>
              <td>{f.reserva?.id}</td>
              <td>
                <Link to={`/facturas/${f.id}`}>Ver</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
