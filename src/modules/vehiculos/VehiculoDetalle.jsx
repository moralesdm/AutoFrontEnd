import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getVehiculoById } from '../../api/vehiculos';

export default function VehiculoDetalle() {
  const { id } = useParams();
  const [vehiculo, setVehiculo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getVehiculoById(id)
      .then(setVehiculo)
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div>Cargando vehículo...</div>;
  if (!vehiculo) return <div>Vehículo no encontrado</div>;

  return (
    <div>
      <h2>Detalle Vehículo #{vehiculo.id}</h2>
      <p>Marca: {vehiculo.marca}</p>
      <p>Modelo: {vehiculo.modelo}</p>
      <p>Año: {vehiculo.anio}</p>
    </div>
  );
}
