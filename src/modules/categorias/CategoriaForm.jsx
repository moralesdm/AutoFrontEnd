// src/modules/categorias/CategoriaForm.jsx
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getCategoriaById, createCategoria, updateCategoria } from '../../api/categorias';

export default function CategoriaForm() {
  const [form, setForm] = useState({
    nombre: '',
    descripcion: '',
    precio: ''
  });

  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = !!id;

  useEffect(() => {
    if (isEdit) {
      getCategoriaById(id).then(setForm);
    }
  }, [id]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const action = isEdit ? updateCategoria : createCategoria;
    action(form, id).then(() => navigate('/categorias'));
  };

  return (
    <div>
      <h2>{isEdit ? 'Editar Categoría' : 'Nueva Categoría'}</h2>
      <form onSubmit={handleSubmit}>
        <input name="nombre" placeholder="Nombre" value={form.nombre} onChange={handleChange} required />
        <input name="descripcion" placeholder="Descripción" value={form.descripcion} onChange={handleChange} />
        <input name="precio" placeholder="Precio" type="number" step="0.01" value={form.precio} onChange={handleChange} />
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}
