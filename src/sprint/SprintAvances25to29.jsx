import React from "react";

const avances = [
  { fecha: "25/oct", actividad: "Revisión de avances previos y planificación del nuevo sprint", estado: "Completo" },
  { fecha: "26/oct", actividad: "Ajuste en estructura del proyecto React y actualización del repositorio", estado: "Completo" },
  { fecha: "27/oct", actividad: "Implementación de nuevas funcionalidades visuales (componentes y CSS)", estado: "En progreso" },
  { fecha: "28/oct", actividad: "Verificación del despliegue y revisión de errores en GitHub", estado: "En progreso" },
  { fecha: "29/oct", actividad: "Validación final del sprint y preparación del reporte", estado: "Pendiente" },
];

export default function SprintAvances25_29() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Avances del Sprint (25 – 29 octubre 2025)</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Actividad</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {avances.map((item, index) => (
            <tr key={index}>
              <td>{item.fecha}</td>
              <td>{item.actividad}</td>
              <td>{item.estado}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
