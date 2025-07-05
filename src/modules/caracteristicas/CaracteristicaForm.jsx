// src/modules/caracteristicas/CaracteristicaForm.jsx
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getCaracteristicaById, createCaracteristica, updateCaracteristica } from '../../api/caracteristicas';

export default function CaracteristicaForm() {
  const [form, setForm] = useState({ nombre: '' });

  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = !!id;

  useEffect(() => {
    if (isEdit) {
      getCaracteristicaById(id).then(setForm);
    }
  }, [id]);

  const handleChange = e => {
    setForm({ nombre: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const action = isEdit ? updateCaracteristica : createCaracteristica;
    action(form, id).then(() => navigate('/caracteristicas'));
  };

  return (
    <div>
      <h2>{isEdit ? 'Editar Característica' : 'Nueva Característica'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="nombre"
          placeholder="Nombre"
          value={form.nombre}
          onChange={handleChange}
          required
        />
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}
