import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { createPago, getPagosPorReserva } from '../../api/pagos';

export default function NuevoPago() {
  const { id: reservaId } = useParams();
  const [params] = useSearchParams();
  const usuarioId = params.get('usuarioId');
  const navigate = useNavigate();

  const [monto, setMonto] = useState('');
  const [metodoPago, setMetodoPago] = useState('EFECTIVO');
  const [yaPagado, setYaPagado] = useState(false);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const verificarPagoExistente = async () => {
      try {
        const pagos = await getPagosPorReserva(reservaId);
        if (pagos.length > 0) {
          setYaPagado(true);
        }
      } catch (err) {
        console.error('Error al verificar pagos existentes', err);
      } finally {
        setCargando(false);
      }
    };
    verificarPagoExistente();
  }, [reservaId]);

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
      navigate('/pagos');
    } catch (err) {
      alert('Error al procesar pago');
      console.error(err);
    }
  };

  if (cargando) return <p>Cargando...</p>;

  if (yaPagado) {
    return <p>⚠️ Ya existe un pago registrado para esta reserva.</p>;
  }

  return (
    <div>
      <h2>Registrar Pago</h2>
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
