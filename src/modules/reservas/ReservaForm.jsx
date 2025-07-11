import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getReservaById, createReserva, updateReserva } from '../../api/reservas';

export default function ReservaForm() {
  const [form, setForm] = useState({
    usuarioId: '',
    vehiculoId: '',
    fechaInicio: '',
    fechaFin: ''
  });

  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = !!id;

  useEffect(() => {
    if (isEdit) {
      getReservaById(id).then(data => setForm({
        usuarioId: data.usuarioId,
        vehiculoId: data.vehiculoId,
        fechaInicio: data.fechaInicio.slice(0,16), // for datetime-local input
        fechaFin: data.fechaFin.slice(0,16)
      }));
    }
  }, [id]);

  const handleChange = e => setForm({...form, [e.target.name]: e.target.value});

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      if (isEdit) await updateReserva(id, form);
      else await createReserva(form);
      navigate('/reservas');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <h2>{isEdit ? 'Editar Reserva' : 'Nueva Reserva'}</h2>
      <form onSubmit={handleSubmit}>
        <input name="usuarioId" type="number" placeholder="ID Usuario" value={form.usuarioId} onChange={handleChange} required />
        <input name="vehiculoId" type="number" placeholder="ID Vehículo" value={form.vehiculoId} onChange={handleChange} required />
        <label>Fecha Inicio:</label>
        <input name="fechaInicio" type="datetime-local" value={form.fechaInicio} onChange={handleChange} required />
        <label>Fecha Fin:</label>
        <input name="fechaFin" type="datetime-local" value={form.fechaFin} onChange={handleChange} required />
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}
