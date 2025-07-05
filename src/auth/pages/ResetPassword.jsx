// src/auth/pages/ResetPassword.jsx
import { useState } from 'react';
import { resetPassword } from '../../api/auth';

export default function ResetPassword() {
  const [token, setToken] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [msg, setMsg] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await resetPassword(token, newPassword);
      setMsg('Contraseña actualizada correctamente.');
    } catch (err) {
      setMsg(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Resetear contraseña</h2>
      <input placeholder="Token" onChange={e => setToken(e.target.value)} />
      <input type="password" placeholder="Nueva contraseña" onChange={e => setNewPassword(e.target.value)} />
      <button type="submit">Resetear</button>
      <p>{msg}</p>
    </form>
  );
}
