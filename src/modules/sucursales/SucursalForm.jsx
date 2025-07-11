import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getSucursalById, createSucursal, updateSucursal } from '../../api/sucursales';

export default function SucursalForm() {
  const [form, setForm] = useState({ nombre: '', direccion: '' });
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = !!id;

  useEffect(() => {
    if (isEdit) {
      getSucursalById(id).then(data => setForm({ nombre: data.nombre, direccion: data.direccion }));
    }
  }, [id]);

  const handleChange = e => setForm({...form, [e.target.name]: e.target.value});

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      if (isEdit) await updateSucursal(id, form);
      else await createSucursal(form);
      navigate('/sucursales');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <h2>{isEdit ? 'Editar Sucursal' : 'Nueva Sucursal'}</h2>
      <form onSubmit={handleSubmit}>
        <input name="nombre" placeholder="Nombre" value={form.nombre} onChange={handleChange} required />
        <input name="direccion" placeholder="Dirección" value={form.direccion} onChange={handleChange} required />
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}
