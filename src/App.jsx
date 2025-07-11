// src/App.jsx
import { Routes, Route, Navigate } from 'react-router-dom'

import Login from './auth/pages/Login'
import Register from './auth/pages/Register'
import ForgotPassword from './auth/pages/ForgotPassword'
import ResetPassword from './auth/pages/ResetPassword'
import Profile from './auth/pages/Profile'
import Logout from './auth/pages/Logout'
import RefreshToken from './auth/pages/RefreshToken'
import Dashboard from './auth/pages/Dashboard'

import Layout from './layout/Layout'

import UsuarioList from './modules/usuarios/UsuarioList'
import UsuarioForm from './modules/usuarios/UsuarioForm'
import UsuarioDetalle from './modules/usuarios/UsuarioDetalle'

import VehiculoList from './modules/vehiculos/VehiculoList'
import VehiculoForm from './modules/vehiculos/VehiculoForm'
import VehiculoDetalle from './modules/vehiculos/VehiculoDetalle'

import CategoriaList from './modules/categorias/CategoriaList'
import CategoriaForm from './modules/categorias/CategoriaForm'

import SucursalList from './modules/sucursales/SucursalList'
import SucursalForm from './modules/sucursales/SucursalForm'

import CaracteristicaList from './modules/caracteristicas/CaracteristicaList'
import CaracteristicaForm from './modules/caracteristicas/CaracteristicaForm'

import ReservaList from './modules/reservas/ReservaList'
import ReservaForm from './modules/reservas/ReservaForm'
import ReservaDetalle from './modules/reservas/ReservaDetalle'

import PagoList from './modules/pagos/PagoList'
import PagoDetalle from './modules/pagos/PagoDetalle'

import FacturaList from './modules/facturas/FacturaList'
import FacturaDetalle from './modules/facturas/FacturaDetalle'

import AlquilerInicio from './modules/alquileres/AlquilerInicio'
import AlquilerFinalizar from './modules/alquileres/AlquilerFinalizar'
import AlquilerDetalle from './modules/alquileres/AlquilerDetalle'

function PrivateRoute({ children }) {
  const token = localStorage.getItem('token')
  return token ? children : <Navigate to="/login" />
}

function App() {
  return (
    <Routes>
      {/* Ruta raíz */}
      <Route
        path="/"
        element={
          localStorage.getItem('token') ? (
            <Navigate to="/dashboard" />
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      {/* Rutas públicas */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/refresh-token" element={<RefreshToken />} />

      {/* Rutas privadas con layout */}
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Layout />
          </PrivateRoute>
        }
      >
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />

        {/* Usuarios */}
        <Route path="usuarios" element={<UsuarioList />} />
        <Route path="usuarios/nuevo" element={<UsuarioForm />} />
        <Route path="usuarios/:id" element={<UsuarioDetalle />} />
        <Route path="usuarios/:id/editar" element={<UsuarioForm />} />

        {/* Vehículos */}
        <Route path="vehiculos" element={<VehiculoList />} />
        <Route path="vehiculos/nuevo" element={<VehiculoForm />} />
        <Route path="vehiculos/:id" element={<VehiculoDetalle />} />
        <Route path="vehiculos/:id/editar" element={<VehiculoForm />} />

        {/* Categorías */}
        <Route path="categorias" element={<CategoriaList />} />
        <Route path="categorias/nueva" element={<CategoriaForm />} />
        <Route path="categorias/:id/editar" element={<CategoriaForm />} />

        {/* Sucursales */}
        <Route path="sucursales" element={<SucursalList />} />
        <Route path="sucursales/nueva" element={<SucursalForm />} />
        <Route path="sucursales/:id/editar" element={<SucursalForm />} />

        {/* Características */}
        <Route path="caracteristicas" element={<CaracteristicaList />} />
        <Route path="caracteristicas/nueva" element={<CaracteristicaForm />} />
        <Route path="caracteristicas/:id/editar" element={<CaracteristicaForm />} />

        {/* Reservas */}
        <Route path="reservas" element={<ReservaList />} />
        <Route path="reservas/nueva" element={<ReservaForm />} />
        <Route path="reservas/:id/editar" element={<ReservaForm />} />
        <Route path="reservas/:id" element={<ReservaDetalle />} />

        {/* Pagos */}
        <Route path="pagos" element={<PagoList />} />
        <Route path="pagos/:id" element={<PagoDetalle />} />

        {/* Facturas */}
        <Route path="facturas" element={<FacturaList />} />
        <Route path="facturas/:id" element={<FacturaDetalle />} />

        {/* Alquileres */}
        <Route path="alquileres/iniciar" element={<AlquilerInicio />} />
        <Route path="alquileres/finalizar/:id" element={<AlquilerFinalizar />} />
        <Route path="alquileres/:id" element={<AlquilerDetalle />} />
      </Route>
    </Routes>
  )
}

export default App
