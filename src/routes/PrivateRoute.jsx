// src/routes/PrivateRoute.jsx
import { Navigate } from 'react-router-dom'
import { useAuth } from '../auth/hooks/useAuth'

export default function PrivateRoute({ children, roles }) {
  const { token, user } = useAuth()

  if (!token) return <Navigate to="/login" />

  // Si hay restricción de roles, validar
  if (roles && !roles.includes(user?.rol)) {
    return <Navigate to="/dashboard" />
  }

  return children
}
