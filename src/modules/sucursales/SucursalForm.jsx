// src/modules/sucursales/SucursalForm.jsx
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getSucursalById, createSucursal, updateSucursal } from '../../api/sucursales';

export default function SucursalForm() {
  const [form, setForm] = useState({
    nombre: '',
    direccion: '',
    ciudad: '',
    pais: ''
  });

  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = !!id;

  useEffect(() => {
    if (isEdit) {
      getSucursalById(id).then(setForm);
    }
  }, [id]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const action = isEdit ? updateSucursal : createSucursal;
    action(form, id).then(() => navigate('/sucursales'));
  };

  return (
    <div>
      <h2>{isEdit ? 'Editar Sucursal' : 'Nueva Sucursal'}</h2>
      <form onSubmit={handleSubmit}>
        <input name="nombre" placeholder="Nombre" value={form.nombre} onChange={handleChange} required />
        <input name="direccion" placeholder="Dirección" value={form.direccion} onChange={handleChange} />
        <input name="ciudad" placeholder="Ciudad" value={form.ciudad} onChange={handleChange} />
        <input name="pais" placeholder="País" value={form.pais} onChange={handleChange} />
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}
