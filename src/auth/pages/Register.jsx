// src/auth/pages/Register.jsx
import { useState } from 'react';
import { registerUser } from '../../api/auth';
import { useAuth } from '../authContext';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [form, setForm] = useState({
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    telefono: '',
    direccion: '',
    ciudad: '',
    pais: ''
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const response = await registerUser(form);
      if (response.token) {
        login(response.token);
        navigate('/dashboard'); // Puedes cambiar esta ruta
      } else {
        navigate('/login'); // Alternativamente redirige al login
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const handleCancel = () => {
    navigate('/login');
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '2rem' }}>
      <h2>Registro de Usuario</h2>
      <form onSubmit={handleSubmit}>
        {['nombre', 'apellido', 'email', 'password', 'telefono', 'direccion', 'ciudad', 'pais'].map((field) => (
          <div key={field} style={{ marginBottom: '1rem' }}>
            <label>{field.charAt(0).toUpperCase() + field.slice(1)}:</label><br />
            <input
              type={field === 'password' ? 'password' : 'text'}
              name={field}
              value={form[field]}
              onChange={handleChange}
              required
              style={{ width: '100%' }}
            />
          </div>
        ))}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button type="submit">Registrarse</button>
          <button type="button" onClick={handleCancel}>Cancelar</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
