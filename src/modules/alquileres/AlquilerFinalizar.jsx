import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { finalizarAlquiler } from '../../api/alquileres';

export default function AlquilerFinalizar() {
  const { id } = useParams();
  const [kilometrajeFin, setKilometrajeFin] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await finalizarAlquiler(id, { kilometrajeFin: parseFloat(kilometrajeFin) });
      navigate(`/alquileres/${id}`);
    } catch (err) {
      setError(err.message || 'Error al finalizar alquiler');
    }
  };

  return (
    <div>
      <h2>Finalizar Alquiler #{id}</h2>
      <form onSubmit={handleSubmit}>
        <label>Kilometraje Final:</label>
        <input
          type="number"
          step="0.1"
          value={kilometrajeFin}
          onChange={(e) => setKilometrajeFin(e.target.value)}
          required
        />
        <button type="submit">Finalizar</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}
