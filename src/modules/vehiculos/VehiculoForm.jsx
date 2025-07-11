import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getVehiculoById, createVehiculo, updateVehiculo } from '../../api/vehiculos';

export default function VehiculoForm() {
  const [form, setForm] = useState({ marca: '', modelo: '', anio: '' });
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = !!id;

  useEffect(() => {
    if (isEdit) {
      getVehiculoById(id).then(data => setForm({ marca: data.marca, modelo: data.modelo, anio: data.anio }));
    }
  }, [id]);

  const handleChange = e => setForm({...form, [e.target.name]: e.target.value});

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      if (isEdit) await updateVehiculo(id, form);
      else await createVehiculo(form);
      navigate('/vehiculos');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <h2>{isEdit ? 'Editar Vehículo' : 'Nuevo Vehículo'}</h2>
      <form onSubmit={handleSubmit}>
        <input name="marca" placeholder="Marca" value={form.marca} onChange={handleChange} required />
        <input name="modelo" placeholder="Modelo" value={form.modelo} onChange={handleChange} required />
        <input name="anio" placeholder="Año" type="number" value={form.anio} onChange={handleChange} required />
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}
