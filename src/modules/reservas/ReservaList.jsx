// src/modules/reservas/ReservaList.jsx
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
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Usuario</th>
            <th>Vehículo</th>
            <th>Inicio</th>
            <th>Fin</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {reservas.map(r => (
            <tr key={r.id}>
              <td>{r.id}</td>
              <td>{r.usuario?.nombre}</td>
              <td>{r.vehiculo?.modelo}</td>
              <td>{r.fechaInicio}</td>
              <td>{r.fechaFin}</td>
              <td>{r.estado}</td>
              <td>
                <Link to={`/reservas/${r.id}`}>Ver</Link> |{" "}
                <Link to={`/reservas/${r.id}/editar`}>Editar</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
