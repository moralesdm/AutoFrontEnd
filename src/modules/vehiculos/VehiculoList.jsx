import { useEffect, useState } from 'react';
import { getVehiculos } from '../../api/vehiculos';
import { Link } from 'react-router-dom';

export default function VehiculoList() {
  const [vehiculos, setVehiculos] = useState([]);

  useEffect(() => {
    getVehiculos().then(setVehiculos);
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ marginBottom: '20px' }}>Vehículos</h2>
      <Link
        to="/vehiculos/nuevo"
        style={{
          display: 'inline-block',
          marginBottom: '15px',
          padding: '8px 16px',
          backgroundColor: '#4caf50',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '4px',
          fontWeight: 'bold',
        }}
      >
        + Nuevo Vehículo
      </Link>
      <div style={{ overflowX: 'auto' }}>
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontFamily: 'Arial, sans-serif',
          }}
        >
          <thead>
            <tr style={{ backgroundColor: '#1976d2', color: 'white' }}>
              <th style={thStyle}>ID</th>
              <th style={thStyle}>Imagen</th>
              <th style={thStyle}>Marca</th>
              <th style={thStyle}>Modelo</th>
              <th style={thStyle}>Tipo</th>
              <th style={thStyle}>Año</th>
              <th style={thStyle}>Color</th>
              <th style={thStyle}>Disponible</th>
              <th style={thStyle}>Categoría</th>
              <th style={thStyle}>Precio por Día</th>
              <th style={thStyle}>Sucursal</th>
              <th style={thStyle}>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {vehiculos.map((v) => (
              <tr key={v.id} style={{ borderBottom: '1px solid #ddd' }}>
                <td style={tdStyle}>{v.id}</td>
                <td style={tdStyle}>
                  {v.imagenUrl ? (
                    <img
                      src={v.imagenUrl}
                      alt={`${v.marca} ${v.modelo}`}
                      style={{ width: 80, height: 50, objectFit: 'cover', borderRadius: 4 }}
                    />
                  ) : (
                    'Sin imagen'
                  )}
                </td>
                <td style={tdStyle}>{v.marca}</td>
                <td style={tdStyle}>{v.modelo}</td>
                <td style={tdStyle}>{v.tipo}</td>
                <td style={tdStyle}>{v.anio}</td>
                <td style={tdStyle}>{v.color}</td>
                <td style={tdStyle}>{v.disponible ? 'Sí' : 'No'}</td>
                <td style={tdStyle}>{v.categoria}</td>
                <td style={tdStyle}>${v.precioPorDia?.toFixed(2)}</td>
                <td style={tdStyle}>{v.sucursal}</td>
                <td style={tdStyle}>
                  <Link to={`/vehiculos/${v.id}`} style={linkStyle}>Detalle</Link> |{' '}
                  <Link to={`/vehiculos/${v.id}/editar`} style={linkStyle}>Editar</Link>
                </td>
              </tr>
            ))}
            {vehiculos.length === 0 && (
              <tr>
                <td colSpan="12" style={{ textAlign: 'center', padding: '20px' }}>
                  No hay vehículos disponibles.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const thStyle = {
  padding: '10px 12px',
  textAlign: 'left',
  fontWeight: 'bold',
  fontSize: '14px',
};

const tdStyle = {
  padding: '8px 12px',
  fontSize: '13px',
};

const linkStyle = {
  color: '#1976d2',
  textDecoration: 'none',
  fontWeight: '600',
};

