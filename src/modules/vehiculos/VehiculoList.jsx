// src/modules/vehiculos/VehiculoList.jsx
import { useEffect, useState } from 'react';
import { getVehiculos } from '../../api/vehiculos';
import { Link } from 'react-router-dom';

export default function VehiculoList() {
  const [vehiculos, setVehiculos] = useState([]);

  useEffect(() => {
    getVehiculos().then(setVehiculos);
  }, []);

  return (
    <div>
      <h2>Vehículos</h2>
      <Link to="/vehiculos/nuevo" className="btn">+ Nuevo Vehículo</Link>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Tipo</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {vehiculos.map(v => (
            <tr key={v.id}>
              <td>{v.id}</td>
              <td>{v.marca}</td>
              <td>{v.modelo}</td>
              <td>{v.tipo}</td>
              <td>{v.estado ? 'Disponible' : 'No disponible'}</td>
              <td>
                <Link to={`/vehiculos/${v.id}`}>Ver</Link> |{" "}
                <Link to={`/vehiculos/${v.id}/editar`}>Editar</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
