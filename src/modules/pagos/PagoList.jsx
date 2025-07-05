// src/modules/pagos/PagoList.jsx
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
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Fecha</th>
            <th>Monto</th>
            <th>Método</th>
            <th>Usuario</th>
            <th>Reserva</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {pagos.map(p => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{new Date(p.fecha).toLocaleString()}</td>
              <td>${p.monto.toFixed(2)}</td>
              <td>{p.metodoPago}</td>
              <td>{p.usuario?.nombre} {p.usuario?.apellido}</td>
              <td>{p.reserva?.id}</td>
              <td>
                <Link to={`/pagos/${p.id}`}>Ver</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
