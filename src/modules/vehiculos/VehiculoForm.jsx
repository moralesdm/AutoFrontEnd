// src/modules/vehiculos/VehiculoForm.jsx
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getVehiculoById, createVehiculo, updateVehiculo } from '../../api/vehiculos';

export default function VehiculoForm() {
  const [form, setForm] = useState({
    marca: '',
    modelo: '',
    color: '',
    tipo: '',
    anio: '',
    imagenUrl: '',
    estado: true
  });

  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = !!id;

  useEffect(() => {
    if (isEdit) {
      getVehiculoById(id).then(setForm);
    }
  }, [id]);

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const action = isEdit ? updateVehiculo : createVehiculo;
    action(form, id).then(() => navigate('/vehiculos'));
  };

  return (
    <div>
      <h2>{isEdit ? 'Editar Vehículo' : 'Nuevo Vehículo'}</h2>
      <form onSubmit={handleSubmit}>
        <input name="marca" placeholder="Marca" value={form.marca} onChange={handleChange} required />
        <input name="modelo" placeholder="Modelo" value={form.modelo} onChange={handleChange} required />
        <input name="color" placeholder="Color" value={form.color} onChange={handleChange} />
        <input name="tipo" placeholder="Tipo" value={form.tipo} onChange={handleChange} />
        <input name="anio" placeholder="Año" value={form.anio} onChange={handleChange} />
        <input name="imagenUrl" placeholder="URL Imagen" value={form.imagenUrl} onChange={handleChange} />
        <label>
          <input type="checkbox" name="estado" checked={form.estado} onChange={handleChange} />
          Disponible
        </label>
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}
