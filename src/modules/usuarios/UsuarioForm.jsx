// src/modules/usuarios/UsuarioForm.jsx
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getUsuarioById, createUsuario, updateUsuario } from '../../api/usuarios';

export default function UsuarioForm() {
  const [form, setForm] = useState({
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    telefono: '',
    direccion: '',
    ciudad: '',
    pais: '',
    rol: ''
  });

  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = !!id;

  useEffect(() => {
    if (isEdit) {
      getUsuarioById(id).then(setForm);
    }
  }, [id]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const action = isEdit ? updateUsuario : createUsuario;
    action(form, id).then(() => navigate('/usuarios'));
  };

  return (
    <div>
      <h2>{isEdit ? 'Editar Usuario' : 'Crear Usuario'}</h2>
      <form onSubmit={handleSubmit}>
        <input name="nombre" placeholder="Nombre" value={form.nombre} onChange={handleChange} required />
        <input name="apellido" placeholder="Apellido" value={form.apellido} onChange={handleChange} required />
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <input name="password" placeholder="Password" type="password" value={form.password} onChange={handleChange} required={!isEdit} />
        <input name="telefono" placeholder="Teléfono" value={form.telefono} onChange={handleChange} />
        <input name="direccion" placeholder="Dirección" value={form.direccion} onChange={handleChange} />
        <input name="ciudad" placeholder="Ciudad" value={form.ciudad} onChange={handleChange} />
        <input name="pais" placeholder="País" value={form.pais} onChange={handleChange} />
        <select name="rol" value={form.rol} onChange={handleChange}>
          <option value="">-- Selecciona Rol --</option>
          <option value="CLIENTE">Cliente</option>
          <option value="ADMIN">Admin</option>
        </select>
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}
