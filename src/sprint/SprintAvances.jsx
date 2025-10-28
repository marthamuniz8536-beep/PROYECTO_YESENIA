import React from "react";

const avances = [
  { fecha: "17/oct", actividad: "Sprint Planning", estado: "Completo" },
  { fecha: "18/oct", actividad: "Desarrollo HU-01", estado: "En progreso" },
  { fecha: "19/oct", actividad: "Validaciones HU-01", estado: "Completo" },
  { fecha: "20/oct", actividad: "Desarrollo HU-02", estado: "En progreso" },
  { fecha: "21/oct", actividad: "Integración parcial", estado: "En progreso" },
  { fecha: "22/oct", actividad: "Ajustes solicitados", estado: "Completo" },
  { fecha: "24/oct", actividad: "Sprint Review y Retrospective", estado: "Completo" },
];

export default function SprintAvances() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Avances del Sprint (17 – 24 octubre 2025)</h2>
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