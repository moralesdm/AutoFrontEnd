// src/modules/categorias/CategoriaList.jsx
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
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {categorias.map(cat => (
            <tr key={cat.id}>
              <td>{cat.id}</td>
              <td>{cat.nombre}</td>
              <td>{cat.descripcion}</td>
              <td>${cat.precio}</td>
              <td>
                <Link to={`/categorias/${cat.id}/editar`}>Editar</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
