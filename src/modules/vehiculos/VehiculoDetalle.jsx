// src/modules/vehiculos/VehiculoDetalle.jsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getVehiculoById } from '../../api/vehiculos';

export default function VehiculoDetalle() {
  const { id } = useParams();
  const [vehiculo, setVehiculo] = useState(null);

  useEffect(() => {
    getVehiculoById(id).then(setVehiculo);
  }, [id]);

  if (!vehiculo) return <p>Cargando...</p>;

  return (
    <div>
      <h2>Detalle del Vehículo</h2>
      <p><strong>ID:</strong> {vehiculo.id}</p>
      <p><strong>Marca:</strong> {vehiculo.marca}</p>
      <p><strong>Modelo:</strong> {vehiculo.modelo}</p>
      <p><strong>Color:</strong> {vehiculo.color}</p>
      <p><strong>Tipo:</strong> {vehiculo.tipo}</p>
      <p><strong>Año:</strong> {vehiculo.anio}</p>
      <p><strong>Disponible:</strong> {vehiculo.estado ? 'Sí' : 'No'}</p>
      <img src={vehiculo.imagenUrl} alt="vehiculo" style={{ width: '300px' }} />
    </div>
  );
}
