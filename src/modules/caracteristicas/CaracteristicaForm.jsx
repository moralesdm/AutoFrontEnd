import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getCaracteristicaById, createCaracteristica, updateCaracteristica } from '../../api/caracteristicas';

export default function CaracteristicaForm() {
  const [nombre, setNombre] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = !!id;

  useEffect(() => {
    if (isEdit) {
      getCaracteristicaById(id).then(data => setNombre(data.nombre));
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEdit) await updateCaracteristica(id, { nombre });
      else await createCaracteristica({ nombre });
      navigate('/caracteristicas');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <h2>{isEdit ? 'Editar Característica' : 'Nueva Característica'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={e => setNombre(e.target.value)}
          required
        />
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}
