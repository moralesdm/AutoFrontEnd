import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAlquilerById } from '../../api/alquileres';

export default function AlquilerDetalle() {
  const { id } = useParams();
  const [alquiler, setAlquiler] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAlquilerById(id)
      .then(data => setAlquiler(data))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div>Cargando alquiler...</div>;
  if (!alquiler) return <div>Alquiler no encontrado</div>;

  return (
    <div>
      <h2>Detalle del Alquiler #{alquiler.id}</h2>
      <p>Reserva ID: {alquiler.reservaId}</p>
      <p>Kilometraje Inicio: {alquiler.kilometrajeInicio}</p>
      <p>Kilometraje Fin: {alquiler.kilometrajeFin || 'No finalizado'}</p>
      <p>Fecha Inicio: {new Date(alquiler.fechaInicio).toLocaleString()}</p>
      <p>Fecha Fin: {alquiler.fechaFin ? new Date(alquiler.fechaFin).toLocaleString() : 'No finalizado'}</p>
    </div>
  );
}
