import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { iniciarAlquiler } from '../../api/alquileres';

export default function AlquilerInicio() {
  const [reservaId, setReservaId] = useState('');
  const [kilometrajeInicio, setKilometrajeInicio] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await iniciarAlquiler({ reservaId: parseInt(reservaId), kilometrajeInicio: parseFloat(kilometrajeInicio) });
      navigate(`/alquileres/${data.id}`);
    } catch (err) {
      setError(err.message || 'Error al iniciar alquiler');
    }
  };

  return (
    <div>
      <h2>Iniciar Alquiler</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="ID Reserva"
          value={reservaId}
          onChange={(e) => setReservaId(e.target.value)}
          required
        />
        <input
          type="number"
          step="0.1"
          placeholder="Kilometraje Inicio"
          value={kilometrajeInicio}
          onChange={(e) => setKilometrajeInicio(e.target.value)}
          required
        />
        <button type="submit">Iniciar</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}
