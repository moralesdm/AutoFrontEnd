import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getUsuarioById, updateUsuario } from '../../api/auth';

export default function UsuarioForm() {
  const [form, setForm] = useState({ nombre: '', email: '', rol: 'CLIENTE' });
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = Boolean(id);

  useEffect(() => {
    if (isEdit) {
      getUsuarioById(id)
        .then(data => {
          if (data) setForm({ nombre: data.nombre, email: data.email, rol: data.rol });
          else alert('Usuario no encontrado');
        })
        .catch(() => alert('Error cargando usuario'));
    } else {
      alert('No se puede crear usuario desde aquí. Use el registro público.');
      navigate('/register');
    }
  }, [id, isEdit, navigate]);

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isEdit) return; // protección extra

    try {
      await updateUsuario(id, form);
      navigate('/usuarios');
    } catch (error) {
      alert(error.message || 'Error al actualizar usuario');
    }
  };

  if (!isEdit) return null; // o un mensaje o redirección ya hecha arriba

  return (
    <div>
      <h2>Editar Usuario</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="nombre"
          placeholder="Nombre"
          value={form.nombre}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <select name="rol" value={form.rol} onChange={handleChange} required>
          <option value="ADMIN">ADMIN</option>
          <option value="CLIENTE">CLIENTE</option>
          <option value="EMPLEADO">EMPLEADO</option>
        </select>
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}
