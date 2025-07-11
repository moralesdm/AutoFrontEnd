import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getCategoriaById, createCategoria, updateCategoria } from '../../api/categorias';

export default function CategoriaForm() {
  const [form, setForm] = useState({
    nombre: '',
    descripcion: '',
    precioPorDia: ''
  });

  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = !!id;

  useEffect(() => {
    if (isEdit) {
      getCategoriaById(id).then(data => setForm({
        nombre: data.nombre,
        descripcion: data.descripcion,
        precioPorDia: data.precioPorDia
      }));
    }
  }, [id]);

  const handleChange = e => setForm({...form, [e.target.name]: e.target.value});

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      if (isEdit) await updateCategoria(id, form);
      else await createCategoria(form);
      navigate('/categorias');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <h2>{isEdit ? 'Editar Categoría' : 'Nueva Categoría'}</h2>
      <form onSubmit={handleSubmit}>
        <input name="nombre" placeholder="Nombre" value={form.nombre} onChange={handleChange} required />
        <textarea name="descripcion" placeholder="Descripción" value={form.descripcion} onChange={handleChange} required />
        <input
          name="precioPorDia"
          placeholder="Precio por día"
          type="number"
          step="0.01"
          value={form.precioPorDia}
          onChange={handleChange}
          required
        />
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}
