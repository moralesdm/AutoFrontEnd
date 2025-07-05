// src/modules/sucursales/SucursalList.jsx
import { useEffect, useState } from 'react';
import { getSucursales } from '../../api/sucursales';
import { Link } from 'react-router-dom';

export default function SucursalList() {
  const [sucursales, setSucursales] = useState([]);

  useEffect(() => {
    getSucursales().then(setSucursales);
  }, []);

  return (
    <div>
      <h2>Sucursales</h2>
      <Link to="/sucursales/nueva" className="btn">+ Nueva Sucursal</Link>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Dirección</th>
            <th>Ciudad</th>
            <th>País</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {sucursales.map(s => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.nombre}</td>
              <td>{s.direccion}</td>
              <td>{s.ciudad}</td>
              <td>{s.pais}</td>
              <td>
                <Link to={`/sucursales/${s.id}/editar`}>Editar</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
