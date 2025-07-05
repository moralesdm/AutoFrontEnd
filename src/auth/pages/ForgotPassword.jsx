// src/auth/pages/ForgotPassword.jsx
import { useState } from 'react';
import { forgotPassword } from '../../api/auth';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await forgotPassword(email);
      setMsg('Correo enviado. Revisa tu bandeja de entrada.');
    } catch (err) {
      setMsg(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Recuperar contraseña</h2>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <button type="submit">Enviar</button>
      <p>{msg}</p>
    </form>
  );
}
