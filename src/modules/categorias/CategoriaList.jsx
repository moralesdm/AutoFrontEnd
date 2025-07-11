import { useEffect, useState } from 'react';
import { getCategorias } from '../../api/categorias';
import { Link } from 'react-router-dom';

export default function CategoriaList() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    getCategorias().then(setCategorias);
  }, []);

  return (
    <div>
      <h2>Categorías</h2>
      <Link to="/categorias/nueva" className="btn">+ Nueva Categoría</Link>
      <ul>
        {categorias.map(c => (
          <li key={c.id}>
            {c.nombre} - {c.descripcion} (${c.precioPorDia})
            {' '}
            <Link to={`/categorias/${c.id}/editar`}>Editar</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
