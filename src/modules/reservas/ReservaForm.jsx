// src/modules/reservas/ReservaForm.jsx
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getReservaById, createReserva, updateReserva } from '../../api/reservas';
import { getUsuarios } from '../../api/usuarios';
import { getVehiculos } from '../../api/vehiculos';

export default function ReservaForm() {
  const { id } = useParams();
  const isEdit = !!id;
  const navigate = useNavigate();

  const [form, setForm] = useState({
    usuarioId: '',
    vehiculoId: '',
    fechaInicio: '',
    fechaFin: '',
    estado: 'PENDIENTE'
  });

  const [usuarios, setUsuarios] = useState([]);
  const [vehiculos, setVehiculos] = useState([]);

  useEffect(() => {
    getUsuarios().then(setUsuarios);
    getVehiculos().then(setVehiculos);
    if (isEdit) {
      getReservaById(id).then(data => {
        setForm({
          usuarioId: data.usuario.id,
          vehiculoId: data.vehiculo.id,
          fechaInicio: data.fechaInicio,
          fechaFin: data.fechaFin,
          estado: data.estado
        });
      });
    }
  }, [id]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const action = isEdit ? updateReserva : createReserva;
    action(form, id).then(() => navigate('/reservas'));
  };

  return (
    <div>
      <h2>{isEdit ? 'Editar Reserva' : 'Nueva Reserva'}</h2>
      <form onSubmit={handleSubmit}>
        <select name="usuarioId" value={form.usuarioId} onChange={handleChange} required>
          <option value="">-- Usuario --</option>
          {usuarios.map(u => (
            <option key={u.id} value={u.id}>{u.nombre} {u.apellido}</option>
          ))}
        </select>

        <select name="vehiculoId" value={form.vehiculoId} onChange={handleChange} required>
          <option value="">-- Vehículo --</option>
          {vehiculos.map(v => (
            <option key={v.id} value={v.id}>{v.marca} {v.modelo}</option>
          ))}
        </select>

        <input type="datetime-local" name="fechaInicio" value={form.fechaInicio} onChange={handleChange} required />
        <input type="datetime-local" name="fechaFin" value={form.fechaFin} onChange={handleChange} required />

        <select name="estado" value={form.estado} onChange={handleChange}>
          <option value="PENDIENTE">Pendiente</option>
          <option value="CONFIRMADA">Confirmada</option>
          <option value="CANCELADA">Cancelada</option>
        </select>

        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}
