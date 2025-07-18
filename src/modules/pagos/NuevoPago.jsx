import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { createPago } from '../../api/pagos';

export default function NuevoPago() {
  const { id: reservaId } = useParams(); // ← toma el ID desde el path
  const [params] = useSearchParams();
  const usuarioId = params.get('usuarioId'); // ← desde el query param

  const navigate = useNavigate();

  const [monto, setMonto] = useState('');
  const [metodoPago, setMetodoPago] = useState('EFECTIVO');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const pagoData = {
        monto: parseFloat(monto),
        metodoPago,
        usuarioId: parseInt(usuarioId),
        reservaId: parseInt(reservaId),
      };
      await createPago(pagoData);
      alert('Pago registrado correctamente');
      navigate('/pagos'); // ← redirige a la lista de pagos
    } catch (err) {
      alert('Error al procesar pago');
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Nuevo Pago</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Monto:</label>
          <input
            type="number"
            value={monto}
            onChange={e => setMonto(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Método de Pago:</label>
          <select
            value={metodoPago}
            onChange={e => setMetodoPago(e.target.value)}
          >
            <option value="EFECTIVO">Efectivo</option>
            <option value="TARJETA">Tarjeta</option>
            <option value="TRANSFERENCIA">Transferencia</option>
          </select>
        </div>
        <button type="submit">Registrar Pago</button>
      </form>
    </div>
  );
}
